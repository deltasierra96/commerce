'use client';
import { Product } from '@/lib/shopify/types';
import { clsx } from '@/utils';

export type ProductPriceProps = {
  product: Product;
  className?: string;
  showCurrencyCode?: boolean;
};

export const ProductPrice = ({
  product,
  className,
  showCurrencyCode,
  ...props
}: ProductPriceProps) => {
  const { maxVariantPrice } = product.priceRange;
  const { currencyCode, amount } = maxVariantPrice;
  return (
    <div className="text-3xl font-bold tracking-tight" {...props}>
      <p suppressHydrationWarning={true} className={clsx(className)}>
        {`${new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: currencyCode,
          currencyDisplay: 'narrowSymbol'
        }).format(parseFloat(amount))}`}
        {showCurrencyCode ? <span className={clsx('ml-1 inline')}>{`${currencyCode}`}</span> : null}
      </p>
    </div>
  );
};
