import Head from "next/head";
import React from "react";

// Mui
import { Box } from "@mui/material";

// Components
import MainBanner from "@/components/banners/Main.banners";
import MainLayout from "@/components/layout/Main.layout";
import MainSidebar from "@/components/sidebars/Main.sidebars";
import QuestionBanner from "@/components/banners/Question.banners";
import BlogCard from "@/components/cards/Blog.cards";
import { getCookie, hasCookie } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Blogs = ({ user }: any) => {
  return (
    <>
      <Head>
        <title>My Ask</title>
        <meta name="description" content="Travel App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout
        user={user}
        sidebar={<MainSidebar />}
        mainBanner={<QuestionBanner title="Blogs" />}
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </MainLayout>
    </>
  );
};

export default Blogs;

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
