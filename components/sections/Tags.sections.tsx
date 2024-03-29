import React from "react";

// Mui
import { Box, Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

const TagsSection = ({ tags }: any) => {
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
          {t("tags")}
        </Typography>
      </Box>
      <Box my={3} gap={1}>
        {tags?.map((tag: any) => (
          <Button
            key={tag?.tagId || tag.id}
            variant="contained"
            sx={{
              bgcolor: "secondary.main",
              m: 0.5,
              fontSize: 12,
              color: "common.white",
              boxShadow: 0,
            }}
          >
            {t(`${tag?.tagTitle || tag.title}`)}
          </Button>
        ))}
      </Box>
    </Grid>
  );
};

export default TagsSection;
