import { ThemeProvider } from "styled-components";
import { AppRouter } from "./AppRouter";
import { GlobalStyles } from "./styles/globals";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRouter />
      <GlobalStyles />
    </ThemeProvider>
  );
}
