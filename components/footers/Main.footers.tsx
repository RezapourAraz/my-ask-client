import React from "react";
import Link from "next/link";

// Mui
import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";

// Icons
import { MdEmail } from "react-icons/md";

// quick links data
const quickLinks = [
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
    name: "Profile",
    route: "/profile",
  },
  {
    id: 5,
    name: "Contact Us",
    route: "/contact-us",
  },
];

const MainFooter = () => {
  return (
    <Grid sx={{ bgcolor: "secondary.main" }}>
      <Container maxWidth="xl">
        <Grid container sx={{ p: 3 }}>
          <Grid item md={3} p={2}>
            <Box>
              <Typography variant="h4" sx={{ color: "primary.main" }}>
                Where We Are
              </Typography>
            </Box>
            <Box my={3}>
              <Typography variant="caption" color="grey.300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                adipiscing gravida odio, sit amet suscipit risus ultrices eu.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ color: "primary.main" }}>
                Address:
              </Typography>
            </Box>
            <Box my={3}>
              <Typography variant="caption" color="grey.300">
                Ask Me Network, 33 Street, syada Zeinab, Cairo, Egypt.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ color: "primary.main" }}>
                Support:
              </Typography>
            </Box>
            <Box my={3}>
              <Typography variant="caption" color="grey.300">
                Ask Me Network, 33 Street, syada Zeinab, Cairo, Egypt.
              </Typography>
              <Typography variant="caption" color="grey.300">
                Ask Me Network, 33 Street, syada Zeinab, Cairo, Egypt.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} p={2}>
            <Box>
              <Typography variant="h4" sx={{ color: "primary.main" }}>
                Quick Links
              </Typography>
            </Box>
            <Box>
              {quickLinks.map((link) => (
                <Box
                  key={link.id}
                  sx={{ py: 1, borderBottom: 1, borderColor: "grey.600" }}
                >
                  <Link href={link.route} style={{ textDecoration: "none" }}>
                    <Typography variant="h5" color="grey.300">
                      - {link.name}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item md={3} p={2}>
            <Box>
              <Typography variant="h4" sx={{ color: "primary.main" }}>
                Popular Questions
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} p={2}>
            <Box>
              <Typography variant="h4" sx={{ color: "primary.main" }}>
                Subscribe
              </Typography>
            </Box>
            <Box my={3}>
              <Typography variant="caption" color="grey.300">
                Subscribe to our email newsletter.
              </Typography>
            </Box>
            <Box my={2}>
              <Input
                startAdornment={
                  <InputAdornment position="start">
                    <MdEmail />
                  </InputAdornment>
                }
                placeholder="Email"
                fullWidth
              />
            </Box>
            <Box my={2}>
              <Button
                fullWidth
                variant="contained"
                sx={{ boxShadow: 0, color: "common.white" }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            md={12}
            px={2}
            pt={2}
            sx={{ borderTop: 1, borderColor: "grey.300" }}
          >
            <Typography variant="h6">
              Copyright {new Date().getFullYear()} My Ask |{" "}
              <Typography component="span" variant="h5" color="primary.main">
                Araz Rezapour
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default MainFooter;
