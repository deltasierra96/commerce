import { ProductFragment } from '@/__generated__/graphql';
import { clsx } from '@/utils';

type ProductStockProps = {
  product: ProductFragment;
  className?: string;
  bordered?: boolean;
  lowStockCount?: number;
};

export const ProductStock = ({
  product,
  bordered = false,
  className,
  lowStockCount = 5,
  ...props
}: ProductStockProps) => {
  const StockLabel = (qty: number) => {
    switch (true) {
      case qty > 1 && qty < lowStockCount:
        return 'Low on stock';
      case qty >= lowStockCount:
        return 'In stock';

      default:
        return 'Out of stock';
    }
  };

  return (
    <div
      className={clsx(
        'inline-flex items-center justify-center space-x-2 font-medium text-neutral-700',
        bordered && 'rounded-md border border-neutral-100 bg-white px-2.5 py-1.5',

        className
      )}
      {...props}
    >
      {product.totalInventory ? (
        <>
          <div
            className={clsx(
              'flex size-4 items-center justify-center rounded-full before:flex before:size-2 before:animate-pulse before:rounded-full',
              product.totalInventory === 0 && 'bg-red-100 before:bg-red-500',
              product.totalInventory >= 1 &&
                product.totalInventory <= 5 &&
                'bg-yellow-100 before:bg-yellow-500',
              product.totalInventory > 5 && 'bg-green-100 before:bg-green-500',
              className
            )}
          />
          <span className="text-sm font-semibold">{StockLabel(product.totalInventory)}</span>
        </>
      ) : (
        'Out of stock'
      )}
    </div>
  );
};
