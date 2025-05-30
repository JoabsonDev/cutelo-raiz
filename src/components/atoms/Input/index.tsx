import { forwardRef, type ComponentProps } from "react";

import * as S from "./styles";

type InputContainerProps = Omit<
  ComponentProps<typeof S.InputContainer>,
  "$fullWidth" | "$hasError"
> & {
  fullWidth?: boolean;
  type?: ComponentProps<typeof S.InputContainer>["type"] | "currency";
  hasError?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputContainerProps>(function Input(
  { fullWidth, hasError, type = "text", className, ...rest },
  ref
) {
  if (type === "currency") {
    return (
      <S.InputContainerWrapper className={className}>
        R${" "}
        <S.InputContainerCurrency
          {...rest}
          ref={ref}
          type="text"
          $fullWidth={fullWidth}
          $hasError={hasError}
        />
      </S.InputContainerWrapper>
    );
  }

  return (
    <S.InputContainer
      {...rest}
      ref={ref}
      className={className}
      type={type}
      $fullWidth={fullWidth}
      $hasError={hasError}
    />
  );
});

Input.displayName = "Input";

export default Input;
