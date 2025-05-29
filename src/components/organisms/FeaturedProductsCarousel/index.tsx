import ProductCardBanner from "@molecules/ProductCardBanner";
import { SwiperSlide } from "swiper/react";

import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import * as S from "./styles";

type Props = {
  products: Product[];
};

export default function FeaturedProductsCarousel({ products }: Props) {
  return (
    <S.SwiperWrapper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      centeredSlides={true}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
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
