import Price from '@/app/_components/price';
import { DEFAULT_OPTION } from '@/lib/constants';
import { CartItem as ShopifyCartItemProps } from '@/lib/shopify/types';
import Image from 'next/image';
import { Group, Link } from 'react-aria-components';
import { UpdateCartItemProps, useCart } from './cart-context';
import { DeleteCartItemButton } from './delete-cart-item-button';
import { EditCartItemQuantity } from './edit-cart-item-quantity';

type CartItemProps = {
  cartItem: ShopifyCartItemProps;
  merchandiseUrl: string;
  updateCartItem: UpdateCartItemProps;
};

export const CartItem = ({ cartItem, merchandiseUrl, updateCartItem, ...props }: CartItemProps) => {
  const { setIsCartOpen } = useCart();
  return (
    <Group className="flex px-4 py-4" {...props}>
      <div className="relative inline-flex overflow-hidden">
        <div className="relative size-12 flex-shrink-0 overflow-hidden rounded-card border border-neutral-100 text-neutral-200 sm:size-24">
          <Image
            width={150}
            height={150}
            alt={
              cartItem.merchandise.product.featuredImage.altText ||
              cartItem.merchandise.product.title
            }
            src={cartItem.merchandise.product.featuredImage.url}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div className="ml-4 flex flex-1 flex-col gap-y-2">
        <div className="flex justify-between">
          <h3 className="flex flex-col">
            <Link
              className={'text-sm font-medium outline-none hover:text-neutral-700 hover:underline'}
              onPress={() => setIsCartOpen(false)}
              href={merchandiseUrl}
            >
              {cartItem.merchandise.product.title}
            </Link>
            <div className="mt-1">
              {cartItem.merchandise.title !== DEFAULT_OPTION ? (
                <p className="text-sm text-neutral-500">{cartItem.merchandise.title}</p>
              ) : null}
            </div>
          </h3>
          <Price
            className="ml-4 space-y-2 text-base font-semibold"
            amount={cartItem.cost.totalAmount.amount}
            currencyCode={cartItem.cost.totalAmount.currencyCode}
          />
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <EditCartItemQuantity item={cartItem} updateCartItem={updateCartItem} />
          <DeleteCartItemButton item={cartItem} optimisticUpdate={updateCartItem} />
        </div>
      </div>
    </Group>
  );
};
