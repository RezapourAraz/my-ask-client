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
import { getTags } from "@/redux/tags/tags.services";
import { getHighestUserPoint, userProfile } from "@/redux/users/users.services";

const User = ({ userData, reputations, tags }: any) => {
  return (
    <>
      <Head>
        <title>{`${userData.username}`}</title>
        <meta name="description" content="Soalitoo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout
        user={userData}
        mainBanner={<QuestionBanner title={userData?.username} />}
        sidebar={
          <MainSidebar reputations={reputations.data} tags={tags.data} />
        }
      >
        <Grid my={6}>
          <UserCard user={userData} />
          <UserStatsSection user={userData} />
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
  const { userId } = query;

  const user: any = hasCookie("user", { req, res })
    ? JSON.parse(getCookie("user", { req, res }) as string)
    : null;

  const tags = await getTags({ user });
  const reputations = await getHighestUserPoint({ user });

  const userData = await userProfile({ user, userId: user.id });

  if (!user || !reputations || !tags || userData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      reputations,
      tags,
      userData,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
}
