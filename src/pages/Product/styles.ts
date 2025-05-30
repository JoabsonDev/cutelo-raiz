import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 24px;
`;
export const ProductGalery = styled.div`
  display: none;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "miniature1 image"
    "miniature2 image"
    "miniature3 image"
    "miniature4 image"
    ". image"
    ". image"
    ". image"
    ". image";
  gap: 8px;
  position: sticky;
  top: 240px;

  @media (width >= ${({ theme }) => theme.BREAKPOINTS.MD}px) {
    display: grid;
  }
`;
export const ProductDetailButtonTrigger = styled.button`
  ${({ theme }) => theme.CLEAR_BUTTON};
  width: 56px;
  height: 56px;
  border-radius: 4px;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.COLORS.NEUTRAL[600]};
  padding: 1px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.active {
    border-color: ${({ theme }) => theme.COLORS.ORANGE[500]};
  }
`;

export const ReactImageMagnifyWrapper = styled.div`
  grid-area: image;
  width: 358px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductDetail = styled.div`
  flex: 1 0 374px;

  button {
    margin-top: 16px;
  }
`;
export const ProductDetailTitle = styled.h2`
  font-size: clamp(24px, 2vw, 32px);
  color: ${({ theme }) => theme.COLORS.NEUTRAL[800]};
`;
export const ProductDetailDescription = styled.p`
  font-size: clamp(14px, 1vw, 16px);
  color: ${({ theme }) => theme.COLORS.NEUTRAL[600]};
`;
export const ProductDetailPromotionalPrice = styled.span`
  position: relative;
  font-size: clamp(16px, 2vw, 20px);
  z-index: -1;

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
  }
`;
export const ProductDetailPrice = styled.span`
  font-size: clamp(20px, 2.5vw, 28px);

  &.has-promo {
    ${({ theme }) =>
      theme.NICE_TEXT(theme.COLORS.NEUTRAL[800], theme.COLORS.NEUTRAL[50])};
    font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
  }
`;

export const ProductDetailPriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ProductDetailMobileCarousel = styled.div`
  position: relative;
  display: none;

  img {
    width: 100%;
    height: clamp(200px, 26vw, 400px);
    object-fit: cover;
  }

  @media (width < ${({ theme }) => theme.BREAKPOINTS.MD}px) {
    display: block;
  }
`;
