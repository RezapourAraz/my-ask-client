import {
  Avatar,
  Box,
  Button,
  Grid,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

// Icons
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { IoFlag } from "react-icons/io5";
import { TbArrowBackUp } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";

const AnswerCard = () => {
  return (
    <Grid
      container
      sx={{
        p: 2,
        bgcolor: "common.white",
        borderBottom: 1,
        borderColor: "grey.300",
      }}
    >
      <Grid item md={1}>
        <Avatar />
      </Grid>
      <Grid container item md={11}>
        <Grid item md={9}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography variant="h3" color="secondary.main">
              Araz Rezapour
            </Typography>
            <Typography
              variant="caption"
              component="span"
              bgcolor="success.main"
              color="common.white"
              sx={{ px: 0.5, borderRadius: 1 }}
            >
              Explainer
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton size="small">
                <AiFillLike style={{ color: "black", fontSize: 14 }} />
              </IconButton>
              <IconButton size="small">
                <AiFillDislike style={{ color: "black", fontSize: 14 }} />
              </IconButton>
              <Typography variant="caption">59</Typography>
            </Box>
            <Box>
              <Typography variant="caption">
                {new Date().toLocaleDateString("en-US")}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={2} container justifyContent="flex-end">
          <Button size="small" startIcon={<IoFlag />}>
            Report
          </Button>
          <Button size="small" startIcon={<TbArrowBackUp />}>
            Replay
          </Button>
        </Grid>
        <Grid item md={12} my={3}>
          <Typography variant="body2">
            Back-End Developers concentrate on what goes on behind the scenes of
            a website. These are the people who build the databases that host
            the site’s content and implement the technologies that runs its
            search and e-commerce capabilities. Focused more on the website’s
            responsiveness and speed than what its pages look like, they’re
            skilled in languages such as Python and PHP, and frameworks like
            Django and Ruby on Rails. Their pay ranges from $43,000 to $116,000,
            PayScale says, with a median of $75,000.
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Typography
            variant="h5"
            color="success.main"
            sx={{ display: "flex ", alignItems: "center", gap: 0.5 }}
          >
            <FaCheck />
            Best Answer
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AnswerCard;
