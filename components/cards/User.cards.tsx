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

const UserCard = () => {
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
          About Araz Rezapour
        </Typography>
        <Box
          sx={{
            bgcolor: "success.main",
            display: "inline-flex",
            p: 0.5,
            borderRadius: 1,
          }}
        >
          <Typography variant="h6">Explainer</Typography>
        </Box>
      </Grid>
      <Grid item md={1} sx={{ my: 3 }}>
        <Avatar
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
              Registered:
            </Typography>
            <Typography variant="h6" color="grey.900" sx={{ fontSize: 13 }}>
              2023/08/23
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
              Country:
            </Typography>
            <Typography variant="h6" color="grey.900" sx={{ fontSize: 13 }}>
              Iran
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
              Age:
            </Typography>
            <Typography variant="h6" color="grey.900" sx={{ fontSize: 13 }}>
              23
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
              Phone:
            </Typography>
            <Typography variant="h6" color="grey.900" sx={{ fontSize: 13 }}>
              +98 914 436 3473
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
              City:
            </Typography>
            <Typography variant="h6" color="grey.900" sx={{ fontSize: 13 }}>
              Tabriz
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
              Gender:
            </Typography>
            <Typography variant="h6" color="grey.900" sx={{ fontSize: 13 }}>
              Male
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Typography variant="caption">
          Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at
          elit quis urna adipiscing iaculis. Curabitur vitae velit in neque
          dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Curabitur vitae velit in neque dictum blandit.
        </Typography>
      </Grid>
      <Grid item md={12} mt={3}>
        <Button
          variant="contained"
          sx={{ color: "common.white", boxShadow: 0 }}
        >
          Ask Araz Rezapour
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserCard;
