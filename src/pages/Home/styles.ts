import styled from "styled-components";

export const HomeGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100dvh;
  padding-top: ${({ theme }) => theme.HEADER_HEIGHT}px;
`;

export const HomeContainer = styled.main`
  ${({ theme }) => theme.PADDING_DEFAULT};
  min-height: 320px;

  .home-slider {
    margin-block: 16px 24px;
  }
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.COLORS.NEUTRAL[500]};
  font-size: clamp(16px, 1.5vw, 20px);
  margin-top: 24px;
`;

export const HomeNoData = styled.p`
  color: ${({ theme }) => theme.COLORS.NEUTRAL[500]};
  font-size: clamp(14px, 1.5vw, 16px);

  i {
    font-size: clamp(16px, 2.5vw, 20px);
    margin-right: 8px;
  }
`;
