import styled from "styled-components"

export const SwitchContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL[400]};
  width: 40px;
  height: 20px;
  border-radius: 10px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.NEUTRAL[50]};
    top: 50%;
    transform: translateY(-50%);
    left: 2px;
    transition: 0.2s;
    pointer-events: none;
  }

  &:has(input:checked) {
    background-color: var(--clr-primary-500);

    &::before {
      left: calc(100% - 18px);
    }
  }
`
export const SwitchInput = styled.input.attrs({ type: "checkbox" })`
  width: inherit;
  opacity: 0;
`
