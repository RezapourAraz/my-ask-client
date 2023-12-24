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
import LeaveAnswerCard from "@/components/cards/LeaveAnswer.cards";
import RelatedQuestionsSection from "@/components/sections/RelatedQuestions.sections";

const Question = () => {
  return (
    <>
      <Head>
        <title>My Ask</title>
        <meta name="description" content="Travel App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout
        mainBanner={
          <QuestionBanner title="How much do web developers earn? What is their salary?" />
        }
        sidebar={<MainSidebar />}
      >
        <Grid my={6}>
          <QuestionCard />
          <AnswersSection />
          <LeaveAnswerCard />
          <RelatedQuestionsSection />
        </Grid>
      </MainLayout>
    </>
  );
};

export default Question;
