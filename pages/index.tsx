import MainHeader from "@/components/headers/Main.headers";
import TopHeader from "@/components/headers/Top.headers";
import { Box } from "@mui/material";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My Ask</title>
        <meta name="description" content="Travel App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TopHeader />
      <MainHeader />
    </>
  );
}
