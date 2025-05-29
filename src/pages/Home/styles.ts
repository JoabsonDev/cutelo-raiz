import styled from "styled-components";

export const HomeGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100dvh;
`;

export const HomeContainer = styled.main`
  ${({ theme }) => theme.PADDING_DEFAULT};
  min-height: 320px;

  .categories-menu {
    padding-block: 12px;
    margin-top: 12px;

    position: sticky;
    top: 60px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .home-slider {
    margin-block: 16px 24px;
  }
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.COLORS.NEUTRAL[500]};
  font-size: clamp(16px, 1.5vw, 20px);
`;

export const HomeNoData = styled.p`
  color: ${({ theme }) => theme.COLORS.NEUTRAL[500]};
  font-size: clamp(14px, 1.5vw, 16px);

  i {
    font-size: clamp(16px, 2.5vw, 20px);
    margin-right: 8px;
  }
`;
