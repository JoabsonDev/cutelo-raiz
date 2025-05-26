import styled from "styled-components"

type IconProps = {
  $color?: string
}
export const Icon = styled.i<IconProps>`
  ${({ $color }) => {
    if ($color)
      return `
            color: ${$color};
            font-size: clamp(16px, 2.5vw, 24px);
        `
  }};
`
