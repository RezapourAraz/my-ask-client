import React from "react";

// Mui
import { Box, Grid, Typography } from "@mui/material";

// Icons
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { MdMarkChatRead } from "react-icons/md";
import { RiShieldStarFill } from "react-icons/ri";
import { BiSolidUserRectangle } from "react-icons/bi";

const StatsCard = () => {
  return (
    <Grid sx={{ p: 2, bgcolor: "common.white", borderRadius: 1, boxShadow: 1 }}>
      <Box sx={{ pb: 2, borderBottom: 2, borderColor: "grey.300" }}>
        <Typography variant="h4" color="primary.main">
          Stats
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: 1,
            bgcolor: "grey.300",
            my: 1,
          }}
        >
          <BsFillQuestionSquareFill />
          <Typography>Questions (19)</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: 1,
            bgcolor: "grey.300",
            my: 1,
          }}
        >
          <MdMarkChatRead />
          <Typography>Answers (44)</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: 1,
            bgcolor: "grey.300",
            my: 1,
          }}
        >
          <RiShieldStarFill />
          <Typography>Best Answers (23)</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: 1,
            bgcolor: "grey.300",
            my: 1,
          }}
        >
          <BiSolidUserRectangle />
          <Typography>Users (656)</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default StatsCard;
