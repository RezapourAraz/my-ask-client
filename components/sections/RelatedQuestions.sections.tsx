import React from "react";
import { useRouter } from "next/router";

// Mui
import { Box, Grid, Typography } from "@mui/material";

// icons
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const RelatedQuestionsSection = ({ related }: any) => {
  // hooks
  const router = useRouter();
  const { t } = useTranslation();

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
          {t("related_questions")}
        </Typography>
      </Box>
      <Grid>
        {related.map((item: any) => (
          <Box
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
            key={item.id}
          >
            <MdKeyboardDoubleArrowRight />
            <Typography
              variant="h5"
              sx={{
                color: "secondary.main",
                cursor: "pointer",
                transition: "color .3s ease",
                ":hover": { color: "primary.main" },
              }}
              onClick={() => router.push(`/questions/${item.id}-${item.title}`)}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default RelatedQuestionsSection;
