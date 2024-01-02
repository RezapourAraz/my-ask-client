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

const User = () => {
  return (
    <>
      <Head>
        <title>Araz Rezapour</title>
        <meta name="description" content="Soalito App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout
        mainBanner={<QuestionBanner title="Araz Rezapour" />}
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
