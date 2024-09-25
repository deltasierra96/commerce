'use client';
import { ButtonIconLink } from '@/components/ui/button-icon';
import { ACCOUNT_ROUTE } from '@/lib/constants';

type AccountProps = Object;

export const Account = ({ ...props }: AccountProps) => {
  return <ButtonIconLink icon="user" variant={'ghost'} href={ACCOUNT_ROUTE} />;
};
