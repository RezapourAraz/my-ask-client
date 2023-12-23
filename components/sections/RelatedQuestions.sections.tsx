import React from "react";

// Mui
import { Box, Grid, Typography } from "@mui/material";

// icons
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const relatedQuestions = [
  {
    id: 1,
    title:
      "How do I tell my new employer that I can’t use the computer they gave me?",
  },
  {
    id: 3,
    title:
      "How do I tell my new employer that I can’t use the computer they gave me?",
  },
  {
    id: 2,
    title:
      "How do I tell my new employer that I can’t use the computer they gave me?",
  },
];

const RelatedQuestionsSection = () => {
  return (
    <Grid
      sx={{
        mt: 6,
        p: 2,
        bgcolor: "common.white",
        boxShadow: 1,
        borderRadius: 1,
      }}
    >
      <Box sx={{ pb: 2, borderBottom: 2, borderColor: "grey.300" }}>
        <Typography variant="h3" color="primary.main">
          Related questions
        </Typography>
      </Box>
      <Grid>
        {relatedQuestions.map((related) => (
          <Box
            sx={{ p: 1, display: "flex", alignItems: "center", gap: 1 }}
            key={related.id}
          >
            <MdKeyboardDoubleArrowRight />
            <Typography variant="h5" sx={{ color: "secondary.main" }}>
              {related.title}
            </Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default RelatedQuestionsSection;
