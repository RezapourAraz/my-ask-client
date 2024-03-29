import React from "react";

// Mui
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";

// Icons
import { IoMdAdd } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import { GiWorld } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { pointMaker } from "@/helper/pointMaker";
import { useTranslation } from "next-i18next";

const UserCard = ({ user }: any) => {
  // hooks
  const { t } = useTranslation();

  // state
  const userPoints = pointMaker(user.reputation ? user.reputation : 0);

  return (
    <Grid
      container
      sx={{
        p: 2,
        bgcolor: "common.white",
        borderRadius: 1,
        boxShadow: 1,
        my: 2,
      }}
    >
      <Grid
        item
        md={12}
        sx={{
          pb: 2,
          borderBottom: 2,
          borderColor: "grey.300",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "primary.main",
          }}
        >
          {t("about")} {user.username}
        </Typography>

        <Box
          sx={{
            bgcolor: userPoints?.color,
            display: "inline-flex",
            p: 0.3,
            px: 1,
            borderRadius: 1,
            alignItems: "center",
          }}
        >
          <Typography variant="caption" color="common.white">
            {t(`${userPoints?.name}`)}
          </Typography>
        </Box>
      </Grid>
      <Grid item md={1} sx={{ my: 3 }}>
        <Avatar
          src={user.profile}
          alt={user.username}
          sx={{
            width: 50,
            height: 50,
            bgcolor: "primary.main",
            color: "common.white",
          }}
        />
      </Grid>
      <Grid container item md={11} my={3}>
        <Grid item md={6}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 2 }}>
            <IoMdAdd />
            <Typography
              variant="h6"
              color="grey.900"
              fontWeight="bold"
              sx={{ fontSize: 13 }}
            >
              {t("registered")}:
            </Typography>
            <Typography variant="h6" color="grey.900" sx={{ fontSize: 13 }}>
              {new Date(user.updated_at).toDateString()}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 2 }}>
            <IoLocationSharp />
            <Typography
              variant="h6"
              color="grey.900"
              fontWeight="bold"
              sx={{ fontSize: 13 }}
            >
              {t("country")}:
            </Typography>
            <Typography variant="h6" color="grey.900" sx={{ fontSize: 13 }}>
              {user.country}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 2 }}>
            <IoIosHeart />
            <Typography
              variant="h6"
              color="grey.900"
              fontWeight="bold"
              sx={{ fontSize: 13 }}
            >
              {t("age")}:
            </Typography>
            <Typography variant="h6" color="grey.900" sx={{ fontSize: 13 }}>
              {user.birth}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 2 }}>
            <GiWorld />
            <Typography
              variant="h6"
              color="grey.900"
              fontWeight="bold"
              sx={{ fontSize: 13 }}
            >
              Website:
            </Typography>
            <Typography variant="h6" color="primary.main" sx={{ fontSize: 13 }}>
              View
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 2 }}>
            <FaPhoneAlt />
            <Typography
              variant="h6"
              color="grey.900"
              fontWeight="bold"
              sx={{ fontSize: 13 }}
            >
              {t("phone")}:
            </Typography>
            <Typography variant="h6" color="grey.900" sx={{ fontSize: 13 }}>
              {user.phone}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 2 }}>
            <IoLocationSharp />
            <Typography
              variant="h6"
              color="grey.900"
              fontWeight="bold"
              sx={{ fontSize: 13 }}
            >
              {t("city")}:
            </Typography>
            <Typography variant="h6" color="grey.900" sx={{ fontSize: 13 }}>
              {user.city}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 2 }}>
            <FaUserAlt />
            <Typography
              variant="h6"
              color="grey.900"
              fontWeight="bold"
              sx={{ fontSize: 13 }}
            >
              {t("gender")}:
            </Typography>
            <Typography variant="h6" color="grey.900" sx={{ fontSize: 13 }}>
              {user.gender === 0 ? t("male") : t("female")}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Typography variant="caption">{user.about}</Typography>
      </Grid>
      <Grid item md={12} mt={3}>
        <Button
          variant="contained"
          sx={{ color: "common.white", boxShadow: 0 }}
        >
          {t("ask")} {user.username}
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserCard;
