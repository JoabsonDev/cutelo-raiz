import type { ComponentProps } from "react";

import toCurrency from "@helpers/to-currency";
import * as S from "./styles";

type CartItemProps = ComponentProps<typeof S.CartItemContainer> & {
  product: Product;
};

export default function CartItem({ product, ...rest }: CartItemProps) {
  return (
    <S.CartItemContainer {...rest}>
      <img src={product.image1} alt={`Imagem do produto ${product.name}`} />
      <h2>{product.name}</h2>
      <div>
        {!!product.promoPrice && (
          <span className="old-price">{toCurrency(product.promoPrice)}</span>
        )}
        <span className="price">
          {!!product.promoPrice
            ? toCurrency(product.promoPrice)
            : toCurrency(product.price)}
        </span>
      </div>
    </S.CartItemContainer>
  );
}
