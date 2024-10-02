'use client';
import { ProductFragment } from '@/__generated__/graphql';
import { clsx } from '@/utils';
import { useProduct } from './product-context';

export type ProductPriceProps = {
  product: ProductFragment;
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

  const variant = product.variants.edges.find((variant) =>
    variant.node.selectedOptions.every(
      (option) => option.value === state[option.name.toLowerCase()]
    )
  );

  const { maxVariantPrice, minVariantPrice } = product.priceRange;
  const { currencyCode, amount } = maxVariantPrice;
  const hasSalePrice = maxVariantPrice.amount !== minVariantPrice.amount;

  const formatPrice = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currencyCode,
    currencyDisplay: 'narrowSymbol'
  });

  return (
    <div className="text-3xl font-semibold tracking-tight" {...props}>
      {hasSalePrice ? <div className="text-sm font-medium text-neutral-950">From</div> : null}
      <p
        suppressHydrationWarning={true}
        className={clsx(hasSalePrice && 'font-medium line-through')}
      >
        {`${formatPrice.format(parseFloat(amount))}`}
        {showCurrencyCode ? <CurrencyCode currencyCode={currencyCode} /> : null}
      </p>
      {hasSalePrice && variant?.node.price.amount ? (
        <div className="flex text-sm text-red-500">
          <span suppressHydrationWarning={true}>
            {`Now ${formatPrice.format(parseFloat(variant?.node.price.amount))}`}
            {showCurrencyCode ? <CurrencyCode currencyCode={currencyCode} /> : null}
          </span>
        </div>
      ) : null}

      {hasSalePrice ? (
        <div className="flex flex-nowrap gap-x-2">
          <p suppressHydrationWarning={true} className={clsx(hasSalePrice && 'line-through')}>
            {`${formatPrice.format(parseFloat(maxVariantPrice.amount))}`}
            {showCurrencyCode ? <span>{maxVariantPrice.currencyCode}</span> : null}
          </p>
          <p suppressHydrationWarning={true} className={clsx('flex text-red-700')}>
            {`${formatPrice.format(parseFloat(minVariantPrice.amount))}`}
            {showCurrencyCode ? <span>{minVariantPrice.currencyCode}</span> : null}
          </p>
        </div>
      ) : (
        <p suppressHydrationWarning={true}>
          {`${formatPrice.format(parseFloat(maxVariantPrice.amount))}`}
          {showCurrencyCode ? <span>{maxVariantPrice.currencyCode}</span> : null}
        </p>
      )}
    </div>
  );
};
