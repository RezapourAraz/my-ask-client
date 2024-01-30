import QuestionBanner from "@/components/banners/Question.banners";
import BlogCard from "@/components/cards/Blog.cards";
import LeaveAnswerCard from "@/components/cards/LeaveAnswer.cards";
import MainLayout from "@/components/layout/Main.layout";
import AnswersSection from "@/components/sections/Answers.sections";
import RelatedQuestionsSection from "@/components/sections/RelatedQuestions.sections";
import MainSidebar from "@/components/sidebars/Main.sidebars";
import { getBlogById, updateBlogViews } from "@/redux/blogs/blogss.services";
import { getTags } from "@/redux/tags/tags.services";
import { getHighestUserPoint, getStats } from "@/redux/users/users.services";
import { Avatar, Box, Button, Grid, Input, Typography } from "@mui/material";
import { getCookie, hasCookie } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { commentServices } from "@/redux/comments/comments.services";
import { toast } from "react-toastify";

const BlogDetail = ({ user, blog, reputations, stats }: any) => {
  // hooks
  const { t } = useTranslation();
  // state
  const [hydrated, setHydrated] = useState(false);
  const [comment, setComment] = useState("");
  const updateViews = async () => {
    await updateBlogViews({ user, id: blog.data.id });
  };

  useEffect(() => {
    setHydrated(true);
    updateViews();
  }, []);

  const handlePublishComment = async () => {
    const body = {
      relId: blog.data.id,
      relType: "blog",
      userId: user.id,
      content: comment,
    };

    const data = await commentServices({ user, body });

    if (data?.code === 201) {
      toast.success(t("success_comment"));
    }
  };

  return (
    hydrated && (
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
            {/* <LeaveAnswerCard /> */}
            {user && (
              <Grid item md={12} sx={{ mb: 2 }}>
                <Box sx={{ p: 1, display: "flex", alignItems: "center" }}>
                  <Input
                    fullWidth
                    placeholder={t("comment")}
                    sx={{
                      px: 1,
                      color: "grey.900",
                      bgcolor: "grey.300",
                      border: 1,
                      borderColor: "primary.main",
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                    }}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <Button
                    variant="outlined"
                    sx={{
                      boxShadow: 0,
                      borderTopLeftRadius: 4,
                      borderBottomLeftRadius: 4,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                    onClick={handlePublishComment}
                  >
                    {t("publish")}
                  </Button>
                </Box>
              </Grid>
            )}
            {blog?.data.comments.length ? (
              <Grid item md={12} sx={{ mb: 2 }}>
                <Box sx={{ borderTop: 2, borderColor: "grey.300", p: 1 }}>
                  <Typography variant="h5" color="grey.900">
                    {t("comments")}
                  </Typography>
                </Box>
                {blog?.data.comments?.map((comment: any) => (
                  <Box
                    sx={{
                      p: 1,
                      bgcolor: "grey.300",
                      my: 0.1,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Avatar
                      src={`https://arazdev.storage.iran.liara.space/api/v1/users/${comment.profile}`}
                      alt={comment.username}
                      sx={{ width: 20, height: 20 }}
                    />

                    <Typography variant="caption" color="grey.900">
                      {comment.username} :
                    </Typography>
                    <Typography variant="h6" color="grey.900">
                      {comment.content}
                    </Typography>
                  </Box>
                ))}
              </Grid>
            ) : undefined}
          </Grid>
        </MainLayout>
      </>
    )
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
