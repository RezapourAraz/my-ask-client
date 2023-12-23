import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/lib/redux.hooks";

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

// redux
import { setUser } from "@/redux/auth/auth.reducer";
import { useLoginForm } from "@/lib/formik.hooks";
import { useLoginMutation } from "@/redux/auth/auth.slice";
// Icons
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

// Cookie
import { useCookies } from "react-cookie";
import { parseCookie } from "next/dist/compiled/@edge-runtime/cookies";

const Login = () => {
  // hooks
  const router = useRouter();
  const [login, { isSuccess, error }] = useLoginMutation();
  const [cookie, setCookie] = useCookies(["user"]);

  // handlers
  const handleOnSubmit = async () => {
    try {
      const data = await login(values).unwrap();
      if (data.code === 200) {
        // dispatch(setUser(data?.data));
        setCookie("user", JSON.stringify(data.data), {
          path: "/",
          maxAge: 3600, // Expires after 1hr
          sameSite: true,
        });
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // formik
  const { handleChange, handleSubmit, errors, values } =
    useLoginForm(handleOnSubmit);

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
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
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
              name="email"
              sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
              fullWidth
              placeholder="Email/Username"
              startAdornment={
                <InputAdornment position="start">
                  <FaUser />
                </InputAdornment>
              }
              value={values.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid mt={3}>
            <Input
              name="password"
              sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
              fullWidth
              placeholder="Password"
              type="password"
              startAdornment={
                <InputAdornment position="start">
                  <RiLockPasswordFill />
                </InputAdornment>
              }
              value={values.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid
            my={2}
            container
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Typography variant="h6">
              You have not an account?{" "}
              <Typography
                variant="h6"
                component="span"
                sx={{ color: "primary.main", cursor: "pointer" }}
                onClick={() => router.push("/auth/register")}
              >
                Register
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
              type="submit"
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
