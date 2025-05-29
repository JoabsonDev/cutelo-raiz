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

export const ButtonAction = styled.button`
  ${({ theme }) => theme.CLEAR_BUTTON};

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 32px;
  height: 32px;
  padding: 4px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL[100]};
  color: ${({ theme }) => theme.COLORS.NEUTRAL[800]};
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &.left {
    left: 0;
  }
  &.right {
    right: 0;
  }
`;
