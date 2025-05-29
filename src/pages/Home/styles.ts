import styled from "styled-components";

export const HomeContainer = styled.div``;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.COLORS.NEUTRAL[500]};
  font-size: clamp(16px, 1.5vw, 20px);
  margin-top: 24px;
`;
