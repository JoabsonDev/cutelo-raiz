import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: grid;
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

  h2 {
    grid-area: name;
    font-size: clamp(14px, 2.5vw, 16px);
  }

  div {
    display: flex;
    gap: 8px;

    .old-price {
      text-decoration: line-through;
      color: ${({ theme }) => theme.COLORS.RED[400]};
      font-size: clamp(10px, 2.5vw, 12px);
    }

    .price {
      font-weight: ${({ theme }) => theme.FONT.WEIGHT.SEMI_BOLD};
      font-size: clamp(14px, 2.5vw, 16px);
      color: ${({ theme }) => theme.COLORS.NEUTRAL[600]};
    }
  }
`;
