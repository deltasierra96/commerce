'use client';
import { ButtonIcon } from '@/components/ui/button-icon';
import { Menu, MenuItem } from '@/components/ui/menu';
import { Separator } from '@/components/ui/separator';
import { ACCOUNT_ROUTE } from '@/lib/constants';
import { useRouter } from 'next/navigation';
import { MenuTrigger, SubmenuTrigger, type Key } from 'react-aria-components';

export const Account = () => {
  const router = useRouter();

  const onAction = async (action: Key) => {
    switch (action) {
      case 'my-account':
        router.push(ACCOUNT_ROUTE);
        break;
    }
  };

  return (
    <MenuTrigger>
      <ButtonIcon variant={'ghost'} icon="user" />
      <Menu className="w-56" placement="bottom right" onAction={onAction}>
        <MenuItem id="my-account" icon="user">
          My Account
        </MenuItem>
        <Separator />
        <MenuItem id="my-orders" icon="user-dollar">
          My Orders
        </MenuItem>
        <MenuItem id="my-returns" icon="truck-return">
          My Returns
        </MenuItem>
        <MenuItem id="contact-preferences" icon="chat-bubble-text">
          Contact Preferences
        </MenuItem>

        <Separator />

        <SubmenuTrigger>
          <MenuItem icon="user-dollar">Sub</MenuItem>
          <Menu className="w-56" onAction={onAction}>
            <MenuItem id="my-orders" icon="user-dollar">
              My Orders
            </MenuItem>
            <MenuItem id="my-returns" icon="truck-return">
              My Returns
            </MenuItem>
            <MenuItem id="contact-preferences" icon="chat-bubble-text">
              Contact Preferences
            </MenuItem>

            <Separator />

            <MenuItem id="settings" icon="settings">
              Settings
            </MenuItem>
          </Menu>
        </SubmenuTrigger>

        <Separator />

        <MenuItem id="settings" icon="settings">
          Settings
        </MenuItem>

        <MenuItem id="sign-out" icon="logout">
          Logout
        </MenuItem>
      </Menu>
    </MenuTrigger>
  );
};
