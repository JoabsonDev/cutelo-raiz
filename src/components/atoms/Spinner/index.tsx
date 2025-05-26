import type { ComponentProps } from "react";

import * as S from "./styles";

type SpinnerProps = ComponentProps<typeof S.SpinnerContainer> & {};

export default function Spinner({ ...rest }: SpinnerProps) {
  return <S.SpinnerContainer {...rest} />;
}
