import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  ${({ theme }) => theme.CLEAR_LIST};
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  gap: 16px;
`;
export const ListItem = styled.li`
  @media (width > ${({ theme }) => theme.BREAKPOINTS.MD}px) {
    max-width: 350px;
  }
`;
export const ListItemLink = styled(NavLink)`
  display: flex;
  padding-block: 8px;
  ${({ theme }) => theme.CLEAR_LINK};
  align-items: center;
  gap: 8px;
`;
export const ListItemImage = styled.img`
  max-width: 50px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
`;
export const ListItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const ListItemInfoTitle = styled.span`
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.NEUTRAL[600]};
`;
export const ListItemInfoDescription = styled.span`
  color: ${({ theme }) => theme.COLORS.NEUTRAL[500]};
  font-size: 14px;
`;
export const ListItemPrice = styled.span`
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.NEUTRAL[500]};
  font-size: 14px;
`;
