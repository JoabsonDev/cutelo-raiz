import styled from "styled-components"

export const LoadingContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.WHITE};
  z-index: 10;
`
