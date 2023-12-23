import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import AnswerCard from "../cards/Answer.cards";

const AnswersSection = () => {
  return (
    <Grid sx={{ mt: 6, pt: 2, px: 2, bgcolor: "common.white", boxShadow: 1 }}>
      <Box sx={{ pb: 2, borderBottom: 2, borderColor: "grey.300" }}>
        <Typography variant="h3" color="primary.main">
          Answers (4)
        </Typography>
      </Box>
      <AnswerCard />
      <AnswerCard />
      <AnswerCard />
    </Grid>
  );
};

export default AnswersSection;
