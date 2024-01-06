import React from "react";

// Mui
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

const HighestCard = ({ reputation }: any) => {
  // hooks
  const { t } = useTranslation();

  return (
    <Grid container sx={{ alignContent: "center", gap: 1 }}>
      <Grid item md={2} container sx={{ alignContent: "center" }}>
        <Avatar
          src={reputation.profile}
          sx={{ bgcolor: "primary.main", color: "common.white" }}
        />
      </Grid>
      <Grid item md={9}>
        <Box my={2}>
          <Typography color="primary.main" variant="h3">
            {reputation.username}
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
            {reputation.reputation ? reputation.reputation : 0} {t("points")}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HighestCard;
