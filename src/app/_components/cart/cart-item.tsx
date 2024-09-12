import Price from '@/app/_components/price';
import { DEFAULT_OPTION } from '@/lib/constants';
import { CartItem as ShopifyCartItemProps } from '@/lib/shopify/types';
import Image from 'next/image';
import { Link } from 'react-aria-components';
import { UpdateCartItemProps, useCart } from './cart-context';
import { DeleteCartItemButton } from './delete-cart-item-button';
import { EditCartItemQuantity } from './edit-cart-item-quantity';

type CartItemProps = {
  cartItem: ShopifyCartItemProps;
  merchandiseUrl: string;
  updateCartItem: UpdateCartItemProps;
};

export const CartItem = ({ cartItem, merchandiseUrl, updateCartItem, ...props }: CartItemProps) => {
  const { isCartOpen, setIsCartOpen } = useCart();
  console.log('isCartOpen', isCartOpen);
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

      <div className="ml-4 space-y-1">
        <div>
          <h3 className="flex justify-between text-base font-medium text-neutral-900">
            <Link onPress={() => setIsCartOpen(false)} href={merchandiseUrl}>
              {cartItem.merchandise.product.title}
            </Link>
            {cartItem.merchandise.title !== DEFAULT_OPTION ? (
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {cartItem.merchandise.title}
              </p>
            ) : null}
          </h3>
          <Price
            className="space-y-2 text-base"
            amount={cartItem.cost.totalAmount.amount}
            currencyCode={cartItem.cost.totalAmount.currencyCode}
          />
        </div>

        <EditCartItemQuantity item={cartItem} updateCartItem={updateCartItem} />
      </div>
    </div>
  );
};
