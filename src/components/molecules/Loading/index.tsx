import type { ComponentProps } from "react";

import Spinner from "@atoms/Spinner";

import * as S from "./styles";

type LoadingProps = ComponentProps<typeof S.LoadingContainer> & {};

export default function Loading({ ...rest }: LoadingProps) {
  return (
    <S.LoadingContainer {...rest}>
      <Spinner />
    </S.LoadingContainer>
  );
}
