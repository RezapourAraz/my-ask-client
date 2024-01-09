import React from "react";
import Head from "next/head";

// Mui
import { Box, Button, Grid, Input, Typography } from "@mui/material";

// Components
import QuestionBanner from "@/components/banners/Question.banners";
import MainLayout from "@/components/layout/Main.layout";

// Icons
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";
import { getCookie, hasCookie } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ContactUs = ({ user }: any) => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout
        user={user}
        mainBanner={
          <QuestionBanner title="How much do web developers earn? What is their salary?" />
        }
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
                  Contact Us
                </Typography>
              </Grid>
              <Grid sx={{ my: 2 }}>
                <Typography variant="caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  adipiscing gravida odio, sit amet suscipit risus ultrices eu.
                  Fusce viverra neque at purus laoreet consequat.
                </Typography>
              </Grid>
              <Grid container alignItems="center" my={3}>
                <Grid item md={2}>
                  <Typography
                    variant="h6"
                    color="common.black"
                    sx={{ width: 100 }}
                  >
                    Your Name
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
                    Your Email
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
                    Subject
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
                    Message
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
                  Send
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
                  About Us
                </Typography>
              </Grid>
              <Grid mt={2}>
                <Typography variant="caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  adipiscing gravida odio, sit amet suscipit risus ultrices eu.
                  Fusce viverra neque at purus laoreet consequat. Vivamus
                  vulputate posuere nisl quis consequat. Donec congue commodo
                  mi, sed commodo velit fringilla ac. Fusce placerat venenatis
                  mi. Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Cras ornare, dolor a
                  aliquet rutrum, dolor turpis condimentum leo, a semper lacus
                  purus in felis. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </Typography>
              </Grid>
              <Grid container alignItems="center" mt={2} gap={1}>
                <IoLocationSharp style={{ color: "#FE7361" }} />
                <Typography variant="h6" sx={{ color: "common.black" }}>
                  Address:
                </Typography>
                <Typography variant="h6" sx={{ color: "common.black" }}>
                  Tabriz Iran
                </Typography>
              </Grid>
              <Grid container alignItems="center" mt={2} gap={1}>
                <FaPhone style={{ color: "#FE7361" }} />
                <Typography variant="h6" sx={{ color: "common.black" }}>
                  Phone number:
                </Typography>
                <Typography variant="h6" sx={{ color: "common.black" }}>
                  041 414 1414
                </Typography>
              </Grid>
              <Grid container alignItems="center" mt={2} gap={1}>
                <MdEmail style={{ color: "#FE7361" }} />
                <Typography variant="h6" sx={{ color: "common.black" }}>
                  E-mail:
                </Typography>
                <Typography variant="h6" sx={{ color: "common.black" }}>
                  rezapouraraz@gmail.com
                </Typography>
              </Grid>
              <Grid container alignItems="center" mt={2} gap={1}>
                <FaShareSquare style={{ color: "#FE7361" }} />
                <Typography variant="h6" sx={{ color: "common.black" }}>
                  Social links:
                </Typography>
                <Typography variant="h6" sx={{ color: "common.black" }}>
                  instagram
                </Typography>
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
