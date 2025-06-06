import ProductCardBanner from "@molecules/ProductCardBanner";
import { SwiperSlide } from "swiper/react";

import { A11y, Autoplay, Pagination, Scrollbar } from "swiper/modules";
import * as S from "./styles";

type Props = {
  products: Product[];
};

export default function FeaturedProductsCarousel({ products }: Props) {
  return (
    <S.SwiperWrapper
      modules={[Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCardBanner product={product} />
        </SwiperSlide>
      ))}
    </S.SwiperWrapper>
  );
}
