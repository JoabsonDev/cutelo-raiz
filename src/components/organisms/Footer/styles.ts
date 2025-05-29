import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL[900]};
  color: ${({ theme }) => theme.COLORS.NEUTRAL[50]};
  padding: 8px 16px;
  text-align: center;
  margin-top: 24px;

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
