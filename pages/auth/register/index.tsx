import React, { useState } from "react";

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
import { MdEmail } from "react-icons/md";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import Head from "next/head";
import { useRouter } from "next/router";
import { t } from "i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { useRegisterFrom } from "@/lib/formik.hooks";
import { IRegisterBody, registerUser } from "@/redux/auth/auth.services";
import { toast } from "react-toastify";
import { setCookie } from "cookies-next";

const Register = () => {
  // hooks
  const router = useRouter();
  const { t } = useTranslation();

  // states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const submitHandler = async (values: IRegisterBody) => {
    const data = await registerUser(values);

    if (data.code === 201) {
      toast.success("you registered successfully");
      setCookie("user", data.data, { maxAge: 3600 * 24 });
      router.push("/");
    } else {
      toast.error("something went wrong!");
    }
  };

  const { errors, values, handleChange, handleSubmit } =
    useRegisterFrom(submitHandler);

  return (
    <>
      <Head>
        <title>{t("register")}</title>
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
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
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
            <Typography variant="h2">{t("create_account")}</Typography>
          </Box>
          <Grid my={2} sx={{ textAlign: "center" }}>
            <Typography variant="h5">{t("welcome_ask")}</Typography>
          </Grid>
          <Grid my={3}>
            <Input
              name="username"
              sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
              fullWidth
              placeholder={t("username")}
              value={values.username}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <FaUser />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid my={3}>
            <Input
              name="email"
              sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
              fullWidth
              placeholder={t("email")}
              value={values.email}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <MdEmail />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid my={3}>
            <Input
              name="password"
              sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
              fullWidth
              placeholder={t("password")}
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
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
            />
          </Grid>
          <Grid mt={3}>
            <Input
              name="confirmPassword"
              sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
              fullWidth
              placeholder={t("confirm_password")}
              type={showConfirmPassword ? "text" : "password"}
              value={values.confirmPassword}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <RiLockPasswordFill />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment
                  position="start"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  sx={{ cursor: "pointer" }}
                >
                  {showConfirmPassword ? <IoIosEyeOff /> : <IoIosEye />}
                </InputAdornment>
              }
            />
          </Grid>
          <Grid my={2} container sx={{ alignItems: "center" }}>
            <Typography variant="h6">
              {t("have_an_account")}{" "}
              <Typography
                variant="h6"
                component="span"
                sx={{ color: "primary.main", cursor: "pointer" }}
                onClick={() => router.push("/auth/login")}
              >
                {t("login")}
              </Typography>
            </Typography>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{ boxShadow: 0, color: "common.white" }}
            >
              {t("signup")}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
