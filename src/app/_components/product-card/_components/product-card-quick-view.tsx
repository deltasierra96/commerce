'use client';
import { ProductFragment } from '@/__generated__/graphql';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { LinkProps } from 'react-aria-components';
import Prose from '../../prose';

export type ProductCardQuickViewProps = LinkProps & {
  product: ProductFragment;
};

export const ProductCardQuickView = ({ product, ...props }: ProductCardQuickViewProps) => {
  return (
    <Modal size={'xl'}>
      <Button block variant={'outline'} leftIcon="eye" color={'neutral'}>
        Quick view
      </Button>
      <Modal.Content>
        <Modal.Header>{product.title}</Modal.Header>
        <div className="p-4">
          <Prose html={product.descriptionHtml} />
        </div>
      </Modal.Content>
    </Modal>
  );
};
