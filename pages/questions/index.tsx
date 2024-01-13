import QuestionBanner from "@/components/banners/Question.banners";
import MainLayout from "@/components/layout/Main.layout";
import MainSidebar from "@/components/sidebars/Main.sidebars";
import { getQuestionAnswers } from "@/redux/answers/answers.services";
import { getQuestionById } from "@/redux/questions/question.services";
import { getTags } from "@/redux/tags/tags.services";
import { getHighestUserPoint, getStats } from "@/redux/users/users.services";
import { Box, Grid } from "@mui/material";
import { getCookie, hasCookie } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";

const Questions = ({ user, stats, tags, reputations }: any) => {
  return (
    <>
      <Head>
        <title>Questions</title>
        <meta name="description" content="Questions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout
        user={user}
        mainBanner={<Box></Box>}
        sidebar={
          <MainSidebar
            stats={stats.data}
            tags={tags.relatedTags}
            reputations={reputations.data}
          />
        }
      >
        <Grid my={6}>
          <h1>Questions</h1>
        </Grid>
      </MainLayout>
    </>
  );
};

export default Questions;

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

  const stats = await getStats({ user });
  const tags = await getTags({ user });
  const reputations = await getHighestUserPoint({ user });

  if (!reputations || !tags || !stats) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      stats,
      tags,
      reputations,
      user,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
