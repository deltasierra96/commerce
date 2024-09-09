import { Container } from '@/components/ui/container';
import { type CurrencyProps, CurrencySelector } from './_components/currency-selector';
import { HelpAndFAQs } from './_components/help-and-faqs';
import { Separator } from '@/components/ui/separator';

const currencies: CurrencyProps[] = [
  { title: 'CAD' },
  { title: 'USD' },
  { title: 'AUD' },
  { title: 'EUR' },
  { title: 'GBP' },
];

export const TopBar = () => {
  return (
    <div className='border-b border-neutral-100 bg-neutral-50'>
      <Container>
        <div className='flex items-center justify-end py-0.5'>
          <HelpAndFAQs />
          <Separator orientation='vertical' className='mx-2' />
          <CurrencySelector currencies={currencies} />
        </div>
      </Container>
    </div>
  );
};
