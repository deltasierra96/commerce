'use client';
import { Icon } from '@/components/ui/icon';
import { clsx } from '@/utils';
import { Link } from 'react-aria-components';

export type ProductRatingProps = Object;

export const ProductRating = ({ ...props }: ProductRatingProps) => {
  return (
    <div {...props}>
      <h3 className="sr-only">Rating</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <Icon
              icon="star"
              key={rating}
              className={clsx(
                4 > rating ? 'fill-current text-yellow-500' : 'fill-current text-neutral-200',
                'h-4 w-4 flex-shrink-0'
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{4} out of 5 stars</p>
        <Link
          className={
            'ml-1 cursor-pointer text-sm text-neutral-500 hover:text-neutral-950 hover:underline'
          }
        >{`32 reviews`}</Link>
      </div>
    </div>
  );
};
