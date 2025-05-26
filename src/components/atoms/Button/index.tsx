import type { ComponentProps } from "react";

import FontAwesome from "@atoms/FontAwesome";

import * as S from "./styles";

type ButtonProps = Omit<
  ComponentProps<typeof S.ButtonContainer>,
  "$variation" | "$fullWidth"
> & {
  variation?: S.ButtonContainerProps["$variation"];
  isLoading?: boolean;
  fullWidth?: boolean;
};

export default function Button({
  variation = "light",
  children,
  isLoading,
  fullWidth,
  ...rest
}: ButtonProps) {
  return (
    <S.ButtonContainer
      {...rest}
      $variation={variation}
      $fullWidth={fullWidth}
      $isLoading={isLoading}
    >
      {isLoading ? <FontAwesome icon="circle-notch" /> : <>{children}</>}
    </S.ButtonContainer>
  );
}
