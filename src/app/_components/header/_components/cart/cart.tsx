'use client';

import { Button } from '@/components/ui/button';
import { ButtonIcon } from '@/components/ui/button-icon';
import { Drawer, DrawerProps } from '@/components/ui/drawer';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import LoadingDots from 'components/loading-dots';
import Price from 'components/price';
import { DEFAULT_OPTION } from 'lib/constants';
import { createUrl } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Button as RACButton } from 'react-aria-components';
import { useFormStatus } from 'react-dom';
import { createCartAndSetCookie, redirectToCheckout } from './actions';
import { useCart } from './cart-context';

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
      {/* <button aria-label="Open cart" onClick={openCart}>
        <OpenCart quantity={cart?.totalQuantity} />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl md:w-[390px] dark:border-neutral-700 dark:bg-black/80 dark:text-white">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">My Cart</p>
                <button aria-label="Close cart" onClick={closeCart}>
                  <CloseCart />
                </button>
              </div>

              {!cart || cart.lines.length === 0 ? (
                <div className="flex flex-col items-center justify-center w-full mt-20 overflow-hidden">
                  <ShoppingCartIcon className="h-16" />
                  <p className="mt-6 text-2xl font-bold text-center">Your cart is empty.</p>
                </div>
              ) : (
                <div className="flex flex-col justify-between h-full p-1 overflow-hidden">
                  <ul className="flex-grow py-4 overflow-auto">
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
                          <li
                            key={i}
                            className="flex flex-col w-full border-b border-neutral-300 dark:border-neutral-700"
                          >
                            <div className="relative flex flex-row justify-between w-full px-1 py-4">
                              <div className="absolute z-40 -mt-2 -ml-1">
                                <DeleteItemButton item={item} optimisticUpdate={updateCartItem} />
                              </div>
                              <div className="flex flex-row">
                                <div className="relative w-16 h-16 overflow-hidden border rounded-md border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                                  <Image
                                    className="object-cover w-full h-full"
                                    width={64}
                                    height={64}
                                    alt={
                                      item.merchandise.product.featuredImage.altText ||
                                      item.merchandise.product.title
                                    }
                                    src={item.merchandise.product.featuredImage.url}
                                  />
                                </div>
                                <Link
                                  href={merchandiseUrl}
                                  onClick={closeCart}
                                  className="z-30 flex flex-row ml-2 space-x-4"
                                >
                                  <div className="flex flex-col flex-1 text-base">
                                    <span className="leading-tight">
                                      {item.merchandise.product.title}
                                    </span>
                                    {item.merchandise.title !== DEFAULT_OPTION ? (
                                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                        {item.merchandise.title}
                                      </p>
                                    ) : null}
                                  </div>
                                </Link>
                              </div>
                              <div className="flex flex-col justify-between h-16">
                                <Price
                                  className="flex justify-end space-y-2 text-sm text-right"
                                  amount={item.cost.totalAmount.amount}
                                  currencyCode={item.cost.totalAmount.currencyCode}
                                />
                                <div className="flex flex-row items-center ml-auto border rounded-full h-9 border-neutral-200 dark:border-neutral-700">
                                  <EditItemQuantityButton
                                    item={item}
                                    type="minus"
                                    optimisticUpdate={updateCartItem}
                                  />
                                  <p className="w-6 text-center">
                                    <span className="w-full text-sm">{item.quantity}</span>
                                  </p>
                                  <EditItemQuantityButton
                                    item={item}
                                    type="plus"
                                    optimisticUpdate={updateCartItem}
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                  <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="flex items-center justify-between pb-1 mb-3 border-b border-neutral-200 dark:border-neutral-700">
                      <p>Taxes</p>
                      <Price
                        className="text-base text-right text-black dark:text-white"
                        amount={cart.cost.totalTaxAmount.amount}
                        currencyCode={cart.cost.totalTaxAmount.currencyCode}
                      />
                    </div>
                    <div className="flex items-center justify-between pt-1 pb-1 mb-3 border-b border-neutral-200 dark:border-neutral-700">
                      <p>Shipping</p>
                      <p className="text-right">Calculated at checkout</p>
                    </div>
                    <div className="flex items-center justify-between pt-1 pb-1 mb-3 border-b border-neutral-200 dark:border-neutral-700">
                      <p>Total</p>
                      <Price
                        className="text-base text-right text-black dark:text-white"
                        amount={cart.cost.totalAmount.amount}
                        currencyCode={cart.cost.totalAmount.currencyCode}
                      />
                    </div>
                  </div>
                  <form action={redirectToCheckout}>
                    <CheckoutButton />
                  </form>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition> */}
      <Drawer {...props}>
        <ButtonIcon variant={'ghost'} counter={cart?.totalQuantity} icon="shopping-bag" />

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
                <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                  {/* <ul className="flex-grow py-4 overflow-auto">
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
                              <li
                                key={i}
                                className="flex flex-col w-full border-b border-neutral-300 dark:border-neutral-700"
                              >
                                <div className="relative flex flex-row justify-between w-full px-1 py-4">
                                  <div className="absolute z-40 -mt-2 -ml-1">
                                    <DeleteItemButton
                                      item={item}
                                      optimisticUpdate={updateCartItem}
                                    />
                                  </div>
                                  <div className="flex flex-row">
                                    <div className="relative w-16 h-16 overflow-hidden border rounded-md border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                                      <Image
                                        className="object-cover w-full h-full"
                                        width={64}
                                        height={64}
                                        alt={
                                          item.merchandise.product.featuredImage.altText ||
                                          item.merchandise.product.title
                                        }
                                        src={item.merchandise.product.featuredImage.url}
                                      />
                                    </div>
                                    <Link
                                      href={merchandiseUrl}
                                      onClick={closeCart}
                                      className="z-30 flex flex-row ml-2 space-x-4"
                                    >
                                      <div className="flex flex-col flex-1 text-base">
                                        <span className="leading-tight">
                                          {item.merchandise.product.title}
                                        </span>
                                        {item.merchandise.title !== DEFAULT_OPTION ? (
                                          <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                            {item.merchandise.title}
                                          </p>
                                        ) : null}
                                      </div>
                                    </Link>
                                  </div>
                                  <div className="flex flex-col justify-between h-16">
                                    <Price
                                      className="flex justify-end space-y-2 text-sm text-right"
                                      amount={item.cost.totalAmount.amount}
                                      currencyCode={item.cost.totalAmount.currencyCode}
                                    />
                                    <div className="flex flex-row items-center ml-auto border rounded-full h-9 border-neutral-200 dark:border-neutral-700">
                                      <EditItemQuantityButton
                                        item={item}
                                        type="minus"
                                        optimisticUpdate={updateCartItem}
                                      />
                                      <p className="w-6 text-center">
                                        <span className="w-full text-sm">{item.quantity}</span>
                                      </p>
                                      <EditItemQuantityButton
                                        item={item}
                                        type="plus"
                                        optimisticUpdate={updateCartItem}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                      </ul> */}
                  <ul role="list" className="divide-neutext-neutral-200 -my-6 divide-y">
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
                          <>
                            <li key={i} className="flex py-6">
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

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
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
                                </div>
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
                            </li>

                            {/* <li
                                  key={i}
                                  className="flex flex-col w-full border-b border-neutral-300 dark:border-neutral-700"
                                >
                                  <div className="relative flex flex-row justify-between w-full px-1 py-4">
                                    <div className="absolute z-40 -mt-2 -ml-1">
                                      <DeleteItemButton
                                        item={item}
                                        optimisticUpdate={updateCartItem}
                                      />
                                    </div>
                                    <div className="flex flex-row">
                                      <div className="relative w-16 h-16 overflow-hidden border rounded-md border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                                        <Image
                                          className="object-cover w-full h-full"
                                          width={64}
                                          height={64}
                                          alt={
                                            item.merchandise.product.featuredImage.altText ||
                                            item.merchandise.product.title
                                          }
                                          src={item.merchandise.product.featuredImage.url}
                                        />
                                      </div>
                                      <Link
                                        href={merchandiseUrl}
                                        onClick={closeCart}
                                        className="z-30 flex flex-row ml-2 space-x-4"
                                      >
                                        <div className="flex flex-col flex-1 text-base">
                                          <span className="leading-tight">
                                            {item.merchandise.product.title}
                                          </span>
                                          {item.merchandise.title !== DEFAULT_OPTION ? (
                                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                              {item.merchandise.title}
                                            </p>
                                          ) : null}
                                        </div>
                                      </Link>
                                    </div>
                                    <div className="flex flex-col justify-between h-16">
                                      <Price
                                        className="flex justify-end space-y-2 text-sm text-right"
                                        amount={item.cost.totalAmount.amount}
                                        currencyCode={item.cost.totalAmount.currencyCode}
                                      />
                                      <div className="flex flex-row items-center ml-auto border rounded-full h-9 border-neutral-200 dark:border-neutral-700">
                                        <EditItemQuantityButton
                                          item={item}
                                          type="minus"
                                          optimisticUpdate={updateCartItem}
                                        />
                                        <p className="w-6 text-center">
                                          <span className="w-full text-sm">{item.quantity}</span>
                                        </p>
                                        <EditItemQuantityButton
                                          item={item}
                                          type="plus"
                                          optimisticUpdate={updateCartItem}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </li> */}
                          </>
                        );
                      })}
                  </ul>
                  <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
                      <p>Taxes</p>
                      <Price
                        className="text-right text-base text-black dark:text-white"
                        amount={cart.cost.totalTaxAmount.amount}
                        currencyCode={cart.cost.totalTaxAmount.currencyCode}
                      />
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <p>Shipping</p>
                      <p className="text-right">Calculated at checkout</p>
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <p>Total</p>
                      <Price
                        className="text-right text-base text-black dark:text-white"
                        amount={cart.cost.totalAmount.amount}
                        currencyCode={cart.cost.totalAmount.currencyCode}
                      />
                    </div>
                  </div>
                  <form action={redirectToCheckout}>
                    <CheckoutButton />
                  </form>
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
                    <Button block variant={'filled'} color={'primary'}>
                      Checkout
                    </Button>
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
    <Button isDisabled={pending} type="submit" block variant={'filled'} color={'primary'}>
      {pending ? <LoadingDots className="bg-white" /> : 'Proceed to Checkout'}
    </Button>
  );
}
