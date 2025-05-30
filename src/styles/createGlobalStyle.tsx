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

  .container{
    max-width: 1366px;
    margin: 0 auto;
  }

  @media (width < ${({ theme }) => theme.BREAKPOINTS.MD}px) {
    ::-webkit-scrollbar {
      display: none;
    }

    body {
      -ms-overflow-style: none; /* IE 10+ */
      scrollbar-width: none; /* Firefox */
    }
  }
`;

export default GlobalStyle;
