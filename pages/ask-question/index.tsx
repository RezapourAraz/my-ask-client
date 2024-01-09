import Head from "next/head";
import React from "react";

// Components
import MainLayout from "@/components/layout/Main.layout";
import AddPostSection from "@/components/sections/AddPost.sections";
import MainSidebar from "@/components/sidebars/Main.sidebars";

// Mui
import { Box, Typography } from "@mui/material";

// i18next
import { useTranslation } from "next-i18next";
import AskQuestionSection from "@/components/sections/AskQuestion.sections";
import { getQuestions } from "@/redux/questions/question.services";
import { getCookie, hasCookie } from "cookies-next";
import { getHighestUserPoint, getStats } from "@/redux/users/users.services";
import { getTags } from "@/redux/tags/tags.services";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import InfoForLoginCard from "@/components/cards/InfoForLogin.cards";

const AddQuestion = ({
  tags,
  reputations,
  stats,
  user,
}: {
  tags: any;
  reputations: any;
  stats: any;
  user: any;
}) => {
  // hooks
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Ask Question</title>
        <meta name="description" content="Ask Question" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout
        user={user}
        sidebar={
          <MainSidebar reputations={reputations.data} stats={stats.data} />
        }
      >
        {user ? <AskQuestionSection tags={tags.data} /> : <InfoForLoginCard />}
      </MainLayout>
    </>
  );
};

export default AddQuestion;

export async function getServerSideProps({
  query,
  req,
  res,
  locale,
  ...ctx
}: any) {
  const user: any = hasCookie("user", { req, res })
    ? JSON.parse(getCookie("user", { req, res }) as string)
    : null;

  const tags = await getTags({ user });
  const reputations = await getHighestUserPoint({ user });
  const stats = await getStats({ user });

  if (!tags || !reputations || !stats) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      tags,
      reputations,
      stats,
      user,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
}
