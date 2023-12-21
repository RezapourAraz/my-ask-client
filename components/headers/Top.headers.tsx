import React from "react";

// Mui
import {
  Box,
  Container,
  Divider,
  Grid,
  Input,
  Typography,
  styled,
} from "@mui/material";

// Icons
import { FaPencilAlt } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const TopHeader = () => {
  return (
    <TopHeaderContainer>
      <Container maxWidth="xl">
        <Grid
          container
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item md={3} container sx={{ gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                cursor: "pointer",
                ":hover .black": {
                  color: "secondary.main",
                },
              }}
            >
              <Box
                className="black"
                sx={{
                  color: "common.white",
                }}
              >
                <FaUser />
              </Box>
              <Typography className="black" variant="h6">
                Login Area
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              sx={{ bgcolor: "secondary.main" }}
              flexItem
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                gap: 0.5,
                ":hover .black": {
                  color: "secondary.main",
                },
              }}
            >
              <Box className="black" sx={{ color: "common.white" }}>
                <FaPencilAlt />
              </Box>
              <Typography className="black" variant="h6">
                Add Post
              </Typography>
            </Box>
            <Divider
              orientation="vertical"
              sx={{ bgcolor: "secondary.main" }}
              flexItem
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                cursor: "pointer",
                ":hover .black": {
                  color: "secondary.main",
                },
              }}
            >
              <Box className="black" sx={{ color: "common.white" }}>
                <GiTrophyCup />
              </Box>
              <Typography className="black" variant="h6">
                Badges
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2} container>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <FaSearch style={{ color: "white" }} />
              <Input fullWidth placeholder="search here..." />
            </Box>
          </Grid>
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
