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
import { useLoginForm, useResetPasswordForm } from "@/lib/formik.hooks";
import { useLoginMutation } from "@/redux/auth/auth.slice";
// Icons
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

// Cookie
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { setCookie } from "cookies-next";
import LoadingButton from "@mui/lab/LoadingButton";
import { toast } from "react-toastify";
import { resetPassword } from "@/redux/auth/auth.services";

const Login = () => {
  // hooks
  const router = useRouter();
  const { t } = useTranslation();

  // states
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // handlers
  const handleOnSubmit = async (values: any) => {
    try {
      setLoading(true);
      const data = await resetPassword({
        userId: router.query.userId,
        token: router.query.token,
        password: values.password,
      });
      if (data.code === 200) {
        // dispatch(setUser(data?.data));

        setLoading(false);
        toast.success("your password changed successfully");
        router.push("/auth/login");
      }
    } catch (err) {
      console.log(err);
      toast.error("an error according");
      setLoading(false);
    }
  };

  // formik
  const { handleChange, handleSubmit, errors, values } =
    useResetPasswordForm(handleOnSubmit);

  return (
    <>
      <Head>
        <title>{t("login_title")}</title>
        <meta name="description" content={t("login_title")} />
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
            <Typography variant="h2">{t("change_password")}</Typography>
          </Box>

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
          <Grid mt={3}>
            <Input
              name="confirm_password"
              sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
              fullWidth
              placeholder={t("confirm_password")}
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

          <Grid item sx={{ ".Mui-disabled": { bgcolor: "grey.800" }, mt: 3 }}>
            <LoadingButton
              variant="contained"
              fullWidth
              type="submit"
              sx={{ boxShadow: 0, color: "common.white" }}
              loading={loading}
            >
              {t("confirm")}
            </LoadingButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;

export async function getStaticPaths(ctx: any) {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
