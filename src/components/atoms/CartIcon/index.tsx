import FontAwesome from "@atoms/FontAwesome";

import type { ComponentProps } from "react";
import * as S from "./styles";

type CartIconProps = Omit<
  ComponentProps<typeof S.CartIconContainer>,
  "$disabled"
> & {
  disabled?: boolean;
};

export default function CartIcon({ disabled, ...rest }: CartIconProps) {
  return (
    <S.CartIconContainer {...rest}>
      <FontAwesome icon="cart-shopping" />
    </S.CartIconContainer>
  );
}
