import styled from "styled-components";

export const ProductContainer = styled.div``;
export const ProductGalery = styled.div`
  display: grid;
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
  max-width: 358px;
`;
