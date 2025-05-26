import type { ComponentProps } from "react";
import { SwiperSlide } from "swiper/react";

import * as S from "./styles";

type HorizontalScrollWrapperProps = ComponentProps<
  typeof S.HorizontalScrollWrapperContainer
>;
export default function HorizontalScrollWrapper({
  children,
  ...rest
}: HorizontalScrollWrapperProps) {
  return (
    <S.HorizontalScrollWrapperContainer
      spaceBetween={10} // Espaçamento entre os slides
      slidesPerView={"auto"} // Número de slides visíveis
      freeMode={true} // Habilita o modo "livre", permitindo rolagem suave
      grabCursor={true} // Mostra o cursor de "mão" ao interagir
      loop={false}
      {...rest}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))
        : children}
    </S.HorizontalScrollWrapperContainer>
  );
}
