import { Cart } from '@/app/_components/cart';
import { Container } from '@/components/ui/container';
import { Logo } from '@/components/ui/logo';
import { clsx } from '@/utils';
import { Account, Navigation, Search } from './_components';

type DesktopHeaderProps = {
  isFullWidth?: boolean;
};

export const DesktopHeader = ({ isFullWidth = false }: DesktopHeaderProps) => {
  return (
    <div className={clsx('hidden w-full lg:flex lg:flex-col')}>
      <Container fullWidth={isFullWidth}>
        <div className="flex items-center justify-between gap-x-8 py-5">
          <div className="flex basis-2/12 justify-start">
            <Logo className="h-10" />
          </div>

          <div className="flex basis-8/12 items-center justify-center">
            <div className="mx-auto w-full max-w-screen-md">
              <Search />
            </div>
          </div>
          <div className="flex basis-2/12 justify-end">
            <div className="hidden items-center justify-end space-x-2 sm:flex">
              <div className="hidden sm:block">
                <Account />
              </div>
              <div className="hidden sm:block">
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-neutral-100 py-1.5">
        <Container fullWidth={isFullWidth}>
          <Navigation />
        </Container>
      </div>
    </div>
  );
};
