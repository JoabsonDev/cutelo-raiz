import styled from "styled-components"

export const NoDataContainer = styled.p`
  color: ${({ theme }) => theme.COLORS.NEUTRAL[500]};
  font-size: clamp(14px, 1.5vw, 16px);

  i.fa-face-frown {
    font-size: clamp(16px, 2.5vw, 20px);
    margin-right: 8px;
  }
`
