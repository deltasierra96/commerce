import { Button } from '@/components/ui/button';
import { Hero } from '../_components/hero';
import { ProductCarousel } from '../_components/product-carousel/product-carousel';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <div className="hidden space-y-4 py-4">
        <div className="flex justify-center gap-x-4">
          <Button color={'primary'} variant={'filled'}>
            Filled
          </Button>
          <Button color={'primary'} variant={'outline'}>
            Outline
          </Button>
          <Button color={'primary'} variant={'ghost'}>
            Ghost
          </Button>
          <Button color={'primary'} variant={'link'}>
            Link
          </Button>
        </div>
        <div className="flex justify-center gap-x-4">
          <Button color={'primary'} variant={'filled'} isDisabled>
            Filled
          </Button>
          <Button color={'primary'} variant={'outline'} isDisabled>
            Outline
          </Button>
          <Button color={'primary'} variant={'ghost'} isDisabled>
            Ghost
          </Button>
          <Button color={'primary'} variant={'link'} isDisabled>
            Link
          </Button>
        </div>
        <div className="flex justify-center gap-x-4">
          <Button color={'secondary'} variant={'filled'}>
            Filled
          </Button>
          <Button color={'secondary'} variant={'outline'}>
            Outline
          </Button>
          <Button color={'secondary'} variant={'ghost'}>
            Ghost
          </Button>
          <Button color={'secondary'} variant={'link'}>
            Link
          </Button>
        </div>
        <div className="flex justify-center gap-x-4">
          <Button color={'secondary'} variant={'filled'} isDisabled>
            Filled
          </Button>
          <Button color={'secondary'} variant={'outline'} isDisabled>
            Outline
          </Button>
          <Button color={'secondary'} variant={'ghost'} isDisabled>
            Ghost
          </Button>
          <Button color={'secondary'} variant={'link'} isDisabled>
            Link
          </Button>
        </div>
      </div>
      <Hero />
      <ProductCarousel />
      <section aria-labelledby="perks-heading" className="border-t border-gray-200 bg-gray-50">
        <h2 id="perks-heading" className="sr-only">
          Our perks
        </h2>

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0">
                <div className="flow-root">
                  <img
                    className="-my-1 mx-auto h-24 w-auto"
                    src="https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">Free returns</h3>
                <p className="mt-3 text-sm text-gray-500">
                  Not what you expected? Place it back in the parcel and attach the pre-paid postage
                  stamp.
                </p>
              </div>
            </div>

            <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0">
                <div className="flow-root">
                  <img
                    className="-my-1 mx-auto h-24 w-auto"
                    src="https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">Same day delivery</h3>
                <p className="mt-3 text-sm text-gray-500">
                  We offer a delivery service that has never been done before. Checkout today and
                  receive your products within hours.
                </p>
              </div>
            </div>

            <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0">
                <div className="flow-root">
                  <img
                    className="-my-1 mx-auto h-24 w-auto"
                    src="https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">All year discount</h3>
                <p className="mt-3 text-sm text-gray-500">
                  Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off
                  all year round.
                </p>
              </div>
            </div>

            <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0">
                <div className="flow-root">
                  <img
                    className="-my-1 mx-auto h-24 w-auto"
                    src="https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">For the planet</h3>
                <p className="mt-3 text-sm text-gray-500">
                  We’ve pledged 1% of sales to the preservation and restoration of the natural
                  environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
