import type { ComponentProps } from "react";

import * as S from "./styles";

type SwitchContainerProps = Omit<
  ComponentProps<typeof S.SwitchInput>,
  "type"
> & {};

export default function Switch({ className, ...rest }: SwitchContainerProps) {
  return (
    <S.SwitchContainer className={className}>
      <S.SwitchInput {...rest} />
    </S.SwitchContainer>
  );
}
