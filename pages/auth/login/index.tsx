import React from "react";

// Mui
import {
  Box,
  Button,
  Checkbox,
  Grid,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";

// Icons
import { FaUser } from "react-icons/fa";
import Head from "next/head";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Travel App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Grid
        container
        sx={{
          height: "100vh",
          bgcolor: "secondary.main",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          sx={{
            width: 400,
            border: 1,
            px: 2,
            py: 5,
            borderRadius: 2,
            borderColor: "grey.400",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h2">Login</Typography>
          </Box>
          <Grid my={2} sx={{ textAlign: "center" }}>
            <Typography variant="h5">welcome back!</Typography>
          </Grid>
          <Grid my={3}>
            <Input
              sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
              fullWidth
              placeholder="Email/Username"
              startAdornment={
                <InputAdornment position="start">
                  <FaUser />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid mt={3}>
            <Input
              sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
              fullWidth
              placeholder="Password"
              type="password"
              startAdornment={
                <InputAdornment position="start">
                  <FaUser />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid
            my={2}
            container
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Typography variant="h6">
              Have an account?{" "}
              <Typography
                variant="h6"
                component="span"
                sx={{ color: "primary.main" }}
              >
                login
              </Typography>
            </Typography>
            <Typography variant="h6">Forgot Password?</Typography>
          </Grid>
          <Grid container my={1} sx={{ alignItems: "center" }}>
            <Checkbox />
            <Typography variant="h6">Remember me</Typography>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              fullWidth
              sx={{ boxShadow: 0, color: "common.white" }}
            >
              Log in
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
