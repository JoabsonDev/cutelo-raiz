import styled from "styled-components";

export const ProductCardBannerContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    height: clamp(200px, 26vw, 400px);
    object-fit: cover;
  }
`;

export const ProductCardInfoContainer = styled.div`
  position: absolute;
  inset: 0 0 6px 0;
  padding: 16px 40px;
  background: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  button {
    margin-top: 16px;
  }
`;

export const ProductCardTitle = styled.h3`
  font-size: clamp(24px, 2.5vw, 32px);
`;

export const ProductCardDescription = styled.p`
  color: ${({ theme }) => theme.COLORS.NEUTRAL[300]};
  font-size: clamp(14px, 1.5vw, 18px);
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* número máximo de linhas */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductCardPromotionalPrice = styled.span`
  position: relative;
  font-size: clamp(16px, 2vw, 20px);

  &::before {
    content: "";
    position: absolute;
    top: 11px;
    left: 0;
    width: 108%;
    height: 100%;
    transform: rotate(-12deg);
    transform-origin: center;
    border-top: 2px solid ${({ theme }) => theme.COLORS.RED[500]};
    z-index: 1;
  }
`;
export const ProductCardPrice = styled.span`
  font-size: clamp(20px, 2.5vw, 28px);

  &.has-promo {
    ${({ theme }) =>
      theme.NICE_TEXT(theme.COLORS.NEUTRAL[800], theme.COLORS.NEUTRAL[50])};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
  }
`;

export const ProductCardPriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
