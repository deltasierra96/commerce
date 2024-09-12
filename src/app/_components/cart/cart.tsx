'use client';

import { Button } from '@/components/ui/button';
import { ButtonIcon } from '@/components/ui/button-icon';
import { Drawer, DrawerProps } from '@/components/ui/drawer';
import { DEFAULT_OPTION, STORE_ROUTE_PRODUCT } from '@/lib/constants';
import { createUrl } from '@/lib/utils';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Price from 'components/price';
import { useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { createCartAndSetCookie, redirectToCheckout } from './actions';
import { useCart } from './cart-context';
import { CartItem } from './cart-item';

type MerchandiseSearchParams = {
  [key: string]: string;
};

export type CartProps = DrawerProps;

export const Cart = ({ ...props }: CartProps) => {
  const { cart, updateCartItem, isCartOpen, setIsCartOpen } = useCart();
  const quantityRef = useRef(cart?.totalQuantity);

  useEffect(() => {
    if (!cart) {
      createCartAndSetCookie();
    }
  }, [cart]);

  useEffect(() => {
    if (
      cart?.totalQuantity &&
      cart?.totalQuantity !== quantityRef.current &&
      cart?.totalQuantity > 0
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
        icon="shopping-bag"
      />
      <Drawer onOpenChange={setIsCartOpen} isOpen={isCartOpen} {...props}>
        <Drawer.Content>
          <div className="flex h-full flex-col overflow-y-scroll">
            {!cart || cart.lines.length === 0 ? (
              <div className="scrollbar-thin scrollbar-track-neutral-50 scrollbar-thumb-neutral-200 flex-1 overflow-y-scroll px-3">
                <div className="mt-8">
                  <div className="flow-root">
                    <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                      <ShoppingCartIcon className="h-16" />
                      <p className="mt-6 text-center text-2xl font-bold">Your cart is empty.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex h-full flex-col justify-between">
                  <ul className="divide-neutext-neutral-200 divide-y">
                    {cart.lines
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
                <div className="border-neutext-neutral-200 border-t px-4 py-6 sm:px-6">
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
                  <div className="mt-6 space-y-4">
                    <form action={redirectToCheckout}>
                      <CheckoutButton />
                    </form>
                    <Button block variant={'ghost'} color="neutral" rightIcon="arrow-right">
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
      variant={'filled'}
      color={'primary'}
    >
      Proceed to Checkout
    </Button>
  );
}
