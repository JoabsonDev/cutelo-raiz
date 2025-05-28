import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";
import Router from "./routes";
import GlobalStyle from "./styles/createGlobalStyle";

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
