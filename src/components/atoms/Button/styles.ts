import styled, { css } from "styled-components";

import { spin } from "@styles/animations";

export type ButtonContainerProps = {
  $variation?: "primary" | "secondary" | "light" | "dark" | "danger";
  $fullWidth?: boolean;
  $isLoading?: boolean;
};
export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ theme }) => theme.CLEAR_BUTTON};
  ${({ theme, $variation = "light", disabled }) =>
    !disabled &&
    css`
      ${(() => {
        switch ($variation) {
          case "primary":
            return css`
              background-color: ${theme.COLORS.ORANGE[500]};
              color: ${theme.COLORS.WHITE};
            `;
          case "secondary":
            return css`
              background-color: ${theme.COLORS.NEUTRAL[300]};
              color: ${theme.COLORS.NEUTRAL[800]};
            `;
          case "light":
            return css`
              background-color: ${theme.COLORS.WHITE};
              color: ${theme.COLORS.NEUTRAL[800]};
            `;
          case "dark":
            return css`
              background-color: ${theme.COLORS.NEUTRAL[800]};
              color: ${theme.COLORS.WHITE};
            `;
          case "danger":
            return css`
              background-color: ${theme.COLORS.RED[700]};
              color: ${theme.COLORS.WHITE};
            `;
        }
      })()};
    `};

  ${({ $fullWidth }) => $fullWidth && "width: 100%;"};
  ${({ $isLoading }) => $isLoading && "pointer-events: none;"};

  height: 40px;
  border-radius: 4px;
  font-size: 14px;
  align-self: flex-start;
  padding: 8px 12px;
  overflow: hidden;

  i.fa-cart-shopping {
    margin-right: 4px;
    margin-left: -20px;
    opacity: 0;
    transition: all 350ms ease-in-out;
  }
  i.fa-circle-notch {
    animation: ${spin} 1s linear infinite;
  }

  &:hover,
  &:focus-visible {
    ${({ theme, $variation = "light", disabled }) =>
      !disabled &&
      css`
        background-color: ${(() => {
          switch ($variation) {
            case "primary":
              return theme.COLORS.ORANGE[700];
            case "secondary":
              return theme.COLORS.NEUTRAL[400];
            case "light":
              return theme.COLORS.NEUTRAL[400];
            case "dark":
              return theme.COLORS.NEUTRAL[600];
            case "danger":
              return theme.COLORS.RED[800];
          }
        })()};
      `}

    i {
      margin-left: 0px;
      opacity: 1;
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.COLORS.NEUTRAL[200]};
    color: ${({ theme }) => theme.COLORS.NEUTRAL[500]};
  }
`;
