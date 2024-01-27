import QuestionBanner from "@/components/banners/Question.banners";
import BlogCard from "@/components/cards/Blog.cards";
import LeaveAnswerCard from "@/components/cards/LeaveAnswer.cards";
import MainLayout from "@/components/layout/Main.layout";
import AnswersSection from "@/components/sections/Answers.sections";
import RelatedQuestionsSection from "@/components/sections/RelatedQuestions.sections";
import MainSidebar from "@/components/sidebars/Main.sidebars";
import { getBlogById } from "@/redux/blogs/blogss.services";
import { getTags } from "@/redux/tags/tags.services";
import { getHighestUserPoint, getStats } from "@/redux/users/users.services";
import { Grid } from "@mui/material";
import { getCookie, hasCookie } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";

const BlogDetail = ({ user, blog, reputations, stats }: any) => {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout
        user={user}
        sidebar={
          <MainSidebar reputations={reputations.data} stats={stats.data} />
        }
        mainBanner={<QuestionBanner title="Blogs" />}
      >
        <Grid my={6}>
          <BlogCard blog={blog.data} commentCount={blog.commentCount} />
          {/* <RelatedQuestionsSection /> */}
          {/* <AnswersSection /> */}
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
  params,
  ...ctx
}: any) {
  const user: any = hasCookie("user", { req, res })
    ? JSON.parse(getCookie("user", { req, res }) as string)
    : null;

  const { slug } = params;
  const id = slug.split("-")[0];

  const blog = await getBlogById({ user, id });
  const stats = await getStats({ user });
  const reputations = await getHighestUserPoint({ user });

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
      blog,
      reputations,
      stats,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
}
