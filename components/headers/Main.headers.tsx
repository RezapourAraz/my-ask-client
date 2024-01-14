import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "next-i18next";

// Icons
import { FaQuestion } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

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
    id: 4,
    name: "users",
    route: "/users",
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

  // states
  const [showMenu, setShowMenu] = useState(false);

  // handlers
  const handleClickOnMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <TopHeaderContainer>
        <Container maxWidth="xl">
          <Grid
            container
            sx={{
              py: 2,
              justifyContent: "space-between",
              px: { xs: 1, md: 5 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FaQuestion style={{ fontSize: 42, color: "white" }} />
              <Link href="/" style={{ textDecoration: "none" }}>
                <Typography variant="h3">{t("title")}</Typography>
                <Typography variant="h6" sx={{ fontSize: 10 }}>
                  {t("you_ask_we_answer")}
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{
                alignItems: "center",
                gap: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
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
                    <Typography variant="h6">{t(`${route.name}`)}</Typography>
                  </Link>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
              onClick={handleClickOnMenu}
            >
              {showMenu ? (
                <IoMdClose style={{ fontSize: 42, color: "white" }} />
              ) : (
                <RiMenu3Line style={{ fontSize: 42, color: "white" }} />
              )}
            </Box>
          </Grid>
        </Container>
      </TopHeaderContainer>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "absolute",
          bgcolor: "secondary.main",
          left: 0,
          right: 0,
          top: 68,
          mt: 2,
          transform: showMenu ? "translateY(0)" : "translateY(-150%)",
          transition: "all .3s ease",
          zIndex: 9,
        }}
      >
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
    </>
  );
};

const TopHeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: 5,
  zIndex: 10,
}));

export default MainHeader;
