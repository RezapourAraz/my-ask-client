import type { AppProps } from "next/app";
import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";

// Mui
import { theme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material";

// store
import StoreProvider from "./storeProvider";
import { CookiesProvider } from "react-cookie";
import { appWithTranslation } from "next-i18next";
// import nextI18NextConfig from "./../next-i18next.config";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CookiesProvider>
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <NextNProgress color="#f0f0f0" />
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreProvider>
    </CookiesProvider>
  );
};

export default appWithTranslation(App);
