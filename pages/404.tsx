import MainBanner from "@/components/banners/Main.banners";
import QuestionBanner from "@/components/banners/Question.banners";
import MainLayout from "@/components/layout/Main.layout";
import MainSidebar from "@/components/sidebars/Main.sidebars";
import { Box, Button, Grid, Typography } from "@mui/material";
import { getCookie, hasCookie } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";

const Page = () => {
  return (
    <>
      <Head>
        <title>404 | not Found</title>
        <meta name="description" content="Travel App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout mainBanner={<QuestionBanner title="Error 404" />}>
        <Box my={6}>
          <Box sx={{}} textAlign="center">
            <Typography sx={{ fontSize: 180, color: "grey.300" }}>
              404
            </Typography>
            <Typography sx={{ fontSize: 50 }}>Oops! Page Not Found</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
            <Button
              variant="contained"
              sx={{ width: 200 }}
              onClick={() => window.history.back()}
            >
              Home Page
            </Button>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default Page;

// export async function getServerSideProps({
//   query,
//   req,
//   res,
//   locale,
//   ...ctx
// }: any) {
//   const user: any = hasCookie("user", { req, res })
//     ? JSON.parse(getCookie("user", { req, res }) as string)
//     : null;

//   return {
//     props: {
//       user,
//       ...(await serverSideTranslations(locale as string, ["common"])),
//     },
//   };
// }
