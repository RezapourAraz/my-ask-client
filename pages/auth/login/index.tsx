import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/lib/redux.hooks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

// Cookie
import { useCookies } from "react-cookie";
import { parseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { setCookie } from "cookies-next";

const Login = () => {
  // hooks
  const router = useRouter();
  const { t } = useTranslation();
  const [login, { isSuccess, error }] = useLoginMutation();

  // states
  const [showPassword, setShowPassword] = useState(false);

  // handlers
  const handleOnSubmit = async () => {
    try {
      const data = await login(values).unwrap();
      if (data.code === 200) {
        // dispatch(setUser(data?.data));

        setCookie("user", data.data);
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
        <title>{t("login_title")}</title>
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
            <Typography variant="h2">{t("login_title")}</Typography>
          </Box>
          <Grid my={2} sx={{ textAlign: "center" }}>
            <Typography variant="h5">{t("welcome")}</Typography>
          </Grid>
          <Grid my={3}>
            <Input
              name="email"
              sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
              fullWidth
              placeholder={t("email_username")}
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
              placeholder={t("password")}
              type={showPassword ? "text" : "password"}
              startAdornment={
                <InputAdornment position="start">
                  <RiLockPasswordFill />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment
                  position="start"
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{ cursor: "pointer" }}
                >
                  {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
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
              {t("don't_have_an_account")}{" "}
              <Typography
                variant="h6"
                component="span"
                sx={{ color: "primary.main", cursor: "pointer" }}
                onClick={() => router.push("/auth/register")}
              >
                {t("register")}
              </Typography>
            </Typography>
            <Typography variant="h6">{t("forgot_password")}</Typography>
          </Grid>
          <Grid container my={1} sx={{ alignItems: "center" }}>
            <Checkbox />
            <Typography variant="h6">{t("remember_me")}</Typography>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{ boxShadow: 0, color: "common.white" }}
            >
              {t("login")}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
