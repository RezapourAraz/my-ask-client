import type { AppProps } from "next/app";
import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";

// Mui
import useTheme from "@/theme/theme";
import { ThemeProvider } from "@mui/material";

// store
import StoreProvider from "../redux/storeProvider";
import { CookiesProvider } from "react-cookie";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
// import nextI18NextConfig from "./../next-i18next.config";

import { Bounce, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  const theme = useTheme(locale);

  return (
    <CookiesProvider>
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <NextNProgress color="#313338" />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreProvider>
    </CookiesProvider>
  );
};

export default appWithTranslation(App);
