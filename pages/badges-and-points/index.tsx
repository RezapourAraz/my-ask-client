import React from "react";
import Head from "next/head";

// Mui
import { Box, Grid, Typography } from "@mui/material";

// components
import MainLayout from "@/components/layout/Main.layout";
import MainSidebar from "@/components/sidebars/Main.sidebars";

// data

const badgesData = [
  {
    id: 1,
    title: "Beginner ( 20 ) Points",
    color: "#2F3239",
  },
  {
    id: 2,
    title: "Teacher ( 100 ) Points",
    color: "#DD3333",
  },
  {
    id: 3,
    title: "Pundit ( 150 ) Points",
    color: "#DD9933",
  },
  {
    id: 4,
    title: "Explainer ( 250 ) Points",
    color: "#81D742",
  },
  {
    id: 5,
    title: "Professional ( 500 ) Points",
    color: "#1E73BE",
  },
  {
    id: 6,
    title: "Enlightened ( 1000 ) Points",
    color: "#8224E3",
  },
];

const pointsData = [
  {
    id: 1,
    title: "For Signing up ( 20 )",
  },
  {
    id: 2,
    title: "When your answer has been chosen as the best answer ( 5 )",
  },
  {
    id: 3,
    title: "For adding an answer ( 2 )",
  },
  {
    id: 4,
    title: "Your question gets a vote ( 1 )",
  },
  {
    id: 5,
    title: "For choosing a poll on the question. ( 1 )",
  },
  {
    id: 6,
    title: "Your answer gets a vote ( 1 )",
  },
  {
    id: 7,
    title: "Each time when a user follows you ( 1 )",
  },
];

const BadgesAndPoints = () => {
  return (
    <>
      <Head>
        <title>Add Post</title>
        <meta name="description" content="Travel App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout sidebar={<MainSidebar />}>
        <Grid sx={{ px: 2 }}>
          <Grid sx={{ my: 6, p: 2, bgcolor: "common.white" }}>
            <Box sx={{ pb: 2, borderBottom: 2, borderColor: "grey.300" }}>
              <Typography variant="h3" color="primary.main">
                Badges
              </Typography>
            </Box>
            <Grid my={2} container justifyContent="space-between" rowGap={2}>
              {badgesData.map((badge) => (
                <Grid
                  item
                  md={5.9}
                  sx={{ color: "common.white", bgcolor: badge.color, p: 1.5 }}
                >
                  {badge.title}
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid sx={{ my: 6, p: 2, bgcolor: "common.white" }}>
            <Box sx={{ pb: 2, borderBottom: 2, borderColor: "grey.300" }}>
              <Typography variant="h3" color="primary.main">
                Badges
              </Typography>
            </Box>
            <Grid my={2} container justifyContent="space-between" rowGap={2}>
              {pointsData.map((point) => (
                <Grid
                  item
                  md={5.9}
                  sx={{ color: "common.black", bgcolor: "grey.300", p: 1.5 }}
                >
                  {point.title}
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
