import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL[900]};
  min-height: ${({ theme }) => theme.HEADER_HEIGHT}px;
  color: ${({ theme }) => theme.COLORS.NEUTRAL[50]};
  padding: 8px 16px;

  display: flex;
  align-items: center;
  gap: 16px;

  input[type="search"] {
    margin-right: auto;
    min-width: 222px;
  }
`;

export const HeaderLogo = styled(NavLink)`
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: all 300ms ease-in-out;
  }
`;
