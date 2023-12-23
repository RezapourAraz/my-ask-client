import React from "react";

// Mui
import { Box, Button, Grid, Input, Typography } from "@mui/material";
import TextEditorInput from "../inputs/TextEditor.inputs";

const LeaveAnswerCard = () => {
  return (
    <Grid
      sx={{
        mt: 6,
        p: 2,
        bgcolor: "common.white",
        boxShadow: 1,
        borderRadius: 1,
      }}
    >
      <Box sx={{ pb: 2, borderBottom: 2, borderColor: "grey.300" }}>
        <Typography variant="h3" color="primary.main">
          Leave An Answer
        </Typography>
      </Box>
      <Grid container mt={2}>
        <Grid md={12}>
          <TextEditorInput value={""} onChange={() => {}} />
        </Grid>
        <Grid md={12} my={2}>
          <Button variant="contained" fullWidth sx={{ color: "common.white" }}>
            Post Your Answer
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LeaveAnswerCard;
