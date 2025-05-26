import styled from "styled-components"

export const InputSearch = styled.input.attrs((props) => ({
  type: "search",
  ...props,
}))`
  ${({ theme }) => theme.CLEAR_INPUT}
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL[300]};
  color: ${({ theme }) => theme.COLORS.NEUTRAL[600]};
  font-size: 14px;
`
