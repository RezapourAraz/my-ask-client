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
import { useRouter } from "next/router";
import { useAppSelector } from "@/lib/redux.hooks";
import { useTranslation } from "next-i18next";
import { getCookie } from "cookies-next";

const TopHeader = ({ user }: any) => {
  // hooks
  const router = useRouter();
  const { t } = useTranslation();

  console.log(user);

  return (
    <TopHeaderContainer sx={{ display: { xs: "none", md: "block" } }}>
      <Container maxWidth="xl">
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            px: 5,
          }}
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

              <Typography
                className="black"
                variant="h6"
                onClick={() => router.push(user ? `/profile` : "/auth/login")}
              >
                {user ? user.username : t("login_area")}
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
              <Typography
                className="black"
                variant="h6"
                onClick={() => router.push("/add-post")}
              >
                {t("add_post")}
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
              <Typography
                className="black"
                variant="h6"
                onClick={() => router.push("/badges-and-points")}
              >
                {t("badges")}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={2} container>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <FaSearch style={{ color: "white" }} />
              <Input fullWidth placeholder={t("search_here")} />
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
