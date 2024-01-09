import React from "react";

// Mui
import { Box, Button, Grid, Input, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

const AddPostSection = () => {
  // hooks
  const { t } = useTranslation();

  return (
    <Box sx={{ px: 2 }}>
      <Grid sx={{ my: 6, p: 2, bgcolor: "common.white" }}>
        <Box sx={{ pb: 2, borderBottom: 2, borderColor: "grey.300" }}>
          <Typography variant="h3" color="primary.main">
            {t("add_post")}
          </Typography>
        </Box>
        <Grid container my={2}>
          <Grid my={1} item md={2} container alignItems="center">
            <Typography variant="subtitle2">
              {t("username")}{" "}
              <Typography
                color="primary.main"
                variant="subtitle2"
                component="span"
              >
                *
              </Typography>
            </Typography>
          </Grid>
          <Grid my={1} item md={10}>
            <Input sx={{ bgcolor: "grey.300" }} fullWidth />
            <Typography variant="h6" color="secondary.main">
              {t("enter_username")}
            </Typography>
          </Grid>
          <Grid item md={2} container alignItems="center">
            <Typography variant="subtitle2">
              {t("email")}{" "}
              <Typography
                color="primary.main"
                variant="subtitle2"
                component="span"
              >
                *
              </Typography>
            </Typography>
          </Grid>
          <Grid my={1} item md={10}>
            <Input sx={{ bgcolor: "grey.300" }} fullWidth />
            <Typography variant="h6" color="secondary.main">
              {t("enter_email")}
            </Typography>
          </Grid>
          <Grid my={1} item md={2} container alignItems="center">
            <Typography variant="subtitle2">
              {t("post_title")}{" "}
              <Typography
                color="primary.main"
                variant="subtitle2"
                component="span"
              >
                *
              </Typography>
            </Typography>
          </Grid>
          <Grid my={1} item md={10}>
            <Input sx={{ bgcolor: "grey.300" }} fullWidth />
            <Typography variant="h6" color="secondary.main">
              {t("enter_post_title")}
            </Typography>
          </Grid>
          <Grid my={1} item md={2} container alignItems="center">
            <Typography variant="subtitle2">
              {t("category")}{" "}
              <Typography
                color="primary.main"
                variant="subtitle2"
                component="span"
              >
                *
              </Typography>
            </Typography>
          </Grid>
          <Grid my={1} item md={10}>
            <Input sx={{ bgcolor: "grey.300" }} fullWidth />
            <Typography variant="h6" color="secondary.main">
              {t("enter_category")}
            </Typography>
          </Grid>
          <Grid my={1} item md={2} container alignItems="center">
            <Typography variant="subtitle2">Tags</Typography>
          </Grid>
          <Grid my={1} item md={10}>
            <Input sx={{ bgcolor: "grey.300" }} fullWidth />
            <Typography variant="h6" color="secondary.main">
              {t("enter_tags")}
            </Typography>
          </Grid>
          <Grid md={12} my={3}>
            <Button
              fullWidth
              variant="contained"
              sx={{ color: "common.white" }}
            >
              Publish Your Post
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddPostSection;
