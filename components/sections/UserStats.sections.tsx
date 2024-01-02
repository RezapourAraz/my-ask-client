import React from "react";

// Mui
import { Box, Grid, Typography } from "@mui/material";

// Icons
import { BsFillQuestionSquareFill } from "react-icons/bs";

const UserStatsSection = () => {
  return (
    <Grid
      container
      sx={{
        p: 2,
        bgcolor: "common.white",
        borderRadius: 1,
        boxShadow: 1,
        my: 2,
      }}
    >
      <Grid item md={12}>
        <Typography
          variant="h5"
          sx={{
            color: "primary.main",
            pb: 2,
            borderBottom: 2,
            borderColor: "grey.300",
          }}
        >
          User Stats
        </Typography>
      </Grid>
      <Grid item container md={12} sx={{ justifyContent: "space-between" }}>
        <Grid item md={5.5}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              p: 1,
              bgcolor: "grey.300",
              my: 1,
            }}
          >
            <BsFillQuestionSquareFill />
            <Typography>Questions</Typography>
          </Box>
        </Grid>
        <Grid item md={5.5}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              p: 1,
              bgcolor: "grey.300",
              my: 1,
            }}
          >
            <BsFillQuestionSquareFill />
            <Typography>Questions</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserStatsSection;
