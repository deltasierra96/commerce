'use client';
import { ButtonLink } from '@/components/ui/button';
import { ButtonIcon } from '@/components/ui/button-icon';
import { Drawer, type DrawerProps } from '@/components/ui/drawer';
import { STORE_ROUTE_COLLECTION } from '@/lib/constants';

type NavigationProps = DrawerProps;

export const Navigation = (props: NavigationProps) => {
  return (
    <Drawer position="left" size={'full'} {...props}>
      <ButtonIcon aria-label="Open mobile navigation" icon="menu" variant="ghost" color="neutral" />
      <Drawer.Content>
        <div className="space-y-4 p-6">
          <ButtonLink block href="/account">
            Account
          </ButtonLink>
          <ButtonLink block href={STORE_ROUTE_COLLECTION}>
            Collection
          </ButtonLink>
        </div>
      </Drawer.Content>
    </Drawer>
  );
};
