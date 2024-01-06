import React from "react";

// Mui
import { Box, Grid, Typography } from "@mui/material";

// Icons
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { MdMarkChatRead } from "react-icons/md";
import { RiShieldStarFill } from "react-icons/ri";
import { BiSolidUserRectangle } from "react-icons/bi";
import { useTranslation } from "next-i18next";

const StatsCard = ({ stats }: any) => {
  // hooks
  const { t } = useTranslation();

  return (
    <Grid sx={{ p: 2, bgcolor: "common.white", borderRadius: 1, boxShadow: 1 }}>
      <Box sx={{ pb: 2, borderBottom: 2, borderColor: "grey.300" }}>
        <Typography variant="h4" color="primary.main">
          {t("stats")}
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
          <Typography>
            {t("questions")} ({stats.questionsCount})
          </Typography>
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
          <Typography>
            {t("answers")} ({stats.answersCount})
          </Typography>
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
          <Typography>
            {t("users")} ({stats.usersCount})
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default StatsCard;
