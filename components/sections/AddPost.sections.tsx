import React from "react";

// Mui
import { Box, Button, Grid, Input, Typography } from "@mui/material";

const AddPostSection = () => {
  return (
    <Box sx={{ px: 2 }}>
      <Grid sx={{ my: 6, p: 2, bgcolor: "common.white" }}>
        <Box sx={{ pb: 2, borderBottom: 2, borderColor: "grey.300" }}>
          <Typography variant="h3" color="primary.main">
            Add Post
          </Typography>
        </Box>
        <Grid container my={2}>
          <Grid my={1} item md={2} container alignItems="center">
            <Typography variant="subtitle2">
              Username{" "}
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
              Please type your username .
            </Typography>
          </Grid>
          <Grid item md={2} container alignItems="center">
            <Typography variant="subtitle2">
              Email{" "}
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
              Please type your E-Mail .
            </Typography>
          </Grid>
          <Grid my={1} item md={2} container alignItems="center">
            <Typography variant="subtitle2">
              Post Title{" "}
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
              Please choose an appropriate title for the post .
            </Typography>
          </Grid>
          <Grid my={1} item md={2} container alignItems="center">
            <Typography variant="subtitle2">
              Category{" "}
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
              Please choose the appropriate section so easily search for your
              post .
            </Typography>
          </Grid>
          <Grid my={1} item md={2} container alignItems="center">
            <Typography variant="subtitle2">Tags</Typography>
          </Grid>
          <Grid my={1} item md={10}>
            <Input sx={{ bgcolor: "grey.300" }} fullWidth />
            <Typography variant="h6" color="secondary.main">
              Please choose suitable Keywords Ex : post , video .
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
