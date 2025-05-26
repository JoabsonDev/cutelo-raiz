import styled from "styled-components"
import { Swiper } from "swiper/react"

export const HorizontalScrollWrapperContainer = styled(Swiper)`
  & [style*="cursor: grabbing"] {
    * {
      cursor: grabbing;
    }
  }
  .swiper-slide {
    width: auto;
  }
`
