import React from "react";
import { useRouter } from "next/router";

// Mui
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useTranslation } from "next-i18next";

const MainBanner = () => {
  // hooks
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Grid sx={{ bgcolor: "primary.main", height: { xs: 550, md: 400 } }}>
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Grid
          container
          sx={{
            px: { xs: 0, md: 5 },
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Grid item md={12} xs={12} sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography variant="h1" component="h6">
                {t("welcome_ask")}
              </Typography>
              <Typography variant="h5" sx={{ my: 2 }}>
                {t("welcome_ask_desc")}
              </Typography>
              <Box display="flex" gap={1} my={2}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "secondary.main",
                    boxShadow: 0,
                    color: "white",
                    width: 120,
                    ":hover": {
                      bgcolor: "grey.800",
                      boxShadow: 0,
                    },
                  }}
                >
                  {t("about_us")}
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "secondary.main",
                    boxShadow: 0,
                    color: "white",
                    width: 120,
                    ":hover": {
                      bgcolor: "grey.800",
                      boxShadow: 0,
                    },
                  }}
                  onClick={() => router.push("/auth/login")}
                >
                  {t("join_now")}
                </Button>
              </Box>
            </Box>
          </Grid>
          {/* <Grid item md={8} xs={12} position="relative">
            <Box
              sx={{
                backgroundImage: "url(chrome.png)",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                width: "100%",
                height: "100%",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bgcolor: "primary.light",
                top: { md: 120, xs: 30 },
                left: 20,
                right: 20,
                bottom: { md: 20, xs: 10 },
              }}
            >
              <TextareaAutosize
                placeholder={t("text_area")}
                style={{
                  backgroundColor: "transparent",
                  width: "100%",
                  height: "100%",
                  padding: 10,
                  border: 0,
                  outline: 0,
                  fontSize: 12,
                }}
              />
              <Box
                position="absolute"
                sx={{
                  bottom: 10,
                  right: router.locale === "en" ? 10 : "initial",
                  left: router.locale === "fa" ? 10 : "initial",
                }}
              >
                <Button
                  variant="contained"
                  sx={{ color: "common.white", boxShadow: 0 }}
                >
                  {t("ask_now")}
                </Button>
              </Box>
            </Box>
          </Grid> */}
        </Grid>
      </Container>
    </Grid>
  );
};

export default MainBanner;
