import Prompt from "@organisms/Prompt";
import usePromptStore from "@store/prompt";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import theme from "./constants/theme";
import Router from "./routes";
import GlobalStyle from "./styles/createGlobalStyle";

const queryClient = new QueryClient();

export default function App() {
  const {
    config: { callback, ...rest },
    setConfig,
  } = usePromptStore();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router />
        <Prompt
          {...rest}
          onCancel={() => setConfig({ open: false })}
          onConfirm={() => {
            setConfig({ open: false });
            callback!();
          }}
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
