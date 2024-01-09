import Head from "next/head";
import React from "react";
// Mui
import { Grid } from "@mui/material";

// Components
import QuestionBanner from "@/components/banners/Question.banners";
import MainLayout from "@/components/layout/Main.layout";
import MainSidebar from "@/components/sidebars/Main.sidebars";
import UserCard from "@/components/cards/User.cards";
import UserStatsSection from "@/components/sections/UserStats.sections";
import { getCookie, hasCookie } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const User = ({ user }: any) => {
  return (
    <>
      <Head>
        <title>{user.username}</title>
        <meta name="description" content="Soalito App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout
        user={user}
        mainBanner={<QuestionBanner title={user.username} />}
        sidebar={<MainSidebar />}
      >
        <Grid my={6}>
          <UserCard />
          <UserStatsSection />
        </Grid>
      </MainLayout>
    </>
  );
};

export default User;

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

  return {
    props: {
      user,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
}
