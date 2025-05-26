import { ComponentProps, forwardRef } from "react"

import Input from "@atoms/Input"

import * as S from "./styles"

export type InputGroupProps = ComponentProps<typeof S.InputGroupContainer> &
  ComponentProps<typeof Input> & { error?: string }

const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  ({ fullWidth, placeholder, type, error, ...rest }, ref) => {
    return (
      <S.InputGroupContainer>
        <Input
          ref={ref}
          type={type}
          placeholder={placeholder}
          fullWidth={fullWidth}
          hasError={!!error}
          {...rest}
        />
        {error && <S.InputGroupErrorMessage>{error}</S.InputGroupErrorMessage>}
      </S.InputGroupContainer>
    )
  }
)

export default InputGroup
