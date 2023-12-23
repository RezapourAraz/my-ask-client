import type { AppProps } from "next/app";
import "@/styles/globals.css";

// Mui
import { theme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material";

// store
import StoreProvider from "./storeProvider";
import { CookiesProvider } from "react-cookie";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreProvider>
    </CookiesProvider>
  );
}
