import React from "react";

// Mui
import { Box, Button, Grid } from "@mui/material";
import StatsCard from "../cards/Stats.cards";
import HighestPointsSection from "../sections/HighestPoints.sections";
import TagsSection from "../sections/Tags.sections";
import { useTranslation } from "next-i18next";

const MainSidebar = ({ tags }: any) => {
  // hooks
  const { t } = useTranslation();

  return (
    <Grid sx={{ p: 1 }}>
      <Box>
        <Button
          variant="contained"
          fullWidth
          sx={{ color: "common.white", my: 5, boxShadow: 0 }}
        >
          {t("ask_now")}
        </Button>
      </Box>
      <StatsCard />
      <HighestPointsSection />
      <TagsSection tags={tags} />
    </Grid>
  );
};

export default MainSidebar;
