import type { ComponentProps } from "react";

import * as S from "./styles";

type NavLinkButtonProps = ComponentProps<typeof S.NavLinkButtonContainer>;

export default function NavLinkButton({ ...rest }: NavLinkButtonProps) {
  return <S.NavLinkButtonContainer {...rest} />;
}
