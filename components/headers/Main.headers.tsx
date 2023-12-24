import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

// Icons
import { FaQuestion } from "react-icons/fa";

const routes = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "Ask Question",
    route: "/ask-question",
  },
  {
    id: 3,
    name: "Questions",
    route: "/questions",
  },
  {
    id: 4,
    name: "User",
    route: "/user",
  },
  {
    id: 6,
    name: "Blogs",
    route: "/blogs",
  },
  {
    id: 5,
    name: "Contact Us",
    route: "/contact-us",
  },
];

const MainHeader = () => {
  //
  const router = useRouter();

  return (
    <TopHeaderContainer>
      <Container maxWidth="xl">
        <Grid container sx={{ py: 2, justifyContent: "space-between", px: 5 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FaQuestion style={{ fontSize: 42, color: "white" }} />
            <Link href="/" style={{ textDecoration: "none" }}>
              <Typography variant="h3">My Ask ?</Typography>
              <Typography variant="h6" sx={{ fontSize: 10 }}>
                You Ask. We Answer
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {routes.map((route) => (
              <Box
                sx={{
                  p: 1,
                  px: 2,
                  bgcolor:
                    router.pathname === route.route
                      ? "primary.main"
                      : "initial",
                  borderRadius: 1,
                }}
                key={route.id}
              >
                <Link href={route.route} style={{ textDecoration: "none" }}>
                  <Typography variant="h4">{route.name}</Typography>
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
