'use client';

import Price from '@/app/_components/price';
import { Button, sharedButtonStyles } from '@/components/ui/button';
import { ButtonIcon } from '@/components/ui/button-icon';
import { DEFAULT_OPTION, STORE_ROUTE_PRODUCT } from '@/lib/constants';
import { createUrl } from '@/lib/utils';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { createCartAndSetCookie, redirectToCheckout } from './actions';
import { useCart } from './cart-context';
import { CartItem } from './cart-item';

import { buttonIconCounterStyles } from '@/components/ui/button-icon/button-icon';
import { Icon } from '@/components/ui/icon';
import { Popover } from '@/components/ui/popover';
import { clsx } from '@/utils';

type MerchandiseSearchParams = {
  [key: string]: string;
};

export const Cart = () => {
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

  const cartQty = cart?.totalQuantity;
  const hasCartItems = cartQty && cartQty > 1;
  let triggerRef = useRef(null);
  return (
    <>
      <div className="hidden max-lg:flex">
        <ButtonIcon
          onPress={() => setIsCartOpen(true)}
          variant={'ghost'}
          counter={cartQty}
          icon="shopping-bag"
        />
      </div>

      <div className="flex max-lg:hidden">
        <Button
          ref={triggerRef}
          onPress={() => setIsCartOpen(true)}
          className={clsx(sharedButtonStyles({ variant: 'ghost' }))}
        >
          <div className="relative">
            <Icon className="h-5 w-5" icon="shopping-bag" />
            <div
              className={clsx(
                buttonIconCounterStyles({ counterPosition: 'left', size: 'sm' }),
                '-left-2 -top-2'
              )}
            >
              {cartQty}
            </div>
          </div>
          {cart?.lines.length ? (
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

      <Popover
        placement="bottom end"
        triggerRef={triggerRef}
        onOpenChange={setIsCartOpen}
        isOpen={isCartOpen}
      >
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
              <div className="flex h-full flex-col justify-between px-4">
                <ul className="divide-y divide-neutral-100">
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
      </Popover>

      {/* <Drawer
        onOpenChange={setIsCartOpen}
        isOpen={isCartOpen}
        title={`Your shopping cart ${hasCartItems ? `(${cartQty} items)` : `(${cartQty} item)`}`}
      >
        <Drawer.Content>
          <div className="flex flex-col h-full overflow-y-scroll">
            {!cart || cart.lines.length === 0 ? (
              <div className="flex-1 px-3 overflow-y-scroll scrollbar-thin scrollbar-track-neutral-50 scrollbar-thumb-neutral-200">
                <div className="mt-8">
                  <div className="flow-root">
                    <div className="flex flex-col items-center justify-center w-full mt-20 overflow-hidden">
                      <ShoppingCartIcon className="h-16" />
                      <p className="mt-6 text-2xl font-bold text-center">Your cart is empty.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-col justify-between h-full px-4">
                  <ul className="divide-y divide-neutral-100">
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
                <div className="px-4 py-6 border-t border-neutext-neutral-200 sm:px-6">
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
      </Drawer> */}
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
