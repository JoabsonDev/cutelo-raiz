import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 3;

  background-color: ${({ theme }) => theme.COLORS.NEUTRAL[900]};
  min-height: ${({ theme }) => theme.HEADER_HEIGHT}px;
  color: ${({ theme }) => theme.COLORS.NEUTRAL[50]};

  input[type="search"] {
    margin-right: auto;
    min-width: 222px;
  }
`;

export const HeaderSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding: 8px 16px;

  p {
    font-size: clamp(14px, 1.5vw, 16px);
    white-space: nowrap;
  }

  nav {
    ul {
      ${({ theme }) => theme.CLEAR_LIST};
      display: flex;
      align-items: center;
      gap: 8px;

      li {
        a {
          ${({ theme }) => theme.CLEAR_LINK};
          padding: 2px 6px;
          font-size: clamp(18px, 2vw, 24px);
        }
      }
    }
  }

  @media (width < ${({ theme }) => theme.BREAKPOINTS.SM}px) {
    justify-content: center;
    gap: 4px;
  }
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
`;

export const HeaderLogo = styled(NavLink)`
  display: flex;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: all 300ms ease-in-out;
  }
`;

export const HeaderCartButton = styled.button`
  ${({ theme }) => theme.CLEAR_BUTTON};
  color: ${({ theme }) => theme.COLORS.NEUTRAL[50]};
`;

export const HeaderBottom = styled.nav`
  margin-block: 16px 8px;
  padding: 8px 16px;
  border-top: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL[700]};

  ul {
    ${({ theme }) => theme.CLEAR_LIST};
    display: flex;
    align-items: center;
    gap: 16px;
    overflow-y: auto;

    li {
      a {
        ${({ theme }) => theme.CLEAR_LINK};
        font-size: clamp(14px, 1.5vw, 16px);

        &.active,
        &:hover {
          text-decoration: underline;
          text-underline-offset: 8px;
          color: ${({ theme }) => theme.COLORS.ORANGE[500]};
          transition: all 300ms ease-in-out;
        }

        i {
          margin-right: 8px;
        }
      }
    }
  }
`;
