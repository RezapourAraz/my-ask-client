import React from "react";
import { useRouter } from "next/router";

// Mui
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";

const MainBanner = () => {
  // hooks
  const router = useRouter();

  return (
    <Grid sx={{ bgcolor: "primary.main", height: 400 }}>
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Grid
          container
          sx={{ px: 5, height: "100%", justifyContent: "space-between" }}
        >
          <Grid item md={3} sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography variant="h1" component="h6">
                Welcome to My Ask
              </Typography>
              <Typography variant="h5" sx={{ my: 2 }}>
                Duis dapibus aliquam mi, eget euismod sem scelerisque ut.
                Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae
                velit in neque dictum blandit. Proin in iaculis neque
              </Typography>
              <Box display="flex" gap={1} my={2}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "secondary.main",
                    boxShadow: 0,
                    color: "white",
                    width: 120,
                    ":hover": {
                      bgcolor: "grey.800",
                      boxShadow: 0,
                    },
                  }}
                >
                  About Us
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "secondary.main",
                    boxShadow: 0,
                    color: "white",
                    width: 120,
                    ":hover": {
                      bgcolor: "grey.800",
                      boxShadow: 0,
                    },
                  }}
                  onClick={() => router.push("/auth/login")}
                >
                  Join Now
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item md={8} position="relative">
            <Box
              sx={{
                backgroundImage: "url(chrome.png)",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                width: "100%",
                height: "100%",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bgcolor: "primary.light",
                top: 120,
                left: 20,
                right: 20,
                bottom: 20,
              }}
            >
              <TextareaAutosize
                placeholder="Ask a question and you will be sure to find an answer"
                style={{
                  backgroundColor: "transparent",
                  width: "100%",
                  height: "100%",
                  padding: 10,
                  border: 0,
                  outline: 0,
                }}
              />
              <Box position="absolute" sx={{ bottom: 10, right: 10 }}>
                <Button
                  variant="contained"
                  sx={{ color: "common.white", boxShadow: 0 }}
                >
                  Ask Now
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default MainBanner;
