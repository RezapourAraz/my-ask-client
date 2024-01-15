import React from "react";

// Mui
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { pointMaker } from "@/helper/pointMaker";

const HighestCard = ({ reputation }: any) => {
  // hooks
  const { t } = useTranslation();

  // state
  const userPoints = pointMaker(
    reputation.reputation ? reputation.reputation : 0
  );

  return (
    <Grid container sx={{ alignContent: "center", gap: 1 }}>
      <Grid
        item
        md={2}
        xs={12}
        container
        sx={{ alignContent: "center", mt: { xs: 1, md: 0 } }}
      >
        <Avatar
          src={`https://arazdev.storage.iran.liara.space/api/v1/users/${reputation.profile}`}
          alt={reputation.username}
          sx={{ bgcolor: "primary.main", color: "common.white" }}
        />
      </Grid>
      <Grid item md={9} xs={12}>
        <Box my={2}>
          <Typography color="primary.main" variant="h3">
            {reputation.username}
          </Typography>
          <Box
            sx={{
              bgcolor: userPoints?.color,
              display: "inline-flex",
              p: 0.5,
              borderRadius: 1,
            }}
          >
            <Typography variant="h6">{t(`${userPoints?.name}`)}</Typography>
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
