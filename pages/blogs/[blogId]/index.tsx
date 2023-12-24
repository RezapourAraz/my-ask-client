import QuestionBanner from "@/components/banners/Question.banners";
import BlogCard from "@/components/cards/Blog.cards";
import LeaveAnswerCard from "@/components/cards/LeaveAnswer.cards";
import MainLayout from "@/components/layout/Main.layout";
import AnswersSection from "@/components/sections/Answers.sections";
import RelatedQuestionsSection from "@/components/sections/RelatedQuestions.sections";
import MainSidebar from "@/components/sidebars/Main.sidebars";
import { Grid } from "@mui/material";
import Head from "next/head";
import React from "react";

const BlogDetail = () => {
  return (
    <>
      <Head>
        <title>My Ask</title>
        <meta name="description" content="Travel App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout
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
