'use client';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { Product } from '@/shopify/types';
import { LinkProps } from 'react-aria-components';
import Prose from '../../prose';

export type ProductCardQuickViewProps = LinkProps & {
  product: Product;
};

export const ProductCardQuickView = ({ product, ...props }: ProductCardQuickViewProps) => {
  return (
    <Modal size={'xl'}>
      <Button block variant={'outline'} leftIcon="eye" color={'secondary'}>
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
