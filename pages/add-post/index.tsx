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

const AddPost = ({ user }: any) => {
  return (
    <>
      <Head>
        <title>Add Post</title>
        <meta name="description" content="Travel App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout user={user} sidebar={<MainSidebar />}>
        <AddPostSection />
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

  return {
    props: {
      user,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
}
