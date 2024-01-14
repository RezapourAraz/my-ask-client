import {
  Avatar,
  Box,
  Button,
  Grid,
  Icon,
  IconButton,
  Input,
  NoSsr,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

// Icons
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { IoFlag } from "react-icons/io5";
import { TbArrowBackUp } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import { pointMaker } from "@/helper/pointMaker";
import VoteCard from "./Vote.cards";
import { getCookie } from "cookies-next";
import { reportService } from "@/redux/vote/vote.services";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const AnswerCard = ({ answer }: any) => {
  // hooks
  const userData = getCookie("user");
  const user = userData ? JSON.parse(userData) : null;
  const { t } = useTranslation();
  // state
  const userPoints = pointMaker(answer.reputation ? answer.reputation : 0);
  const [openReport, setOpenReport] = useState(false);
  const [content, setContent] = useState("");

  // handler
  const handleReport = async () => {
    const body = {
      userId: user.id,
      relId: answer.id,
      relType: "answer",
      content,
    };

    const data = await reportService({ user, body });

    console.log(data);

    if (data?.code === 201) {
      setOpenReport(false);
      toast.success(t("thanks_report"));
    }
  };

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
          rating={answer.vote}
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
        <Grid item md={3} container justifyContent="flex-end">
          <Button
            size="small"
            variant="text"
            startIcon={<IoFlag style={{ margin: "0 0 0 5px" }} />}
            onClick={() => setOpenReport(true)}
          >
            Report
          </Button>
          <Button
            size="small"
            variant="text"
            startIcon={<TbArrowBackUp style={{ margin: "0 0 0 5px" }} />}
          >
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
        {openReport && (
          <Box sx={{ my: 1, width: "100%" }}>
            <Box>
              <Typography variant="caption">{t("report_question")}</Typography>
            </Box>
            <Box my={1}>
              <Input
                fullWidth
                sx={{ bgcolor: "grey.300", px: 1, color: "grey.800" }}
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                variant="contained"
                sx={{ color: "common.white", boxShadow: 0 }}
                onClick={handleReport}
              >
                {t("report")}
              </Button>
              <Button onClick={() => setOpenReport(false)}>
                {t("cancel")}
              </Button>
            </Box>
          </Box>
        )}
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
