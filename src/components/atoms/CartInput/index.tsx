import FontAwesome from "@atoms/FontAwesome";

import type { ComponentProps } from "react";
import * as S from "./styles";

type CartInputContainerProps = Omit<
  ComponentProps<typeof S.CartInputContainer>,
  "onChange"
> &
  Pick<Omit<ComponentProps<typeof S.CartInputInput>, "type">, "value"> & {
    onChange?: (value: number | string) => void;
  };

export default function CartInput({
  value,
  onChange,
  ...rest
}: CartInputContainerProps) {
  const isValidFunction = onChange && typeof onChange === "function";
  return (
    <S.CartInputContainer {...rest}>
      <S.CartInputButton
        onClick={() => isValidFunction && onChange(Number(value) - 1)}
        className="--minus"
        aria-label={`Remover ${Number(value) - 1} do carrinho`}
      >
        {Number(value) === 1 ? (
          <FontAwesome icon="trash" />
        ) : (
          <FontAwesome icon="minus" />
        )}
      </S.CartInputButton>
      <S.CartInputInput
        value={value}
        onBlur={({ target }) => !target.value && isValidFunction && onChange(1)}
        onChange={({ target }) => {
          isValidFunction && onChange(target.value);
        }}
      />
      <S.CartInputButton
        onClick={() => isValidFunction && onChange(Number(value) + 1)}
        className="--plus"
        aria-label={`Adicionar ${Number(value) + 1} ao carrinho`}
      >
        <FontAwesome icon="plus" />
      </S.CartInputButton>
    </S.CartInputContainer>
  );
}
