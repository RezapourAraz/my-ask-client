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
  sidebar?: ReactNode;
  mainBanner?: ReactNode;
  user: any;
};

const MainLayout: FC<IMainLayoutProps> = ({
  children,
  sidebar,
  mainBanner,
  user,
}) => {
  return (
    <Grid sx={{ bgcolor: "grey.200" }}>
      <TopHeader user={user} />
      <MainHeader />
      {mainBanner}

      <Container maxWidth="xl">
        <Grid container sx={{ px: { xs: 0, md: 3 } }}>
          <Grid item md={sidebar ? 9 : 12} sx={{ px: { xs: 0, md: 2 } }}>
            {children}
          </Grid>
          {sidebar && (
            <Grid item md={3} sx={{ px: { xs: 0, md: 2 } }}>
              {sidebar}
            </Grid>
          )}
        </Grid>
      </Container>
      <MainFooter />
    </Grid>
  );
};

export default MainLayout;
