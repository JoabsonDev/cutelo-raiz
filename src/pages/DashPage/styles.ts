import styled from "styled-components";

export const DashPageGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100dvh;
  padding-top: ${({ theme }) => theme.HEADER_HEIGHT}px;
`;

export const DashPageContainer = styled.main`
  ${({ theme }) => theme.PADDING_DEFAULT};
  min-height: 320px;

  .home-slider {
    margin-block: 16px 24px;
  }
`;
