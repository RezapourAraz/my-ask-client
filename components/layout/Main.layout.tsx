import React, { FC, ReactNode } from "react";

// Mui
import { Box, Container, Grid } from "@mui/material";

// components
import TopHeader from "../headers/Top.headers";
import MainHeader from "../headers/Main.headers";
import MainBanner from "../banners/Main.banners";

// Types
type IMainLayoutProps = {
  children: ReactNode;
  sidebar: ReactNode;
};

const MainLayout: FC<IMainLayoutProps> = ({ children, sidebar }) => {
  return (
    <Grid sx={{ bgcolor: "grey.200" }}>
      <TopHeader />
      <MainHeader />
      <MainBanner />
      <Container maxWidth="xl">
        <Grid container sx={{ px: 3 }}>
          <Grid item md={9} sx={{ px: 2 }}>
            {children}
          </Grid>
          <Grid item md={3} sx={{ px: 2 }}>
            {sidebar}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default MainLayout;
