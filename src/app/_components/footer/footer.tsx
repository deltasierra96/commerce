'use client';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { Link } from 'react-aria-components';

const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' }
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' }
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' }
  ],
  legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Return Policy', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Shipping Policy', href: '#' }
  ],
  bottomLinks: [
    { name: 'Accessibility', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' }
  ]
};

export const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="border-t border-neutral-100 bg-white">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container>
        <div className="pb-20 pt-16">
          <div className="md:flex md:justify-center">
            <Logo className="h-8 w-auto" />
          </div>
          <div className="mx-auto mt-16 max-w-5xl xl:grid xl:grid-cols-2 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 className="text-sm font-medium text-neutral-900">Products</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.products.map((item) => (
                      <li key={item.name} className="text-sm">
                        <Link href={item.href} className="text-neutral-500 hover:text-neutral-600">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-900">Customer Service</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.customerService.map((item) => (
                      <li key={item.name} className="text-sm">
                        <Link href={item.href} className="text-neutral-500 hover:text-neutral-600">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 className="text-sm font-medium text-neutral-900">Company</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name} className="text-sm">
                        <Link href={item.href} className="text-neutral-500 hover:text-neutral-600">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-900">Legal</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name} className="text-sm">
                        <Link href={item.href} className="text-neutral-500 hover:text-neutral-600">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8">
          <div className="flex items-center p-6 rounded-lg bg-neutral-100 sm:p-10">
            <div className="max-w-sm mx-auto">
              <h3 className="font-semibold text-neutral-900">Sign up for our newsletter</h3>
              <p className="mt-2 text-sm text-neutral-500">
                The latest news, articles, and resources, sent to your inbox weekly.
              </p>
              <form className="mt-4 sm:mt-6 sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <TextInput hideLabel id="email-address" autoComplete="email" required />
                <div className="mt-3 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <Button variant={'filled'} color={'primary'} type="submit">
                    Sign up
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="relative flex items-center px-6 py-12 mt-6 sm:px-10 sm:py-16 lg:mt-0">
            <div className="absolute inset-0 overflow-hidden rounded-lg">

              <div className="absolute inset-0 bg-primary-500 bg-opacity-90" />
            </div>
            <div className="relative max-w-sm mx-auto text-center">
              <h3 className="text-2xl font-extrabold tracking-tight text-white">
                Get early access
              </h3>
              <p className="mt-2 text-neutral-200">
                Did you sign up to the newsletter? If so, use the keyword we sent you to get access.{' '}
                <Link
                  href="#"
                  className="font-bold text-white whitespace-nowrap hover:text-neutral-200"
                >
                  Go now<span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </div>
        </div> */}
        <div className="py-10 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-neutral-500">&copy; 2021 All Rights Reserved</p>
          </div>

          <div className="mt-4 flex items-center justify-center md:mt-0">
            <div className="flex space-x-8">
              {footerNavigation.bottomLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-neutral-500 hover:text-neutral-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
