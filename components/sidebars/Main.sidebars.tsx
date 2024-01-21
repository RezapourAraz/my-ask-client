import React from "react";
import { useRouter } from "next/router";

// Mui
import { Box, Button, Grid } from "@mui/material";

// components
import HighestPointsSection from "../sections/HighestPoints.sections";
import TagsSection from "../sections/Tags.sections";
import StatsCard from "../cards/Stats.cards";

// i18next
import { useTranslation } from "next-i18next";

const MainSidebar = ({ tags, reputations, stats }: any) => {
  // hooks
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Grid sx={{ p: 1, position: "sticky", top: -30, mb: 1.5 }}>
      <Box>
        <Button
          variant="contained"
          fullWidth
          sx={{ color: "common.white", my: 5, boxShadow: 0 }}
          onClick={() => router.push("/ask-question")}
        >
          {t("ask_now")}
        </Button>
      </Box>
      <StatsCard stats={stats} />
      <HighestPointsSection reputations={reputations} />
      {tags?.length > 0 && <TagsSection tags={tags} />}
    </Grid>
  );
};

export default MainSidebar;
