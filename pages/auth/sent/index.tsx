import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/lib/redux.hooks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Mui
import { Box, Grid, Typography } from "@mui/material";

// redux
import { useLoginForm } from "@/lib/formik.hooks";
import { useLoginMutation } from "@/redux/auth/auth.slice";

// Icons
import { FaCheckCircle } from "react-icons/fa";

// Cookie
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { setCookie } from "cookies-next";
import LoadingButton from "@mui/lab/LoadingButton";
import { toast } from "react-toastify";

const Forget = () => {
  // hooks
  const router = useRouter();
  const { t } = useTranslation();
  const [login, { isSuccess, error }] = useLoginMutation();

  // states
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // handlers
  const handleOnSubmit = async () => {
    try {
      setLoading(true);
      const data = await login(values).unwrap();
      if (data.code === 200) {
        // dispatch(setUser(data?.data));

        setLoading(false);
        toast.success("you logged in successfully");
        setCookie("user", data.data, { maxAge: 3600 * 24 });
        router.push("/");
      }
    } catch (err) {
      console.log(err);
      toast.error("failed to login");
      setLoading(false);
    }
  };

  // formik
  const { handleChange, handleSubmit, errors, values } =
    useLoginForm(handleOnSubmit);

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
            <Typography variant="h2">{t("sent")}</Typography>
          </Box>

          <Grid container my={3} justifyContent="center">
            <FaCheckCircle style={{ fontSize: 48, color: "green" }} />
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
