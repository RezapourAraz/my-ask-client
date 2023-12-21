import React from "react";

// Mui
import { Box, Container, Grid, Typography, styled } from "@mui/material";

// Icons
import { FaPencilAlt } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";

const TopHeader = () => {
  return (
    <TopHeaderContainer>
      <Container maxWidth="lg">
        <Grid container sx={{ gap: 2 }}>
          <Box>
            <Typography variant="h6">Login Area</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Box sx={{ color: "common.white" }}>
              <FaPencilAlt />
            </Box>
            <Typography variant="h6">Add Post</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Box sx={{ color: "common.white" }}>
              <GiTrophyCup />
            </Box>
            <Typography variant="h6">Badges</Typography>
          </Box>
        </Grid>
      </Container>
    </TopHeaderContainer>
  );
};

const TopHeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: 5,
}));

export default TopHeader;
