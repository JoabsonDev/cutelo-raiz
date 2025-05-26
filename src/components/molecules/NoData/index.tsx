import type { ComponentProps } from "react";

import FontAwesome from "@atoms/FontAwesome";

import * as S from "./styles";

type NoDataProps = ComponentProps<typeof S.NoDataContainer>;

export default function NoData({ children, ...rest }: NoDataProps) {
  return (
    <S.NoDataContainer {...rest}>
      <FontAwesome type="regular" icon="face-frown" />
      {children}
    </S.NoDataContainer>
  );
}
