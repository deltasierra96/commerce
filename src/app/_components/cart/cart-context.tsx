'use client';

import { useFragment } from '@/__generated__';
import {
  BaseCartLine,
  Cart,
  CartFragment,
  CartFragmentDoc,
  CartLine,
  GetCartQuery,
  Product,
  ProductFragment,
  ProductVariant
} from '@/__generated__/graphql';
import { ApolloQueryResult } from '@apollo/client';
import React, { createContext, use, useContext, useMemo, useOptimistic, useState } from 'react';

export type CartUpdateType = 'increment' | 'decrement' | 'delete';

type CartAction =
  | { type: 'UPDATE_ITEM'; payload: { merchandiseId: string; updateType: CartUpdateType } }
  | { type: 'ADD_ITEM'; payload: { variant: ProductVariant; product: ProductFragment } };

export type UpdateCartItemProps = (merchandiseId: string, updateType: CartUpdateType) => void;

type CartContextType = {
  cart: CartFragment;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updateCartItem: UpdateCartItemProps;
  addCartItem: (variant: ProductVariant, product: ProductFragment) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

function calculateItemCost(quantity: number, price: string): string {
  return (Number(price) * quantity).toString();
}

function updateCartItem(item: CartLine, updateType: CartUpdateType): CartLine | null {
  if (updateType === 'delete') return null;

  const newQuantity = updateType === 'increment' ? item.quantity + 1 : item.quantity - 1;
  if (newQuantity === 0) return null;

  const singleItemAmount = Number(item.cost.totalAmount.amount) / item.quantity;
  const newTotalAmount = calculateItemCost(newQuantity, singleItemAmount.toString());

  return {
    ...item,
    quantity: newQuantity,
    cost: {
      ...item.cost,
      totalAmount: {
        ...item.cost.totalAmount,
        amount: newTotalAmount
      }
    }
  };
}

function createOrUpdateCartItem(
  existingItem: CartLine,
  variant: ProductVariant,
  product: Product
): CartLine {
  const quantity = existingItem ? existingItem.quantity + 1 : 1;
  const totalAmount = calculateItemCost(quantity, variant.price.amount);

  return {
    id: existingItem.id,
    quantity,
    cost: {
      amountPerQuantity: {
        amount: variant.price.amount,
        currencyCode: variant.price.currencyCode
      },
      totalAmount: {
        amount: totalAmount,
        currencyCode: variant.price.currencyCode
      },
      subtotalAmount: {
        amount: variant.price.amount,
        currencyCode: variant.price.currencyCode
      }
    },
    merchandise: {
      id: variant.id,
      title: variant.title,
      selectedOptions: variant.selectedOptions,
      product: {
        metafields: product.metafields,
        id: product.id,
        handle: product.handle,
        title: product.title,
        featuredImage: product.featuredImage?.url
      }
    }
  };
}

function updateCartTotals(lines: BaseCartLine[]): Pick<Cart, 'totalQuantity' | 'cost'> {
  const totalQuantity = lines.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = lines.reduce((sum, item) => sum + Number(item.cost.totalAmount.amount), 0);
  const currencyCode = lines[0]?.cost.totalAmount.currencyCode ?? 'USD';

  return {
    totalQuantity,
    cost: {
      subtotalAmount: { amount: totalAmount.toString(), currencyCode },
      totalAmount: { amount: totalAmount.toString(), currencyCode },
      totalTaxAmount: { amount: '0', currencyCode }
    }
  };
}

function createEmptyCart(): Cart {
  return {
    id: undefined,
    checkoutUrl: '',
    totalQuantity: 0,
    lines: [],
    cost: {
      subtotalAmount: { amount: '0', currencyCode: 'USD' },
      totalAmount: { amount: '0', currencyCode: 'USD' },
      totalTaxAmount: { amount: '0', currencyCode: 'USD' }
    }
  };
}

function cartReducer(state: CartFragment | null | undefined, action: CartAction): Cart {
  const currentCart = state || createEmptyCart();

  switch (action.type) {
    case 'UPDATE_ITEM': {
      const { merchandiseId, updateType } = action.payload;

      const updatedLines = currentCart.lines.edges
        .map((item) =>
          item.node.id === merchandiseId ? updateCartItem(item.node, updateType) : item
        )
        .filter(Boolean);

      if (updatedLines.length === 0) {
        return {
          ...currentCart,
          // lines: undefined,
          totalQuantity: 0,
          cost: {
            ...currentCart.cost,
            totalAmount: { ...currentCart.cost.totalAmount, amount: '0' }
          }
        };
      }

      return { ...currentCart, ...updateCartTotals(updatedLines), lines: updatedLines };
    }

    case 'ADD_ITEM': {
      const { variant, product } = action.payload;
      const existingItem = currentCart.lines.nodes.find(
        (item) => item.merchandise.id === variant.id
      );
      const updatedItem = createOrUpdateCartItem(existingItem, variant, product);

      const updatedLines = existingItem
        ? currentCart.lines.map((item) => (item.merchandise.id === variant.id ? updatedItem : item))
        : [...currentCart.lines, updatedItem];

      return { ...currentCart, ...updateCartTotals(updatedLines), lines: updatedLines };
    }
    default:
      return currentCart;
  }
}

export function CartProvider({
  children,
  cartPromise
}: {
  children: React.ReactNode;
  cartPromise: Promise<ApolloQueryResult<GetCartQuery>>;
}) {
  const initialCart = use(cartPromise);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useFragment(CartFragmentDoc, initialCart.data.cart);

  console.log('cart', cart);
  const [optimisticCart, updateOptimisticCart] = useOptimistic(cart, cartReducer);

  const updateCartItem = (merchandiseId: string, updateType: CartUpdateType) => {
    updateOptimisticCart({ type: 'UPDATE_ITEM', payload: { merchandiseId, updateType } });
  };

  const addCartItem = (variant: ProductVariant, product: ProductFragment) => {
    updateOptimisticCart({ type: 'ADD_ITEM', payload: { variant, product } });
  };

  const value = useMemo(
    () => ({
      cart: optimisticCart,
      updateCartItem,
      addCartItem,
      isCartOpen,
      setIsCartOpen
    }),
    [optimisticCart, isCartOpen, setIsCartOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
