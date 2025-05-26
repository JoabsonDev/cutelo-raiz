import styled, { css } from "styled-components"

type InputContainerProps = {
  $fullWidth?: boolean
  $hasError?: boolean
}
export const InputContainerWrapper = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  gap: 4px;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL[300]};
  color: ${({ theme }) => theme.COLORS.NEUTRAL[600]};
  overflow: hidden;
  padding: 0 12px;

  &:has(input:focus-visible) {
    outline: -webkit-focus-ring-color auto 1px;
  }

  ${({ $hasError, theme }) => {
    if ($hasError) {
      return css`
        border-color: ${theme.COLORS.RED[500]};
        color: ${theme.COLORS.RED[500]};

        &:has(input:focus-visible) {
          outline: ${theme.COLORS.RED[500]} auto 1px;
        }

        input::placeholder {
          color: ${theme.COLORS.RED[400]};
        }
      `
    }
  }}
`
export const InputContainer = styled.input<InputContainerProps>`
  ${({ theme }) => theme.CLEAR_INPUT}
  ${({ theme }) => theme.CLEAR_INPUT_NUMBER}
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL[300]};
  color: ${({ theme }) => theme.COLORS.NEUTRAL[700]};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.NEUTRAL[400]};
  }

  ${({ $hasError, theme }) => {
    if ($hasError) {
      return css`
        border-color: ${theme.COLORS.RED[500]};
        color: ${theme.COLORS.RED[500]};

        &:focus-visible {
          outline: ${theme.COLORS.RED[500]} auto 1px;
        }

        &::placeholder {
          color: ${theme.COLORS.RED[400]};
        }
      `
    }
  }}
`
export const InputContainerCurrency = styled.input<InputContainerProps>`
  ${({ theme }) => theme.CLEAR_INPUT}
  ${({ theme }) => theme.CLEAR_INPUT_NUMBER}
  outline: none;
  padding-left: 0;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.NEUTRAL[600]};
  }
`
