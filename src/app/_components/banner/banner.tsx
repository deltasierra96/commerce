import { Container } from '@/components/ui/container';

export const Banner = () => {
  return (
    <div className="bg-primary-500 text-white">
      <Container>
        <p className="flex flex-1 items-center justify-center py-3 text-center text-xs font-medium lg:flex-none">
          Opening Hours : Mon - Fri - 9AM - 6PM / Sat 9AM - 5.30 PM
        </p>
      </Container>
    </div>
  );
};
