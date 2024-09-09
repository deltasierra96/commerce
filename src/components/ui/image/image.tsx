'use client';
import { CldImage, type CldImageProps } from 'next-cloudinary';

export type ImageProps = CldImageProps;

export const Image = ({ alt = '', ...props }: ImageProps) => <CldImage {...props} alt={alt} />;
