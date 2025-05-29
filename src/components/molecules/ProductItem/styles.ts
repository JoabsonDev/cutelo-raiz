import styled from "styled-components";

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL[200]};
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;
export const ListItemImage = styled.img`
  max-width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
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
  display: -webkit-box;
  -webkit-line-clamp: 3; /* número máximo de linhas */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ListItemPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ListItemPrice = styled.span`
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.NEUTRAL[500]};
  font-size: 14px;
`;
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
`;
export const ListItemTips = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  line-height: 0;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ContentWrapper = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;

  button {
    margin-top: 16px;
  }
`;
