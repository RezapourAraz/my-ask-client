import React, { FC, ReactNode } from "react";

// Mui
import { Box, Container, Grid } from "@mui/material";

// components
import TopHeader from "../headers/Top.headers";
import MainHeader from "../headers/Main.headers";
import MainBanner from "../banners/Main.banners";
import MainFooter from "../footers/Main.footers";

// Types
type IMainLayoutProps = {
  children: ReactNode;
  sidebar: ReactNode;
  mainBanner?: ReactNode;
};

const MainLayout: FC<IMainLayoutProps> = ({
  children,
  sidebar,
  mainBanner,
}) => {
  return (
    <Grid sx={{ bgcolor: "grey.200" }}>
      <TopHeader />
      <MainHeader />
      {mainBanner}

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
      <MainFooter />
    </Grid>
  );
};

export default MainLayout;
