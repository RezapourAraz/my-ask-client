import React from "react";

// Mui
import { Box, Grid, Typography } from "@mui/material";
import HighestCard from "../cards/Highest.cards";
import { useTranslation } from "next-i18next";

const HighestPointsSection = ({ reputations }: any) => {
  // hooks
  const { t } = useTranslation();

  return (
    <Grid
      sx={{
        p: 2,
        bgcolor: "common.white",
        borderRadius: 1,
        boxShadow: 1,
        my: 3,
      }}
    >
      <Box sx={{ pb: 2, borderBottom: 2, borderColor: "grey.300" }}>
        <Typography variant="h4" color="primary.main">
          {t("highest_points")}
        </Typography>
      </Box>
      {reputations.map((reputation: any) => (
        <HighestCard reputation={reputation} />
      ))}
    </Grid>
  );
};

export default HighestPointsSection;
