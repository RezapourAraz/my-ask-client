import { Box, Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

// types
type IQuestionBannerProps = {
  title: string;
};
const QuestionBanner: FC<IQuestionBannerProps> = ({ title }) => {
  // hooks
  const router = useRouter();

  const routes = router.asPath.split("/");

  return (
    <Grid sx={{ bgcolor: "primary.main" }}>
      <Container maxWidth="xl">
        <Grid sx={{ px: 5, py: 3 }}>
          <Typography variant="h2">{title}</Typography>
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
