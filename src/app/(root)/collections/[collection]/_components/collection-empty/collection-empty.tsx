'use client';
import { Container } from '@/components/ui/container';

type CollectionEmptyProps = Object;

export const CollectionEmpty = ({ ...props }: CollectionEmptyProps) => {
  return (
    <div className="bg-white py-2 lg:bg-transparent">
      <Container>
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      </Container>
    </div>
  );
};
