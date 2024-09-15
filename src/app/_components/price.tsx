import { clsx } from '@/utils';

const Price = ({
  amount,
  className,
  currencyCode = 'USD',
  currencyCodeClassName,
  showCurrencyCode = false
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  showCurrencyCode?: boolean;
  currencyCodeClassName?: string;
} & React.ComponentProps<'p'>) => (
  <p suppressHydrationWarning={true} className={clsx(className)}>
    {`${new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol'
    }).format(parseFloat(amount))}`}
    {showCurrencyCode ? (
      <span className={clsx('ml-1 inline', currencyCodeClassName)}>{`${currencyCode}`}</span>
    ) : null}
  </p>
);

export default Price;
