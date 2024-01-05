import Head from "next/head";
import React from "react";

// Components
import MainLayout from "@/components/layout/Main.layout";
import AddPostSection from "@/components/sections/AddPost.sections";
import MainSidebar from "@/components/sidebars/Main.sidebars";

// Mui
import { Box } from "@mui/material";

// i18next
import { useTranslation } from "next-i18next";
import AskQuestionSection from "@/components/sections/AskQuestion.sections";

const AddQuestion = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Ask Question</title>
        <meta name="description" content="Travel App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout sidebar={<MainSidebar />}>
        <AskQuestionSection />
      </MainLayout>
    </>
  );
};

export default AddQuestion;
