'use client';
import { Product } from '@/lib/shopify/types';
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
  const isOnSale = maxVariantPrice.amount !== minVariantPrice.amount;

  const formatPrice = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currencyCode,
    currencyDisplay: 'narrowSymbol'
  });

  return (
    <div className="tracking-tight" {...props}>
      {isOnSale ? <div className="text-sm font-medium text-neutral-950">From</div> : null}
      <p suppressHydrationWarning={true} className={clsx(isOnSale && 'font-medium line-through')}>
        {`${formatPrice.format(parseFloat(amount))}`}
        {showCurrencyCode ? <span>{currencyCode}</span> : null}
      </p>
      {/* {isOnSale && variant?.price.amount ? (
          <div className="flex text-sm text-red-500">
            <span suppressHydrationWarning={true}>
              {`Now ${formatPrice.format(parseFloat(variant?.price.amount))}`}
              {showCurrencyCode ? <CurrencyCode currencyCode={currencyCode} /> : null}
            </span>
          </div>
        ) : null} */}
    </div>
  );
};
