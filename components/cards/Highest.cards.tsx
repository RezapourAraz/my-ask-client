import React from "react";

// Mui
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

const HighestCard = () => {
  // hooks
  const { t } = useTranslation();

  return (
    <Grid container sx={{ alignContent: "center", gap: 1 }}>
      <Grid item md={2} container sx={{ alignContent: "center" }}>
        <Avatar />
      </Grid>
      <Grid item md={9}>
        <Box my={2}>
          <Typography color="primary.main" variant="h3">
            Araz Rezapour
          </Typography>
          <Box
            sx={{
              bgcolor: "success.main",
              display: "inline-flex",
              p: 0.5,
              borderRadius: 1,
            }}
          >
            <Typography variant="h6">{t("developer")}</Typography>
          </Box>
          <Typography color="secondary.main" variant="h5">
            429 {t("points")}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HighestCard;
