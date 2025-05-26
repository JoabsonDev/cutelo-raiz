import type { ComponentProps } from "react";
import * as S from "./styles";

import logo from "@assets/logo.png";
import CartIcon from "@atoms/CartIcon";
import Search from "@atoms/Search";

type HeaderProps = ComponentProps<typeof S.Header>;

export default function Header({ ...rest }: HeaderProps) {
  return (
    <S.Header {...rest}>
      <S.HeaderLogo to="/">
        <img src={logo} alt="Logo" />
      </S.HeaderLogo>

      <Search placeholder="Digite o nome do produto" />

      <CartIcon data-value="1" />
    </S.Header>
  );
}
