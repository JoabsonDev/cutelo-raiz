import type { ComponentProps } from "react";

import NavLinkButton from "@atoms/NavLinkButton";
import toCurrency from "@helpers/to-currency";
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
      <img src={product.image1} alt={`Imagem do produto ${product.name}`} />
      <S.ProductCardInfoContainer>
        <S.ProductCardTitle>{product.name}</S.ProductCardTitle>
        <S.ProductCardDescription>
          {product.description}
        </S.ProductCardDescription>

        <S.ProductCardPriceContainer>
          {!!product.promoPrice && (
            <S.ProductCardPromotionalPrice>
              {toCurrency(product.price)}
            </S.ProductCardPromotionalPrice>
          )}
          <S.ProductCardPrice
            className={!!product.promoPrice ? "has-promo" : ""}
          >
            {toCurrency(product.promoPrice) || toCurrency(product.price)}
          </S.ProductCardPrice>
        </S.ProductCardPriceContainer>

        <NavLinkButton to={`/produto/${product.id}`}>
          Ver detalhes
        </NavLinkButton>
      </S.ProductCardInfoContainer>
    </S.ProductCardBannerContainer>
  );
}
