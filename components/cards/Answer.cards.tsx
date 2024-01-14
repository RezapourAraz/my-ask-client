import {
  Avatar,
  Box,
  Button,
  Grid,
  Icon,
  IconButton,
  NoSsr,
  Typography,
} from "@mui/material";
import React from "react";

// Icons
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { IoFlag } from "react-icons/io5";
import { TbArrowBackUp } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import { pointMaker } from "@/helper/pointMaker";
import VoteCard from "./Vote.cards";
import { getCookie } from "cookies-next";

const AnswerCard = ({ answer }: any) => {
  // hooks
  const userData = getCookie("user");
  const user = userData ? JSON.parse(userData) : null;
  // state
  const userPoints = pointMaker(answer.reputation ? answer.reputation : 0);

  console.log(answer);

  return (
    <Grid
      container
      sx={{
        mt: 2,
        bgcolor: "common.white",
        borderBottom: 1,
        borderColor: "grey.300",
      }}
    >
      <Grid item md={1} container sx={{ justifyContent: "center" }}>
        <Avatar
          src={answer.profile}
          sx={{ bgcolor: "primary.main", color: "common.white" }}
        />
        <VoteCard
          user={user}
          relId={answer.id}
          relName="answer"
          rating={answer.rating}
        />
      </Grid>
      <Grid container item md={11}>
        <Grid item md={9}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography variant="h3" color="secondary.main">
              {answer.username}
            </Typography>
            <Typography
              variant="caption"
              component="span"
              bgcolor={userPoints?.color}
              color="common.white"
              sx={{ px: 0.5, borderRadius: 1 }}
            >
              {userPoints?.name}
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
              <Typography variant="caption">{answer.rating}</Typography>
            </Box>
            <Box>
              <Typography variant="caption">
                {new Date(answer.updated_at).toLocaleString("en-US")}
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
          <NoSsr>
            <Typography
              my={2}
              dangerouslySetInnerHTML={{
                __html: answer.content,
              }}
            />
          </NoSsr>
        </Grid>
        {/* <Grid item md={12} my={3}>
          <Typography variant="body2">{answer.content}</Typography>
        </Grid> */}
        <Grid item md={12} sx={{ mb: 2 }}>
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
