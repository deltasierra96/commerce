'use client';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'swiper/css/grid';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Product } from '@/shopify/types';
import { ProductCard } from '../../product-card';

type CarouselProps = {
  items: Product[];
  title?: string;
};

export const Carousel = ({ items }: CarouselProps) => {
  return (
    <section className="py-16">
      <Container>
        <div className="mb-8 flex items-center justify-between gap-x-2">
          <h1 className="font-heading text-3xl leading-none">Best selling</h1>
          <ButtonLink rightIcon="chevron-right" href="#" variant={'ghost'}>
            View all
          </ButtonLink>
        </div>

        <div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {items.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
