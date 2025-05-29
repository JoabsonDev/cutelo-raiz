import type { ComponentProps } from "react";

import FontAwesome from "@atoms/FontAwesome";
import toCurrency from "@helpers/to-currency";
import useCartStore from "@store/cart";

import Button from "@atoms/Button";
import * as S from "./styles";

type ProductItemProps = ComponentProps<typeof S.ListItem> & {
  product: Product;
  hasTips?: boolean;
};
export default function ProductItem({
  product,
  hasTips = true,
  className = "",
  ...rest
}: ProductItemProps) {
  const { cart } = useCartStore();
  const isInCart = cart.some((item) => item.productId === product.id);

  className = `${className} product-item`.trim();

  return (
    <S.ListItem {...rest} className={className}>
      <S.ListItemImage
        src={product.image1}
        alt={`Imagem do produto ${product.name}`}
      />
      <S.ContentWrapper>
        <S.ListItemInfo>
          <S.ListItemInfoTitle>{product.name}</S.ListItemInfoTitle>
          <S.ListItemInfoDescription title={product.description}>
            {product.description}
          </S.ListItemInfoDescription>
        </S.ListItemInfo>
        <S.ListItemPriceContainer>
          {!!product.promoPrice && (
            <S.ListItemOldPrice>{toCurrency(product.price)}</S.ListItemOldPrice>
          )}
          <S.ListItemPrice>
            {product.promoPrice
              ? toCurrency(product.promoPrice)
              : toCurrency(product.price)}
          </S.ListItemPrice>
        </S.ListItemPriceContainer>
        {hasTips && (
          <S.ListItemTips>
            {isInCart && <FontAwesome icon="cart-shopping" />}
          </S.ListItemTips>
        )}

        <Button variation="primary" fullWidth>
          Comprar
        </Button>
      </S.ContentWrapper>
    </S.ListItem>
  );
}
