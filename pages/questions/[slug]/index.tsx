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
import { getQuestionById } from "@/redux/questions/question.services";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getCookie, hasCookie } from "cookies-next";
import { getQuestionAnswers } from "@/redux/answers/answers.services";

const Question = ({ question, answers }: any) => {
  return (
    <>
      <Head>
        <title>{question.data.title}</title>
        <meta name="description" content={question.data.content} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout
        mainBanner={<QuestionBanner title={question.data.title} />}
        sidebar={<MainSidebar />}
      >
        <Grid my={6}>
          <QuestionCard question={question.data} />
          {answers.data.length > 0 && <AnswersSection answers={answers.data} />}

          <LeaveAnswerCard />
          <RelatedQuestionsSection />
        </Grid>
      </MainLayout>
    </>
  );
};

export default Question;

export async function getServerSideProps({
  locale,
  params,
  req,
  res,
  ...ctx
}: any) {
  const user: any = hasCookie("user", { req, res })
    ? JSON.parse(getCookie("user", { req, res }) as string)
    : null;

  const { slug } = params;
  const id = slug.split("-")[0];

  const question = await getQuestionById({ id, user });
  const answers = await getQuestionAnswers({ id, user });

  if (!question || !answers) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      question,
      answers,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
