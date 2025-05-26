import styled, { css } from "styled-components"

type AlertProps = {
  $type: "success" | "error"
  $isVisible?: boolean
}
export const AlertContainer = styled.div<
  Pick<AlertProps, "$type" | "$isVisible">
>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 8px;
  transition:
    transform 300ms ease-in-out,
    opacity 300ms ease-in-out;
  ${({ theme, $type, $isVisible }) => css`
    color: ${theme.COLORS.WHITE};
    box-shadow: ${theme.SHADOW.MEDIUM};
    transform: ${$isVisible ? "translateX(0)" : "translateX(100%)"};
    opacity: ${$isVisible ? 1 : 0};
    background-color: ${$type === "success"
      ? theme.COLORS.GREEN[500]
      : theme.COLORS.RED[500]};
  `}
`
export const AlertMessage = styled.span`
  font-size: 14px;
  line-height: 1.4;
`

export const AlertButton = styled.button`
  ${({ theme }) => css`
    ${theme.CLEAR_BUTTON};
    color: inherit;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: color 200ms ease-in-out;

    &:hover {
      color: ${theme.COLORS.NEUTRAL[200]};
    }
  `}
`
