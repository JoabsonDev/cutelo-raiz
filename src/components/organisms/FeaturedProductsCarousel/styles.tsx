import styled from "styled-components";
import { Swiper } from "swiper/react";

export const SwiperWrapper = styled(Swiper)`
  position: relative;
  width: calc(100vw - calc(clamp(16px, 5vw, 24px) * 2) - 24px);
  max-width: 1366px;
  overflow: hidden;
  padding: 1rem 0;

  @media (width < ${({ theme }) => theme.BREAKPOINTS.SM}px) {
    width: calc(100vw - calc(clamp(16px, 5vw, 24px) * 2));
  }

  --swiper-navigation-color: ${({ theme }) => theme.COLORS.ORANGE[500]};
  --swiper-pagination-color: ${({ theme }) => theme.COLORS.ORANGE[500]};

  .swiper-pagination {
    --swiper-pagination-bottom: -4px;
  }
`;
