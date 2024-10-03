'use client';

import Price from '@/app/_components/price';
import { Button, sharedButtonStyles } from '@/components/ui/button';
import { DEFAULT_OPTION, STORE_ROUTE_PRODUCT } from '@/lib/constants';
import { createUrl } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { createCartAndSetCookie, redirectToCheckout } from './actions';
import { useCart } from './cart-context';
import { CartItem } from './cart-item';

import { ButtonIcon, buttonIconCounterStyles } from '@/components/ui/button-icon';
import { DialogHeader } from '@/components/ui/dialog';
import { Drawer } from '@/components/ui/drawer';
import { Icon } from '@/components/ui/icon';
import { clsx } from '@/utils';

type MerchandiseSearchParams = {
  [key: string]: string;
};

export const CartDesktopTrigger = () => {
  const { cart, setIsCartOpen } = useCart();
  const cartQty = cart?.totalQuantity;

  return (
    <div className="flex max-lg:hidden">
      <Button
        onPress={() => setIsCartOpen(true)}
        className={clsx(sharedButtonStyles({ variant: 'ghost' }))}
      >
        <div className="relative">
          <Icon className="h-5 w-5" icon="shopping-cart" />
          <div
            className={clsx(
              buttonIconCounterStyles({ counterPosition: 'left', size: 'sm' }),
              '-left-2 -top-2'
            )}
          >
            <span className="flex">{cartQty}</span>
          </div>
        </div>
        {cart?.lines.edges.length ? (
          <>
            {/* <span>{hasCartItems ? `${cartQty} items` : `${cartQty} item`}</span> */}
            <span>{`${new Intl.NumberFormat(undefined, {
              style: 'currency',
              currency: cart?.cost.totalAmount.currencyCode,
              currencyDisplay: 'narrowSymbol'
            }).format(parseFloat(cart?.cost.totalAmount.amount))}`}</span>
          </>
        ) : (
          'Your cart is empty'
        )}
      </Button>
    </div>
  );
};

export const Cart = () => {
  const { cart, setIsCartOpen, isCartOpen, updateCartItem } = useCart();
  const cartQty = cart?.totalQuantity;
  const hasCartItems = cartQty && cartQty > 1;

  const quantityRef = useRef(cart?.totalQuantity);

  useEffect(() => {
    if (!cart) {
      createCartAndSetCookie();
    }
  }, [cart]);

  useEffect(() => {
    if (
      cart?.totalQuantity &&
      cart?.totalQuantity !== quantityRef.current
      // cart?.totalQuantity > 0
    ) {
      if (!isCartOpen) {
        setIsCartOpen(true);
      }
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isCartOpen, cart?.totalQuantity, quantityRef]);

  return (
    <>
      <ButtonIcon
        onPress={() => setIsCartOpen(true)}
        variant={'ghost'}
        counter={cart?.totalQuantity}
        icon="shopping-cart"
      />
      <Drawer onOpenChange={setIsCartOpen} isOpen={isCartOpen}>
        <Drawer.Content>
          <div className="flex h-full flex-col">
            <DialogHeader>{`Your shopping cart ${hasCartItems ? `(${cartQty} items)` : `(${cartQty} item)`}`}</DialogHeader>
            {!cart || cart.lines.edges.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center self-center p-8 text-center">
                <Icon icon="shopping-cart" className="h-12 w-12 text-neutral-400" />
                <h3 className="mt-2 text-base font-medium text-neutral-900">Your cart is empty</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Looks like you haven't added anything to your cart
                </p>
                <div className="mt-6">
                  <Button variant={'filled'} color={'primary'} onPress={() => setIsCartOpen(false)}>
                    Continue shopping
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="scrollbar-thin scrollbar-track-neutral-50 scrollbar-thumb-neutral-200 flex min-h-0 flex-1 flex-col overflow-y-scroll">
                  <ul className="divide-y divide-neutral-100">
                    {cart.lines.edges
                      .sort((a, b) =>
                        a.merchandise.product.title.localeCompare(b.merchandise.product.title)
                      )
                      .map((item, i) => {
                        const merchandiseSearchParams = {} as MerchandiseSearchParams;

                        item.merchandise.selectedOptions.forEach(({ name, value }) => {
                          if (value !== DEFAULT_OPTION) {
                            merchandiseSearchParams[name.toLowerCase()] = value;
                          }
                        });

                        const merchandiseUrl = createUrl(
                          `${STORE_ROUTE_PRODUCT}/${item.merchandise.product.handle}`,
                          new URLSearchParams(merchandiseSearchParams)
                        );

                        return (
                          <li key={i}>
                            <CartItem
                              cartItem={item}
                              merchandiseUrl={merchandiseUrl}
                              updateCartItem={updateCartItem}
                            />
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <div className="flex flex-shrink-0 flex-col justify-end border-t border-neutral-100 px-4 py-4">
                  <div className="flex justify-between text-base font-medium text-neutral-900">
                    <p>Subtotal</p>
                    <Price
                      amount={cart.cost.totalAmount.amount}
                      currencyCode={cart.cost.totalAmount.currencyCode}
                    />
                  </div>
                  <p className="mt-0.5 text-sm text-neutral-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6 space-y-2">
                    <form action={redirectToCheckout}>
                      <CheckoutButton />
                    </form>
                    <Button
                      size={'lg'}
                      block
                      variant={'outline'}
                      color="neutral"
                      onPress={() => setIsCartOpen(false)}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </Drawer.Content>
      </Drawer>
    </>
  );
};

function CheckoutButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      isDisabled={pending}
      isLoading={pending}
      type="submit"
      block
      size={'lg'}
      variant={'filled'}
      color={'primary'}
    >
      Proceed to Checkout
    </Button>
  );
}
