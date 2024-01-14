import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import AnswerCard from "../cards/Answer.cards";
import { useTranslation } from "react-i18next";

const AnswersSection = ({ answers }: any) => {
  // hooks
  const { t } = useTranslation();

  return (
    <Grid
      sx={{
        mt: 6,
        pt: 2,
        px: 2,
        bgcolor: "common.white",
        boxShadow: 1,
        borderRadius: 1,
      }}
    >
      <Box sx={{ pb: 2, borderBottom: 2, borderColor: "grey.300" }}>
        <Typography variant="h3" color="primary.main">
          {t("answers")} ({answers.length})
        </Typography>
      </Box>
      {answers.map((answer: any) => (
        <AnswerCard key={answer.id} answer={answer} />
      ))}
    </Grid>
  );
};

export default AnswersSection;
