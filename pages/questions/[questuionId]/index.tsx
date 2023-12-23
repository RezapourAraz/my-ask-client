import Head from "next/head";
import React from "react";

// Components
import MainLayout from "@/components/layout/Main.layout";
import MainSidebar from "@/components/sidebars/Main.sidebars";

// Mui
import { Box } from "@mui/material";
import MainBanner from "@/components/banners/Main.banners";
import QuestionBanner from "@/components/banners/Question.banners";

const Question = () => {
  return (
    <>
      <Head>
        <title>My Ask</title>
        <meta name="description" content="Travel App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout mainBanner={<QuestionBanner />} sidebar={<MainSidebar />}>
        <Box>a</Box>
      </MainLayout>
    </>
  );
};

export default Question;
