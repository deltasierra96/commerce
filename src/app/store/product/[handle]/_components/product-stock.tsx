import { Product } from '@/lib/shopify/types';
import { clsx } from '@/utils';

type ProductStockProps = {
  product: Product;
};

export const ProductStock = ({ product, ...props }: ProductStockProps) => {
  return (
    <div
      className={clsx(
        'inline-flex items-center justify-center rounded-md px-2 py-1 font-medium',
        product.totalInventory === 0
          ? 'bg-neutral-100 text-neutral-700'
          : 'bg-neutral-100 text-neutral-700'
      )}
    >
      {product.totalInventory === 0 ? 'Out of stock' : 'In Stock'}
    </div>
  );
};
