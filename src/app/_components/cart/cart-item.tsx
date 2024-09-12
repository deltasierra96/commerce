import Price from 'components/price';
import { DEFAULT_OPTION } from 'lib/constants';
import { type CartItem as ShopifyCartItemProps } from 'lib/shopify/types';
import Image from 'next/image';
import { Link, Button as RACButton } from 'react-aria-components';
import { UpdateCartItemProps } from './cart-context';
import { DeleteCartItemButton } from './delete-cart-item-button';
import { EditCartItemQuantity } from './edit-cart-item-quantity';

type CartItemProps = {
  cartItem: ShopifyCartItemProps;
  merchandiseUrl: string;
  updateCartItem: UpdateCartItemProps;
};

export const CartItem = ({ cartItem, merchandiseUrl, updateCartItem, ...props }: CartItemProps) => {
  return (
    <div className="flex py-6" {...props}>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-75">
          <DeleteCartItemButton item={cartItem} optimisticUpdate={updateCartItem} />
        </div>
        <div className="border-neutext-neutral-200 relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
          <Image
            fill
            alt={
              cartItem.merchandise.product.featuredImage.altText ||
              cartItem.merchandise.product.title
            }
            src={cartItem.merchandise.product.featuredImage.url}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-base font-medium text-neutral-900">
          <h3>
            <Link href={merchandiseUrl}>{cartItem.merchandise.product.title}</Link>
            {cartItem.merchandise.title !== DEFAULT_OPTION ? (
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {cartItem.merchandise.title}
              </p>
            ) : null}
          </h3>
          <p className="ml-4">
            <Price
              className="flex justify-end space-y-2 text-right text-sm"
              amount={cartItem.cost.totalAmount.amount}
              currencyCode={cartItem.cost.totalAmount.currencyCode}
            />
          </p>
        </div>

        <EditCartItemQuantity item={cartItem} updateCartItem={updateCartItem} />

        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-neutral-500">Qty {cartItem.quantity}</p>

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
    </div>
  );
};
