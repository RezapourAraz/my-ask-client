import React from "react";
import Head from "next/head";
import { getCookie, hasCookie } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// Mui
import {
  Box,
  Button,
  Grid,
  IconButton,
  Input,
  Typography,
} from "@mui/material";

// Components
import QuestionBanner from "@/components/banners/Question.banners";
import MainLayout from "@/components/layout/Main.layout";

// Icons
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const ContactUs = ({ user }: any) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("contact_us")}</title>
        <meta name="description" content={t("contact_us")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout
        user={user}
        mainBanner={<QuestionBanner title={t("contact_us")} />}
      >
        <Grid my={6}>
          <Grid container justifyContent="space-between">
            <Grid
              item
              md={7}
              sx={{
                p: 2,
                bgcolor: "common.white",
                borderRadius: 1,
                boxShadow: 1,
                my: 2,
              }}
            >
              <Grid sx={{ p: 2, borderBottom: 2, borderColor: "grey.300" }}>
                <Typography variant="h4" sx={{ color: "primary.main" }}>
                  {t("contact_us")}
                </Typography>
              </Grid>
              <Grid sx={{ my: 2 }}>
                <Typography variant="caption">{t("about_us_text")}</Typography>
              </Grid>
              <Grid container alignItems="center" my={3}>
                <Grid item md={2}>
                  <Typography
                    variant="h6"
                    color="common.black"
                    sx={{ width: 100 }}
                  >
                    {t("y_name")}
                  </Typography>
                </Grid>
                <Grid item md={10} sx={{ width: "100%" }}>
                  <Input fullWidth sx={{ bgcolor: "grey.300" }} />
                </Grid>
              </Grid>
              <Grid container alignItems="center" my={3}>
                <Grid item md={2}>
                  <Typography
                    variant="h6"
                    color="common.black"
                    sx={{ width: 100 }}
                  >
                    {t("y_email")}
                  </Typography>
                </Grid>
                <Grid item md={10} sx={{ width: "100%" }}>
                  <Input fullWidth sx={{ bgcolor: "grey.300" }} />
                </Grid>
              </Grid>
              <Grid container alignItems="center" my={3}>
                <Grid item md={2}>
                  <Typography
                    variant="h6"
                    color="common.black"
                    sx={{ width: 100 }}
                  >
                    {t("subject")}
                  </Typography>
                </Grid>
                <Grid item md={10} sx={{ width: "100%" }}>
                  <Input fullWidth sx={{ bgcolor: "grey.300" }} />
                </Grid>
              </Grid>
              <Grid container alignItems="center" my={3}>
                <Grid item md={2}>
                  <Typography
                    variant="h6"
                    color="common.black"
                    sx={{ width: 100 }}
                  >
                    {t("message")}
                  </Typography>
                </Grid>

                <Grid item md={10} sx={{ width: "100%" }}>
                  <Input fullWidth sx={{ bgcolor: "grey.300" }} />
                </Grid>
              </Grid>
              <Grid container alignItems="center" mt={2} gap={1}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ color: "common.white", boxShadow: 0 }}
                >
                  {t("send")}
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              md={4.5}
              sx={{
                p: 2,
                bgcolor: "common.white",
                borderRadius: 1,
                boxShadow: 1,
                my: 2,
              }}
            >
              <Grid sx={{ p: 2, borderBottom: 2, borderColor: "grey.300" }}>
                <Typography variant="h4" sx={{ color: "primary.main" }}>
                  {t("about_us")}
                </Typography>
              </Grid>
              <Grid mt={2}>
                <Typography variant="caption">{t("about_us_text")}</Typography>
              </Grid>
              <Grid container alignItems="center" mt={2} gap={1}>
                <IoLocationSharp style={{ color: "#FE7361" }} />
                <Typography variant="h6" sx={{ color: "common.black" }}>
                  {t("address")}:
                </Typography>
                <Typography variant="h6" sx={{ color: "common.black" }}>
                  Tabriz Iran
                </Typography>
              </Grid>
              <Grid container alignItems="center" mt={2} gap={1}>
                <FaPhone style={{ color: "#FE7361" }} />
                <Typography variant="h6" sx={{ color: "common.black" }}>
                  {t("phone_number")}:
                </Typography>
                <Typography variant="h6" sx={{ color: "common.black" }}>
                  041 414 1414
                </Typography>
              </Grid>
              <Grid container alignItems="center" mt={2} gap={1}>
                <MdEmail style={{ color: "#FE7361" }} />
                <Typography variant="h6" sx={{ color: "common.black" }}>
                  {t("email")}:
                </Typography>
                <Typography variant="h6" sx={{ color: "common.black" }}>
                  rezapouraraz@gmail.com
                </Typography>
              </Grid>
              <Grid container alignItems="center" mt={2} gap={1}>
                <FaShareSquare style={{ color: "#FE7361" }} />
                <Typography variant="h6" sx={{ color: "common.black" }}>
                  {t("social_links")}:
                </Typography>
                <Box>
                  <IconButton>
                    <FaInstagram style={{ color: "black", fontSize: 18 }} />
                  </IconButton>
                  <IconButton>
                    <FaLinkedinIn style={{ color: "black", fontSize: 18 }} />
                  </IconButton>
                  <IconButton>
                    <FaFacebookF style={{ color: "black", fontSize: 18 }} />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MainLayout>
    </>
  );
};

export default ContactUs;

export async function getServerSideProps({
  query,
  req,
  res,
  locale,
  ...ctx
}: any) {
  const user: any = hasCookie("user", { req, res })
    ? JSON.parse(getCookie("user", { req, res }) as string)
    : null;

  return {
    props: {
      user,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
}
