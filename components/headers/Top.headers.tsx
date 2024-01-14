import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
import { ClickAwayListener } from "@mui/base";

// Icons
import { FaPencilAlt } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

// I18next
import { useTranslation } from "next-i18next";
import { searchServices } from "@/redux/search/search.services";

// loader
import BeatLoader from "react-spinners/BeatLoader";

// components

const TopHeader = ({ user }: any) => {
  // hooks
  const router = useRouter();
  const { t } = useTranslation();

  // states
  const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [result, setResult] = useState<[] | null>();
  const [loading, setLoading] = useState(true);

  // handlers
  const onChangeHandler = (e: any) => {
    setSearchText(e.target.value);
    setOpenSearchBox(true);
    setLoading(true);
  };

  const fetchSearch = async () => {
    const data = await searchServices({ user, q: searchText });
    setResult(data?.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSearch();
  }, [searchText]);

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
          <Grid item md={3} container sx={{ position: "relative" }}>
            <Box sx={{ width: "100%" }}>
              <ClickAwayListener onClickAway={() => setOpenSearchBox(false)}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    width: "100%",
                    justifyContent: "flex-end",
                  }}
                >
                  <FaSearch style={{ color: "white" }} />
                  <Input
                    fullWidth
                    placeholder={t("search_here")}
                    sx={{
                      width: 200,
                      transition: "width .2s ease",
                      ":focus-within": { width: "100%" },
                    }}
                    onChange={onChangeHandler}
                    value={searchText}
                  />

                  {openSearchBox && (
                    <Box
                      sx={{
                        position: "absolute",
                        py: 1.5,
                        px: 1,
                        width: 350,
                        top: 50,
                        left: 0,
                        bgcolor: "common.white",
                        borderRadius: 1,
                        maxHeight: 200,
                        overflowY: "auto",
                      }}
                    >
                      {loading ? (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <BeatLoader size={15} color="#FE7361" />
                        </Box>
                      ) : result && result.length > 0 ? (
                        result?.map((item: any) => (
                          <Box
                            sx={{
                              px: 1,
                              py: 0.5,
                              cursor: "pointer",
                              ":hover": { bgcolor: "primary.light" },
                            }}
                          >
                            <Typography
                              variant="subtitle2"
                              color="primary.main"
                            >
                              {item?.title}
                            </Typography>
                          </Box>
                        ))
                      ) : (
                        t("search_not_found")
                      )}
                    </Box>
                  )}
                </Box>
              </ClickAwayListener>
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
