import React from "react";

// Mui
import { Box, Button, Grid, Typography } from "@mui/material";

// Icons
import { BiSolidImage } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

const BlogCard = () => {
  return (
    <Box
      sx={{
        my: 6,
        bgcolor: "common.white",
        borderRadius: 1,
        boxShadow: 1,
        p: 4,
      }}
    >
      <Box sx={{ width: "100%", height: 600 }}>
        <img
          width="100%"
          height="100%"
          src="https://2code.info/demo/themes/ask-me/wp-content/uploads/2017/07/blog-2-806x440.png"
        />
      </Box>
      <Box sx={{ mt: 3, pb: 2, borderBottom: 1, borderColor: "grey.400" }}>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Box sx={{ bgcolor: "primary.main", display: "inline-flex", p: 1 }}>
            <BiSolidImage />
          </Box>
          <Typography
            variant="h3"
            sx={{
              color: "primary.main",
            }}
          >
            Introducing Keyboard Shortcuts, our first Labs feature
          </Typography>
        </Box>
      </Box>
      <Grid container my={1} gap={3}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            ":hover": {
              color: "primary.main",
            },
          }}
        >
          <FaUserAlt />
          <Typography variant="h5" color="secondary.main">
            Araz Rezapour
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            color="common.white"
            sx={{ p: 0.5, bgcolor: "success.main" }}
          >
            ٍExplainer
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            ":hover": {
              color: "primary.main",
            },
          }}
        >
          <FaCalendar />
          <Typography variant="h5" color="secondary.main">
            July 21, 2023
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            ":hover": {
              color: "primary.main",
            },
          }}
        >
          <FaComments />
          <Typography variant="h5" color="secondary.main">
            2 comments
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            ":hover": {
              color: "primary.main",
            },
          }}
        >
          <FaEye />
          <Typography variant="h5" color="secondary.main">
            2234 views
          </Typography>
        </Box>
      </Grid>
      <Box sx={{ my: 3 }}>
        <Typography
          variant="body2"
          sx={{ textOverflow: "ellipsis", overflow: "hidden", height: 50 }}
        >
          We want to make it easier to learn more about a question and highlight
          key facts about it — such as how popular the question is, how many
          people are interested in it, and who the audience is. To accomplish
          ...
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{ width: 200, color: "common.white", boxShadow: 0 }}
        >
          Continue reading
        </Button>
      </Box>
    </Box>
  );
};

export default BlogCard;
