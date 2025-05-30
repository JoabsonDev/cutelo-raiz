import styled from "styled-components";

import { dynamicClip, rotateScale } from "@styles/animations";

export const SpinnerContainer = styled.div`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid ${({ theme }) => theme.COLORS.ORANGE[500]};
  animation: ${dynamicClip} 800ms infinite linear alternate,
    ${rotateScale} 1.6s infinite linear;
`;
