import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const ListItem = styled.div``
export const ListItemLink = styled(NavLink)`
  display: flex;
  padding-block: 8px;
  ${({ theme }) => theme.CLEAR_LINK};
  align-items: center;
  gap: 8px;
  position: relative;
  min-height: 90px;

  i.fa-heart {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.RED[500]};
  }
  i.fa-cart-shopping {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.NEUTRAL[500]};
  }
`
export const ListItemImage = styled.img`
  max-width: 50px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
`
export const ListItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const ListItemInfoTitle = styled.span`
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.NEUTRAL[600]};
`
export const ListItemInfoDescription = styled.span`
  color: ${({ theme }) => theme.COLORS.NEUTRAL[500]};
  font-size: 14px;
`
export const ListItemPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ListItemPrice = styled.span`
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.NEUTRAL[500]};
  font-size: 14px;
`
export const ListItemOldPrice = styled(ListItemPrice)`
  position: relative;
  font-size: 12px;

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 0;
    width: 108%;
    height: 100%;
    transform: rotate(-12deg);
    transform-origin: center;
    border-top: 2px solid ${({ theme }) => theme.COLORS.RED[500]};
    z-index: 1;
  }
`
export const ListItemTips = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  line-height: 0;
  display: flex;
  align-items: center;
  gap: 4px;
`
