import styled, { css } from "styled-components";

export const LinkButtonContainer = styled.a`
  ${({ theme }) => theme.CLEAR_LINK};

  font-family: inherit;
  transition: all 300ms ease-in-out;
  user-select: none;
  height: 40px;
  border-radius: 4px;
  font-size: 14px;
  align-self: flex-start;
  padding: 8px 12px;
  overflow: hidden;
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.ORANGE[500]};
    color: ${theme.COLORS.WHITE};
  `};

  &.full {
    width: 100%;
    justify-content: center;
  }
`;
