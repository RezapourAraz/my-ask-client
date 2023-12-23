import { Box, Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const QuestionBanner = () => {
  // hooks
  const router = useRouter();

  console.log(router.asPath.split("/"));

  const routes = router.asPath.split("/");

  return (
    <Grid sx={{ bgcolor: "primary.main" }}>
      <Container maxWidth="xl">
        <Grid sx={{ px: 5, py: 3 }}>
          <Typography variant="h2">
            How much do web developers earn? What is their salary?
          </Typography>
          <Breadcrumbs sx={{ mt: 1 }}>
            {routes.map((route, idx) => (
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: 14,
                }}
                href={
                  route === ""
                    ? "/"
                    : idx + 1 === routes.length
                    ? `${router.asPath}`
                    : `/${route}`
                }
              >
                {route === "" ? "Home" : route}
              </Link>
            ))}
          </Breadcrumbs>
        </Grid>
      </Container>
    </Grid>
  );
};

export default QuestionBanner;
