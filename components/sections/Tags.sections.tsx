import React from "react";

// Mui
import { Box, Button, Grid, Typography } from "@mui/material";

const TagsSection = () => {
  return (
    <Grid
      sx={{
        p: 2,
        bgcolor: "common.white",
        borderRadius: 1,
        boxShadow: 1,
        my: 3,
      }}
    >
      <Box sx={{ pb: 2, borderBottom: 2, borderColor: "grey.300" }}>
        <Typography variant="h4" color="primary.main">
          Tags
        </Typography>
      </Box>
      <Box my={3} gap={1}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "secondary.main",
            m: 0.5,
            fontSize: 12,
            color: "common.white",
            boxShadow: 0,
          }}
        >
          analytics
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "secondary.main",
            m: 0.5,
            fontSize: 12,
            color: "common.white",
            boxShadow: 0,
          }}
        >
          analytics
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "secondary.main",
            m: 0.5,
            fontSize: 12,
            color: "common.white",
            boxShadow: 0,
          }}
        >
          analytics
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "secondary.main",
            m: 0.5,
            fontSize: 12,
            color: "common.white",
            boxShadow: 0,
          }}
        >
          analytics
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "secondary.main",
            m: 0.5,
            fontSize: 12,
            color: "common.white",
            boxShadow: 0,
          }}
        >
          analytics
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "secondary.main",
            m: 0.5,
            fontSize: 12,
            color: "common.white",
            boxShadow: 0,
          }}
        >
          analytics
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "secondary.main",
            m: 0.5,
            fontSize: 12,
            color: "common.white",
            boxShadow: 0,
          }}
        >
          analytics
        </Button>
      </Box>
    </Grid>
  );
};

export default TagsSection;
