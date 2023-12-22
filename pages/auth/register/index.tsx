import React from "react";

// Mui
import {
  Box,
  Button,
  Checkbox,
  Grid,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";

// Icons
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Register = () => {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        bgcolor: "secondary.main",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        sx={{
          width: 400,
          border: 1,
          px: 2,
          py: 5,
          borderRadius: 2,
          borderColor: "grey.400",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2">Create Account</Typography>
        </Box>
        <Grid my={2} sx={{ textAlign: "center" }}>
          <Typography variant="h5">welcome to My Ask</Typography>
        </Grid>
        <Grid my={3}>
          <Input
            sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
            fullWidth
            placeholder="Username*"
            startAdornment={
              <InputAdornment position="start">
                <FaUser />
              </InputAdornment>
            }
          />
        </Grid>
        <Grid my={3}>
          <Input
            sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
            fullWidth
            placeholder="Email*"
            startAdornment={
              <InputAdornment position="start">
                <MdEmail />
              </InputAdornment>
            }
          />
        </Grid>
        <Grid my={3}>
          <Input
            sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
            fullWidth
            placeholder="Password*"
            startAdornment={
              <InputAdornment position="start">
                <RiLockPasswordFill />
              </InputAdornment>
            }
          />
        </Grid>
        <Grid mt={3}>
          <Input
            sx={{ bgcolor: "grey.800", borderRadius: 1, px: 1, py: 0.5 }}
            fullWidth
            placeholder="Confirm Password*"
            type="password"
            startAdornment={
              <InputAdornment position="start">
                <RiLockPasswordFill />
              </InputAdornment>
            }
          />
        </Grid>
        <Grid my={2} container sx={{ alignItems: "center" }}>
          <Typography variant="h6">
            Have an account?{" "}
            <Typography
              variant="h6"
              component="span"
              sx={{ color: "primary.main" }}
            >
              login
            </Typography>
          </Typography>
        </Grid>

        <Grid>
          <Button
            variant="contained"
            fullWidth
            sx={{ boxShadow: 0, color: "common.white" }}
          >
            Signup
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Register;
