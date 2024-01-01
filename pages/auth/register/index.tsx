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
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Head from "next/head";
import { useRouter } from "next/router";
import { t } from "i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

const Register = () => {
  // hooks
  const router = useRouter();
  const { t } = useTranslation();

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
              sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
              fullWidth
              placeholder={t("username")}
              startAdornment={
                <InputAdornment position="start">
                  <FaUser />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid my={3}>
            <Input
              sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
              fullWidth
              placeholder={t("email")}
              startAdornment={
                <InputAdornment position="start">
                  <MdEmail />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid my={3}>
            <Input
              sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
              fullWidth
              placeholder={t("password")}
              startAdornment={
                <InputAdornment position="start">
                  <RiLockPasswordFill />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid mt={3}>
            <Input
              sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
              fullWidth
              placeholder={t("confirm_password")}
              type="password"
              startAdornment={
                <InputAdornment position="start">
                  <RiLockPasswordFill />
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
