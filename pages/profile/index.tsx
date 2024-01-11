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

const Profile = ({ userData, reputations, tags }: any) => {
  const user = userData.data;

  return (
    <>
      <Head>
        <title>{`${user.username}`}</title>
        <meta name="description" content="Soalitoo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout
        user={user}
        mainBanner={<QuestionBanner title={user?.username} />}
      >
        <Grid my={6}>
          <UserCard user={user} />
          <UserStatsSection user={user} />
        </Grid>
      </MainLayout>
    </>
  );
};

export default Profile;

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

  const userData = await userProfile({ user, userId: user.id });

  //   console.log(user);
  //   console.log(tags);
  //   console.log(reputations);
  console.log(userData);

  //   if (!user || !reputations || !tags || userData) {
  //     return {
  //       notFound: true,
  //     };
  //   }

  return {
    props: {
      reputations,
      tags,
      userData,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
}
