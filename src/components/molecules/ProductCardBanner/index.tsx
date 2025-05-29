import type { ComponentProps } from "react";

import * as S from "./styles";

type ProductCardBannerProps = ComponentProps<
  typeof S.ProductCardBannerContainer
> & {
  product: Product;
};

export default function ProductCardBanner({
  product,
  ...rest
}: ProductCardBannerProps) {
  return (
    <S.ProductCardBannerContainer {...rest}>
      <span>{product.name}</span>
      <img src={product.image1} alt="" />
    </S.ProductCardBannerContainer>
  );
}
