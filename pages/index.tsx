import Head from "next/head";
import { useState } from "react";

// components
import MainLayout from "@/components/layout/Main.layout";
import MainTab from "@/components/tabs/Main.tabs";

// Mui
import { Box } from "@mui/material";
import { Inter } from "next/font/google";
import MainSidebar from "@/components/sidebars/Main.sidebars";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("recentQuestions");

  return (
    <>
      <Head>
        <title>My Ask</title>
        <meta name="description" content="Travel App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout sidebar={<MainSidebar />}>
        <MainTab setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      </MainLayout>
    </>
  );
}
