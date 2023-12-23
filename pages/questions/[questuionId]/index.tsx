import Head from "next/head";
import React from "react";

// Components
import MainLayout from "@/components/layout/Main.layout";
import MainSidebar from "@/components/sidebars/Main.sidebars";
import QuestionBanner from "@/components/banners/Question.banners";

// Mui
import { Box, Grid, Typography } from "@mui/material";
import QuestionCard from "@/components/cards/Question.cards";
import AnswerCard from "@/components/cards/Answer.cards";
import AnswersSection from "@/components/sections/Answers.sections";

const Question = () => {
  return (
    <>
      <Head>
        <title>My Ask</title>
        <meta name="description" content="Travel App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout mainBanner={<QuestionBanner />} sidebar={<MainSidebar />}>
        <Grid my={6}>
          <QuestionCard />
          <AnswersSection />
        </Grid>
      </MainLayout>
    </>
  );
};

export default Question;
