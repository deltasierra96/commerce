'use client';
import { Button, ButtonLink } from '@/components/ui/button';
import { ButtonIcon } from '@/components/ui/button-icon';
import { Drawer, type DrawerProps } from '@/components/ui/drawer';
import { cartProducts } from '@/data/cart';
import Image from 'next/image';
import { Link, Button as RACButton } from 'react-aria-components';

type CartProps = DrawerProps;

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'GBP',
});

export const Cart = (props: CartProps) => (
  <Drawer {...props}>
    <ButtonIcon variant={'ghost'} counter={0} icon='shopping-bag' />

    <Drawer.Content>
      <div className='flex h-full flex-col overflow-y-scroll'>
        <div className='flex-1 overflow-y-scroll px-3 scrollbar-thin scrollbar-track-neutral-50 scrollbar-thumb-neutral-200'>
          <div className='mt-8'>
            <div className='flow-root'>
              <ul role='list' className='divide-neutext-neutral-200 -my-6 divide-y'>
                {cartProducts.map((product) => (
                  <li key={product.id} className='flex py-6'>
                    <div className='border-neutext-neutral-200 relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border'>
                      <Image
                        fill
                        src={product.images[0]?.src}
                        alt={product.images[0]?.alt}
                        className='h-full w-full object-cover object-center'
                      />
                    </div>

                    <div className='ml-4 flex flex-1 flex-col'>
                      <div>
                        <div className='flex justify-between text-base font-medium text-neutral-900'>
                          <h3>
                            <Link href={product.href}>{product.name}</Link>
                          </h3>
                          <p className='ml-4'>{formatter.format(product.price)}</p>
                        </div>
                        <p className='mt-1 text-sm text-neutral-500'>{product.color}</p>
                      </div>
                      <div className='flex flex-1 items-end justify-between text-sm'>
                        <p className='text-neutral-500'>Qty {product.qty}</p>

                        <div className='flex'>
                          <RACButton
                            type='button'
                            className='font-medium text-primary-500 hover:text-primary-600'
                          >
                            Remove
                          </RACButton>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='border-neutext-neutral-200 border-t px-4 py-6 sm:px-6'>
          <div className='flex justify-between text-base font-medium text-neutral-900'>
            <p>Subtotal</p>
            <p>£262.00</p>
          </div>
          <p className='mt-0.5 text-sm text-neutral-500'>
            Shipping and taxes calculated at checkout.
          </p>
          <div className='mt-6 space-y-4'>
            <ButtonLink block href='#' variant={'filled'} color={'primary'}>
              Checkout
            </ButtonLink>
            <Button block variant={'ghost'} color='neutral' rightIcon='arrow-right'>
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </Drawer.Content>
  </Drawer>
);
