import styled, { css } from "styled-components"

type CartIconProps = {
  $disabled?: boolean
}
export const CartIconContainer = styled.span<CartIconProps>`
  position: relative;
  line-height: 0;

  &::after {
    content: attr(data-value);
    position: absolute;
    top: -9px;
    right: -7px;
    font-size: 10px;
    background-color: ${({ theme }) => theme.COLORS.RED[500]};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 50%;
    height: 16px;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};

    ${({ $disabled }) => {
      if ($disabled) {
        return css`
          color: ${({ theme }) => theme.COLORS.NEUTRAL[400]} !important;
        `
      }
    }}
  }
`
