import { FOOTER_MENU_HANDLE } from '@/app/constants';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { getCollections } from '@/shopify/getCollections';
import { getMenu } from '@/shopify/getMenu';
import { getStoreInformation } from '@/shopify/getStoreInformation';
import { Suspense } from 'react';
import FooterMenu from './_components/footer-menu';
import { FooterNewsletter } from './_components/footer-newsletter';
import { FooterSocial } from './_components/footer-social';

const { COMPANY_NAME, SITE_NAME } = process.env;

export const Footer = async () => {
  const menu = await getMenu(FOOTER_MENU_HANDLE);
  const collections = await getCollections();
  const storeInformation = await getStoreInformation();
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer
      className="border-t border-neutral-200 bg-neutral-800 text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container className="mx-auto pb-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6">
            <Logo className={'h-12 w-auto text-white'} />
            <p className="text-sm">{storeInformation.description}</p>
          </div>
          <div className="mt-16 xl:mt-0">
            {menu && menu.items?.length ? (
              <Suspense
                fallback={
                  <div className="flex h-[188px] w-[200px] flex-col gap-2">
                    <div className={skeleton} />
                    <div className={skeleton} />
                    <div className={skeleton} />
                    <div className={skeleton} />
                    <div className={skeleton} />
                    <div className={skeleton} />
                  </div>
                }
              >
                <FooterMenu menu={menu} />
              </Suspense>
            ) : null}
          </div>
        </div>
        <div className="mt-16 border-t border-neutral-700 pt-8 sm:mt-20 lg:mt-24">
          <FooterNewsletter />
        </div>
        <div className="mt-8 border-t border-neutral-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="md:order-2">
            <FooterSocial />
          </div>
          <p className="mt-8 text-xs leading-5 text-neutral-500 md:order-1 md:mt-0">
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
