'use client';
import { Product, ProductVariant } from '@/lib/shopify/types';
import { clsx } from '@/utils';
import { useProduct } from './product-context';

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
  const { state } = useProduct();

  const variant = product.variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every((option) => option.value === state[option.name.toLowerCase()])
  );

  console.log('product', product);
  console.log('variant', variant);

  const { maxVariantPrice, minVariantPrice } = product.priceRange;
  const { currencyCode, amount } = maxVariantPrice;
  const { currencyCode: minAmountCurrencyCode, amount: minAmount } = minVariantPrice;
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
      <p suppressHydrationWarning={true} className={clsx(className)}>
        {`${new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: currencyCode,
          currencyDisplay: 'narrowSymbol'
        }).format(parseFloat(variant?.price.amount))}`}
        {showCurrencyCode ? <span className={clsx('ml-1 inline')}>{`${currencyCode}`}</span> : null}
      </p>
      {/* <p suppressHydrationWarning={true} className={clsx(className)}>
        {`${new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: minAmountCurrencyCode,
          currencyDisplay: 'narrowSymbol'
        }).format(parseFloat(minAmount))}`}
        {showCurrencyCode ? (
          <span className={clsx('ml-1 inline')}>{`${minAmountCurrencyCode}`}</span>
        ) : null}
      </p>
      <p suppressHydrationWarning={true} className={clsx(className)}>
        {`${new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: currencyCode,
          currencyDisplay: 'narrowSymbol'
        }).format(parseFloat(amount))}`}
        {showCurrencyCode ? <span className={clsx('ml-1 inline')}>{`${currencyCode}`}</span> : null}
      </p> */}
    </div>
  );
};
