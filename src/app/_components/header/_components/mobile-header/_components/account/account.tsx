'use client';
import { ACCOUNT_PATH } from '@/app/constants';
import { ButtonIconLink } from '@/components/ui/button-icon';

type AccountProps = Object;

export const Account = ({ ...props }: AccountProps) => {
  return <ButtonIconLink icon="user" variant={'ghost'} href={ACCOUNT_PATH} />;
};
