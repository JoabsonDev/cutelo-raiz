import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SearchListContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
export const List = styled.ul`
  ${({ theme }) => theme.CLEAR_LIST};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  max-height: 400px;
  overflow-y: auto;
`;
export const SearchListItem = styled.li`
  &:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY[300]};
  }
`;
export const SearchEmptyData = styled.span`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  display: block;
  padding: 16px;
  color: ${({ theme }) => theme.COLORS.NEUTRAL[600]};
`;

export const SearchListProduct = styled(NavLink)`
  ${({ theme }) => theme.CLEAR_LINK};

  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-areas:
    "image name"
    "image price";
  grid-column-gap: 8px;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    grid-area: image;
  }

  padding: 8px clamp(16px, 5vw, 24px);

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.GRAY[100]};
  }
`;
