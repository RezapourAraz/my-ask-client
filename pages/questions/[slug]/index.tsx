import Head from "next/head";
import React, { useEffect, useState } from "react";

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
import {
  getQuestionById,
  updateQuestionViews,
} from "@/redux/questions/question.services";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getCookie, hasCookie } from "cookies-next";
import { getQuestionAnswers } from "@/redux/answers/answers.services";
import { axiosInstance } from "@/configs/AxiosConfig";
import { getHighestUserPoint, getStats } from "@/redux/users/users.services";
import { getTags } from "@/redux/tags/tags.services";
import InfoForLoginCard from "@/components/cards/InfoForLogin.cards";

const Question = ({
  question,
  answers,
  stats,
  reputations,
  tags,
  user,
}: any) => {
  // state
  const [hydrated, setHydrated] = useState(false);

  // handler
  const updateViews = async () => {
    await updateQuestionViews({ user, id: question.data.id });
  };

  useEffect(() => {
    setHydrated(true);
    updateViews();
  }, []);

  return (
    hydrated && (
      <>
        <Head>
          <title>{question.data.title}</title>
          <meta name="description" content={question.data.content} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <MainLayout
          user={user}
          mainBanner={<QuestionBanner title={question.data.title} />}
          sidebar={
            <MainSidebar
              stats={stats.data}
              tags={tags.relatedTags}
              reputations={reputations.data}
            />
          }
        >
          <Grid my={6}>
            <QuestionCard question={question.data} />
            {answers.data.length > 0 && (
              <AnswersSection answers={answers.data} />
            )}

            {user ? <LeaveAnswerCard /> : <InfoForLoginCard />}
            {question.relatedQuestions.length && (
              <RelatedQuestionsSection related={question.relatedQuestions} />
            )}
          </Grid>
        </MainLayout>
      </>
    )
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
  const stats = await getStats({ user });
  const tags = await getTags({ user });
  const reputations = await getHighestUserPoint({ user });

  if (!question || !answers || !reputations || !tags || !stats) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      question,
      answers,
      stats,
      tags,
      reputations,
      user,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
