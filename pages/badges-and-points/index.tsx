import React from "react";
import Head from "next/head";

// Mui
import { Box, Grid, Typography } from "@mui/material";

// components
import MainLayout from "@/components/layout/Main.layout";
import MainSidebar from "@/components/sidebars/Main.sidebars";
import { getCookie, hasCookie } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getHighestUserPoint, getStats } from "@/redux/users/users.services";
import { getTags } from "@/redux/tags/tags.services";
import { useTranslation } from "next-i18next";

// data

const badgesData = [
  {
    id: 1,
    title: "beginner_20_point",
    color: "#2F3239",
  },
  {
    id: 2,
    title: "teacher_100_point",
    color: "#DD3333",
  },
  {
    id: 3,
    title: "pundit_150_point",
    color: "#DD9933",
  },
  {
    id: 4,
    title: "explainer_250_point",
    color: "#81D742",
  },
  {
    id: 5,
    title: "professional_500_point",
    color: "#1E73BE",
  },
  {
    id: 6,
    title: "enlightened_1000_point",
    color: "#8224E3",
  },
];

const pointsData = [
  {
    id: 1,
    title: "for_signup",
  },
  {
    id: 2,
    title: "when_answer_best",
  },
  {
    id: 3,
    title: "add_answer",
  },
  {
    id: 4,
    title: "your_question_got_vote",
  },
  {
    id: 5,
    title: "when_polls",
  },
  {
    id: 6,
    title: "your_answer_got_vote",
  },
  {
    id: 7,
    title: "follow_user",
  },
];

const BadgesAndPoints = ({ user, reputations, stats, tags }: any) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("badges_and_points")}</title>
        <meta name="description" content={t("badges_and_points")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout
        user={user}
        sidebar={
          <MainSidebar
            reputations={reputations.data}
            stats={stats.data}
            tags={tags.data}
          />
        }
      >
        <Grid sx={{ px: 2 }}>
          <Grid sx={{ my: 6, p: 2, bgcolor: "common.white" }}>
            <Box sx={{ pb: 2, borderBottom: 2, borderColor: "grey.300" }}>
              <Typography variant="h3" color="primary.main">
                {t("badges")}
              </Typography>
            </Box>
            <Grid my={2} container justifyContent="space-between" rowGap={2}>
              {badgesData.map((badge) => (
                <Grid
                  key={badge.id}
                  item
                  md={5.9}
                  sx={{ color: "common.white", bgcolor: badge.color, p: 1.5 }}
                >
                  {t(`${badge.title}`)}
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid sx={{ my: 6, p: 2, bgcolor: "common.white" }}>
            <Box sx={{ pb: 2, borderBottom: 2, borderColor: "grey.300" }}>
              <Typography variant="h3" color="primary.main">
                {t("points")}
              </Typography>
            </Box>
            <Grid my={2} container justifyContent="space-between" rowGap={2}>
              {pointsData.map((point) => (
                <Grid
                  key={point.id}
                  item
                  md={5.9}
                  sx={{ color: "common.black", bgcolor: "grey.300", p: 1.5 }}
                >
                  {t(point.title)}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </MainLayout>
    </>
  );
};

export default BadgesAndPoints;

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

  const stats = await getStats({ user });
  const tags = await getTags({ user });
  const reputations = await getHighestUserPoint({ user });

  return {
    props: {
      user,
      reputations,
      stats,
      tags,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
}
