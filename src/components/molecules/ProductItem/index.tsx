import type { ComponentProps } from "react";
import { useParams } from "react-router-dom";

import FavoriteButton from "@atoms/FavoriteButton";
import FontAwesome from "@atoms/FontAwesome";
import toCurrency from "@helpers/to-currency";
import useCartStore from "@store/cart";
import useFavoriteStore from "@store/favorite";

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
  const { companySlug = "" } = useParams();

  const { favorites } = useFavoriteStore();
  const isFavorite = favorites.includes(product.id);

  const { cart } = useCartStore();
  const isInCart = cart.some((item) => item.productId === product.id);

  className = `${className} product-item`.trim();

  return (
    <S.ListItem {...rest} className={className}>
      <S.ListItemLink to={`/${companySlug}/product/${product.id}`}>
        <S.ListItemImage
          src={product.image}
          alt={`Imagem do produto ${product.name}`}
        />
        <S.ListItemInfo>
          <S.ListItemInfoTitle>{product.name}</S.ListItemInfoTitle>
          <S.ListItemInfoDescription>
            {product.description}
          </S.ListItemInfoDescription>
        </S.ListItemInfo>
        <S.ListItemPriceContainer>
          {!!product.promotionalPrice && (
            <S.ListItemOldPrice>
              {toCurrency(product.unitPrice)}
            </S.ListItemOldPrice>
          )}
          <S.ListItemPrice>
            {product.promotionalPrice
              ? toCurrency(product.promotionalPrice)
              : toCurrency(product.unitPrice)}
          </S.ListItemPrice>
        </S.ListItemPriceContainer>
        {hasTips && (
          <S.ListItemTips>
            {isInCart && <FontAwesome icon="cart-shopping" />}
            {isFavorite && <FavoriteButton disabled />}
          </S.ListItemTips>
        )}
      </S.ListItemLink>
    </S.ListItem>
  );
}
