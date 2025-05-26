import type { ComponentProps } from "react";

import FontAwesome from "@atoms/FontAwesome";

import * as S from "./styles";

export type AlertProps = ComponentProps<typeof S.AlertContainer> & {
  message: string;
  onClose: () => void;
};

export default function Alert({ message, onClose, ...rest }: AlertProps) {
  return (
    <S.AlertContainer {...rest}>
      <S.AlertMessage>{message}</S.AlertMessage>
      <S.AlertButton onClick={onClose}>
        <FontAwesome icon="xmark" />
      </S.AlertButton>
    </S.AlertContainer>
  );
}
