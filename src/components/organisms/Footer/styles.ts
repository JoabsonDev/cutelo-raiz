import styled, { css } from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL[900]};
  color: ${({ theme }) => theme.COLORS.NEUTRAL[50]};
  padding: 8px 16px;
  text-align: center;

  a {
    ${({ theme }) => theme.CLEAR_LINK};
    font-size: clamp(14px, 1.5vw, 16px);
  }

  ul {
    ${({ theme }) => theme.CLEAR_LIST};
    margin-block: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    font-size: clamp(14px, 1.5vw, 16px);

    li {
      display: flex;
      align-items: center;
      white-space: nowrap;
    }

    i {
      margin-right: 8px;
      font-size: 20px;
    }

    &:not(.social) {
      @media (width < ${({ theme }) => theme.BREAKPOINTS.SM}px) {
        flex-direction: column;
        margin-bottom: 16px;
      }
    }
  }

  button {
    display: flex;
    align-items: center;
  }

  p {
    font-size: clamp(12px, 1.5vw, 14px);
  }
`;

export const LinkWhatsButton = styled.a`
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
`;
