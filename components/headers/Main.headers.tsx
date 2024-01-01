import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "next-i18next";

// Icons
import { FaQuestion } from "react-icons/fa";

const routes = [
  {
    id: 1,
    name: "home",
    route: "/",
  },
  {
    id: 2,
    name: "ask_question",
    route: "/ask-question",
  },
  {
    id: 3,
    name: "questions",
    route: "/questions",
  },
  {
    id: 4,
    name: "user",
    route: "/user",
  },
  {
    id: 6,
    name: "blogs",
    route: "/blogs",
  },
  {
    id: 5,
    name: "contact_us",
    route: "/contact-us",
  },
];

const MainHeader = () => {
  // hooks
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <TopHeaderContainer>
      <Container maxWidth="xl">
        <Grid container sx={{ py: 2, justifyContent: "space-between", px: 5 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FaQuestion style={{ fontSize: 42, color: "white" }} />
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography variant="h3">{t("title")}</Typography>
              <Typography variant="h6" sx={{ fontSize: 10 }}>
                {t("you_ask_we_answer")}
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {routes.map((route) => (
              <Box
                sx={{
                  p: 1,
                  px: 2,
                  bgcolor: router.pathname.includes(route.route)
                    ? "primary.main"
                    : "initial",
                  borderRadius: 1,
                }}
                key={route.id}
              >
                <Link href={route.route} style={{ textDecoration: "none" }}>
                  <Typography variant="h4">{t(`${route.name}`)}</Typography>
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>
      </Container>
    </TopHeaderContainer>
  );
};

const TopHeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: 5,
}));

export default MainHeader;
