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
import { getHighestUserPoint, getStats } from "@/redux/users/users.services";
import { getTags } from "@/redux/tags/tags.services";
import { getBlogs } from "@/redux/blogs/blogss.services";

const Blogs = ({ user, reputations, tags, stats, blogs }: any) => {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Blogs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout
        user={user}
        sidebar={
          <MainSidebar
            reputations={reputations.data}
            tags={tags.data}
            stats={stats.data}
          />
        }
        mainBanner={<QuestionBanner title="Blogs" />}
      >
        {blogs.data.map((blog: any) => (
          <BlogCard blog={blog} />
        ))}
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
  const { limit = 10, page = 1 } = query;

  const user: any = hasCookie("user", { req, res })
    ? JSON.parse(getCookie("user", { req, res }) as string)
    : null;

  const stats = await getStats({ user });
  const tags = await getTags({ user });
  const reputations = await getHighestUserPoint({ user });
  const blogs = await getBlogs({ user, page, limit });

  return {
    props: {
      user,
      reputations,
      tags,
      stats,
      blogs,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
}
