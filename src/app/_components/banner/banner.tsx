import { Container } from '@/components/ui/container';

export const Banner = () => {
  return (
    <div className='bg-neutral-100 text-neutral-900'>
      <Container>
        <div className='flex items-center justify-center py-3'>
          <p className='flex-1 text-center font-heading text-xs uppercase lg:flex-none'>
            Free 30-Day Returns Policy. *Exclusions Apply
          </p>
        </div>
      </Container>
    </div>
  );
};
