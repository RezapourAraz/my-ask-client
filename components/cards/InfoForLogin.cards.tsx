import React from "react";

// Mui
import { Box, Typography } from "@mui/material";

// icons
import { CgDanger } from "react-icons/cg";

const InfoForLoginCard = () => {
  return (
    <Box
      sx={{
        my: 6,
        bgcolor: "primary.main",
        borderRadius: 1,
        p: 1,
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Box sx={{ p: 1, bgcolor: "red", borderRadius: 1, display: "flex" }}>
        <CgDanger style={{ color: "white", fontSize: 20 }} />
      </Box>
      <Typography variant="h5">
        You must login your account for ask question
      </Typography>
    </Box>
  );
};

export default InfoForLoginCard;
