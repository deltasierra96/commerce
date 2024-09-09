'use client';
import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { clsx } from '@/utils';
import Image, { type ImageProps } from 'next/image';

type AvatarImageProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & ImageProps;

export const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className, src, alt, ...props }, ref) => {
  return (
    <AvatarPrimitive.Image src={src} asChild ref={ref}>
      <Image
        fill
        src={src}
        className={clsx('aspect-square h-full w-full', className)}
        alt={alt}
        {...props}
      />
    </AvatarPrimitive.Image>
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
