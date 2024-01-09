import QuestionBanner from "@/components/banners/Question.banners";
import BlogCard from "@/components/cards/Blog.cards";
import LeaveAnswerCard from "@/components/cards/LeaveAnswer.cards";
import MainLayout from "@/components/layout/Main.layout";
import AnswersSection from "@/components/sections/Answers.sections";
import RelatedQuestionsSection from "@/components/sections/RelatedQuestions.sections";
import MainSidebar from "@/components/sidebars/Main.sidebars";
import { Grid } from "@mui/material";
import { getCookie, hasCookie } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";

const BlogDetail = ({ user }: any) => {
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
        <Grid my={6}>
          <BlogCard />
          <RelatedQuestionsSection />
          <AnswersSection />
          <LeaveAnswerCard />
        </Grid>
      </MainLayout>
    </>
  );
};

export default BlogDetail;

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
