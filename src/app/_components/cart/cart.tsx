'use client';

import { Button } from '@/components/ui/button';
import { ButtonIcon } from '@/components/ui/button-icon';
import { Drawer, DrawerProps } from '@/components/ui/drawer';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Price from 'components/price';
import { DEFAULT_OPTION } from 'lib/constants';
import { createUrl } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Group, Button as RACButton } from 'react-aria-components';
import { useFormStatus } from 'react-dom';
import { createCartAndSetCookie, redirectToCheckout } from './actions';
import { useCart } from './cart-context';
import { DeleteCartItemButton } from './delete-cart-item-button';
import { EditCartItemQuantity } from './edit-cart-item-quantity';

type MerchandiseSearchParams = {
  [key: string]: string;
};

export type CartProps = DrawerProps;

export const Cart = ({ ...props }: CartProps) => {
  const { cart, updateCartItem } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

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
      if (!isOpen) {
        setIsOpen(true);
      }
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  return (
    <>
      <ButtonIcon
        onPress={openCart}
        variant={'ghost'}
        counter={cart?.totalQuantity}
        icon="shopping-bag"
      />
      <Drawer onOpenChange={closeCart} isOpen={isOpen} {...props}>
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
                  <ul className="divide-neutext-neutral-200 -my-6 divide-y">
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
                          `/product/${item.merchandise.product.handle}`,
                          new URLSearchParams(merchandiseSearchParams)
                        );

                        return (
                          <li key={i}>
                            <Group className="flex py-6 hover:bg-neutral-100">
                              <div className="relative overflow-hidden">
                                <div className="absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-75">
                                  <DeleteCartItemButton
                                    item={item}
                                    optimisticUpdate={updateCartItem}
                                  />
                                </div>
                                <div className="border-neutext-neutral-200 relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                                  <Image
                                    fill
                                    alt={
                                      item.merchandise.product.featuredImage.altText ||
                                      item.merchandise.product.title
                                    }
                                    src={item.merchandise.product.featuredImage.url}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <div className="flex justify-between text-base font-medium text-neutral-900">
                                  <h3>
                                    <Link href={merchandiseUrl}>
                                      {item.merchandise.product.title}
                                    </Link>
                                    {item.merchandise.title !== DEFAULT_OPTION ? (
                                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                        {item.merchandise.title}
                                      </p>
                                    ) : null}
                                  </h3>
                                  <p className="ml-4">
                                    <Price
                                      className="flex justify-end space-y-2 text-right text-sm"
                                      amount={item.cost.totalAmount.amount}
                                      currencyCode={item.cost.totalAmount.currencyCode}
                                    />
                                  </p>
                                </div>

                                <EditCartItemQuantity item={item} updateCartItem={updateCartItem} />

                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-neutral-500">Qty {item.quantity}</p>

                                  <div className="flex">
                                    <RACButton
                                      type="button"
                                      className="font-medium text-primary-500 hover:text-primary-600"
                                    >
                                      Remove
                                    </RACButton>
                                  </div>
                                </div>
                              </div>
                            </Group>
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
