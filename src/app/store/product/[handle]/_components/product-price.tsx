'use client';
import { Product, ProductVariant } from '@/lib/shopify/types';
import { clsx } from '@/utils';
import { useProduct } from './product-context';

export type ProductPriceProps = {
  product: Product;
  showCurrencyCode?: boolean;
};

type CurrencyCodeProps = {
  currencyCode: string;
  className?: string;
};

const CurrencyCode = ({ currencyCode, className, ...props }: CurrencyCodeProps) => (
  <span className={clsx(className)} {...props}>
    {currencyCode}
  </span>
);

export const ProductPrice = ({
  product,
  showCurrencyCode = false,
  ...props
}: ProductPriceProps) => {
  const { state } = useProduct();

  const variant = product.variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every((option) => option.value === state[option.name.toLowerCase()])
  );

  const { maxVariantPrice, minVariantPrice } = product.priceRange;
  const { currencyCode, amount } = maxVariantPrice;
  const isOnSale = maxVariantPrice.amount !== minVariantPrice.amount;

  const formatPrice = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currencyCode,
    currencyDisplay: 'narrowSymbol'
  });

  return (
    <div className="text-3xl font-semibold tracking-tight" {...props}>
      {isOnSale ? <div className="text-sm font-medium text-neutral-950">From</div> : null}
      <p suppressHydrationWarning={true} className={clsx(isOnSale && 'font-medium line-through')}>
        {`${formatPrice.format(parseFloat(amount))}`}
        {showCurrencyCode ? <CurrencyCode currencyCode={currencyCode} /> : null}
      </p>
      {isOnSale && variant?.price.amount ? (
        <div className="flex text-sm text-red-500">
          <span suppressHydrationWarning={true}>
            {`Now ${formatPrice.format(parseFloat(variant?.price.amount))}`}
            {showCurrencyCode ? <CurrencyCode currencyCode={currencyCode} /> : null}
          </span>
        </div>
      ) : null}
    </div>
  );
};
