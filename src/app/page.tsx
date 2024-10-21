import { Carousel } from '@/app/_components/carousel';
import { Example } from '@/test';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Example />
      <Carousel />
    </>
  );
}
