import React from "react";

// components
import MainLayout from "@/components/layout/Main.layout";
import MainSidebar from "@/components/sidebars/Main.sidebars";

// Mui
import { Box, Button, Grid, Input } from "@mui/material";
import AddPostSection from "@/components/sections/AddPost.sections";
import Head from "next/head";
import { getCookie, hasCookie } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { getQuestions } from "@/redux/questions/question.services";
import { getTags } from "@/redux/tags/tags.services";
import { getHighestUserPoint, getStats } from "@/redux/users/users.services";
import InfoForLoginCard from "@/components/cards/InfoForLogin.cards";

const AddPost = ({ user, tags, reputations, stats }: any) => {
  // hooks
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("add_post")}</title>
        <meta name="description" content={t("add_post")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout
        user={user}
        sidebar={
          <MainSidebar
            // tags={tags.data}
            reputations={reputations.data}
            stats={stats.data}
          />
        }
      >
        {user ? <AddPostSection user={user} /> : <InfoForLoginCard />}
      </MainLayout>
    </>
  );
};

export default AddPost;

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

  return {
    props: {
      user,
      tags,
      reputations,
      stats,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
}
