import React from "react";

// Mui
import { Box, Button, Grid } from "@mui/material";
import StatsCard from "../cards/Stats.cards";
import HighestPointsSection from "../sections/HighestPoints.sections";

const MainSidebar = () => {
  return (
    <Grid sx={{ p: 1 }}>
      <Box>
        <Button
          variant="contained"
          fullWidth
          sx={{ color: "common.white", my: 5, boxShadow: 0 }}
        >
          Ask a Question
        </Button>
      </Box>
      <StatsCard />
      <HighestPointsSection />
    </Grid>
  );
};

export default MainSidebar;
