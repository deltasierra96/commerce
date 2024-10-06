'use client';
import { Product } from '@/shopify/types';
import { clsx } from '@/utils';

export type ProductCardPriceProps = {
  product: Product;
  showCurrencyCode?: boolean;
};

export const ProductCardPrice = ({
  product,
  showCurrencyCode = false,
  ...props
}: ProductCardPriceProps) => {
  const { maxVariantPrice, minVariantPrice } = product.priceRange;
  const { currencyCode, amount } = maxVariantPrice;
  const hasSalePrice = maxVariantPrice.amount !== minVariantPrice.amount;

  const formatPrice = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currencyCode,
    currencyDisplay: 'narrowSymbol'
  });

  const sharedPriceStyles = clsx('flex text-base font-medium');

  return (
    <div className="tracking-tight" {...props}>
      {hasSalePrice ? (
        <div className="flex flex-nowrap gap-x-2">
          <p
            suppressHydrationWarning={true}
            className={clsx(hasSalePrice && 'line-through', sharedPriceStyles)}
          >
            {`${formatPrice.format(parseFloat(maxVariantPrice.amount))}`}
            {showCurrencyCode ? <span>{maxVariantPrice.currencyCode}</span> : null}
          </p>
          <p
            suppressHydrationWarning={true}
            className={clsx('flex text-red-700', sharedPriceStyles)}
          >
            {`${formatPrice.format(parseFloat(minVariantPrice.amount))}`}
            {showCurrencyCode ? <span>{minVariantPrice.currencyCode}</span> : null}
          </p>
        </div>
      ) : (
        <p suppressHydrationWarning={true} className={clsx(sharedPriceStyles)}>
          {`${formatPrice.format(parseFloat(maxVariantPrice.amount))}`}
          {showCurrencyCode ? <span>{maxVariantPrice.currencyCode}</span> : null}
        </p>
      )}
    </div>
  );
};
