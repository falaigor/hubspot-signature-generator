import { ThemeProvider } from "styled-components";
import { SignatureGenerator } from "./pages/SignatureGenerator";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <SignatureGenerator />
    </ThemeProvider>
  );
}
