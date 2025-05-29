import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  :root{       

    @media (width <= ${({ theme }) => theme.BREAKPOINTS.SM}px) {
      ${({ theme }) => theme.SCROLLBAR_NONE};
    }
        
    @media (width > ${({ theme }) => theme.BREAKPOINTS.SM}px) {
      ${({ theme }) =>
        theme.SCROLLBAR(theme.COLORS.NEUTRAL[100], theme.COLORS.NEUTRAL[300])};
    }
  }

  body{
    min-height: 100dvh;
    font-family: ${({ theme }) => theme.FONT.FAMILY.POPPINS};
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  a, button, input, textarea, select {
    -webkit-tap-highlight-color: transparent;
  }

  .overflow-hidden{
    overflow: hidden;
  }

  .marker-label{
    margin-bottom: 52px;
    background-color: ${({ theme }) => theme.COLORS.RED[500]};
    color: ${({ theme }) => theme.COLORS.WHITE} !important;
    padding: 4px;
    border-radius: 4px;
    font-size: 12px !important;
  }

  div:has([src*="location-drag.png"]) > div:has(div > div > .marker-label){
    z-index: 999999 !important;

    .marker-label{
      margin-bottom: 78px;
      background-color: ${({ theme }) => theme.COLORS.BLACK};
      opacity: .5
    }
  }


  .container{
    max-width: 1366px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
