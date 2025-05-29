import styled from "styled-components"

export const CartInputContainer = styled.div`
  height: 20px;
  display: flex;
`
export const CartInputInput = styled.input.attrs({ type: "number" })`
  border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL[300]};
  border-left-color: transparent;
  border-right-color: transparent;
  width: 28px;
  text-align: center;

  ${({ theme }) => theme.CLEAR_INPUT_NUMBER}
`
export const CartInputButton = styled.button`
  ${({ theme }) => theme.CLEAR_BUTTON};
  border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL[300]};
  padding: 0 2px;
  width: 18px;

  &.--minus {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &.--plus {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:active {
    font-size: 12px;
  }

  i.fa-trash {
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.RED[500]};
  }
`
