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
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { setCookie } from "cookies-next";
import LoadingButton from "@mui/lab/LoadingButton";
import { toast } from "react-toastify";
import { forgetPasswordLink } from "@/redux/auth/auth.services";

const Forget = () => {
  // hooks
  const router = useRouter();
  const { t } = useTranslation();

  // states
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  // handlers
  const handleOnSubmit = async (values: any) => {
    try {
      setLoading(true);
      const data = await forgetPasswordLink(values);
      if (data.code === 200) {
        setLoading(false);
        toast.success("we sent rest link to your email");
        router.push("/auth/sent");
      }
    } catch (err) {
      console.log(err);
      toast.error("failed to sent");
      setLoading(false);
    }
  };

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
            handleOnSubmit(email);
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
            <Typography variant="h2">{t("forget")}</Typography>
          </Box>

          <Grid my={3}>
            <Input
              name="email"
              sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
              fullWidth
              placeholder={t("email")}
              startAdornment={
                <InputAdornment position="start">
                  <FaUser />
                </InputAdornment>
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid sx={{ ".Mui-disabled": { bgcolor: "grey.800" } }}>
            <LoadingButton
              variant="contained"
              fullWidth
              type="submit"
              sx={{ boxShadow: 0, color: "common.white" }}
              loading={loading}
            >
              {t("send")}
            </LoadingButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Forget;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
