import type { ComponentProps } from "react";

import * as S from "./styles";

type LinkButtonProps = ComponentProps<typeof S.LinkButtonContainer>;

export default function LinkButton({ ...rest }: LinkButtonProps) {
  return <S.LinkButtonContainer {...rest} />;
}
