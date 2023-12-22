import React from "react";

// Mui
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";

// Icons
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaStar } from "react-icons/fa";

// tags data
const tags = [
  {
    id: 1,
    name: "Javascript",
  },
  {
    id: 2,
    name: "Programmer",
  },
  {
    id: 2,
    name: "Redux",
  },
];

const QuestionCard = () => {
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
      <Grid container item md={1} sx={{ alignItems: "center" }}>
        <Avatar />
      </Grid>
      <Grid container item md={11} sx={{ alignItems: "center" }}>
        <Grid item md={10}>
          <Box>
            <Typography variant="h2" color="secondary.main">
              How much do web developers earn? What is their salary?
            </Typography>
          </Box>
        </Grid>
        <Grid container item md={2} sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "inline-flex",
              bgcolor: "primary.main",
              py: 0.1,
              px: 1,
              alignItems: "center",
              width: "fit-content",
            }}
          >
            <MdOutlineQuestionMark style={{ color: "white" }} />
            <Typography variant="h6" fontSize={12}>
              Question
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              bgcolor: "secondary.main",
              color: "common.white",
              boxShadow: 0,
              p: 0.1,
            }}
          >
            Report
          </Button>
        </Grid>
        <Grid
          item
          md={12}
          sx={{ py: 4, borderBottom: 1, borderColor: "grey.300" }}
        >
          <Typography variant="caption" fontSize={16}>
            I am thinking of pursuing web developing as a career & was just
            wondering. I’ve heard that that location is a big factor when it
            comes to salary of web developers. Kindly state: 1) Country 2)
            Salary Monthly/Yearly 3) Years of experience. P.s) You can...
          </Typography>
        </Grid>
        <Grid container item md={12} sx={{ mt: 2, gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <FaStar style={{ color: "yellow" }} />
            <Typography>12</Typography>
          </Box>
          <Box display="flex" gap={1}>
            {tags.map((tab) => (
              <Box
                bgcolor="secondary.main"
                sx={{
                  p: 0.5,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">{tab.name}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuestionCard;
