import styled from "styled-components"

export const PromptMessage = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.COLORS.NEUTRAL[600]};
  margin-bottom: 2.5rem;
`

export const PromptButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
`

export const PromptDescription = styled.p`
  margin-bottom: 40px;
`
