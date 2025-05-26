import type { ComponentProps } from "react";

import * as S from "./styles";

type HrProps = ComponentProps<typeof S.HrContainer>;

export default function Hr({ ...rest }: HrProps) {
  return <S.HrContainer {...rest} />;
}
