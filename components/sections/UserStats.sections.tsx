import React from "react";
import { useTranslation } from "next-i18next";

// Mui
import { Box, Grid, Typography } from "@mui/material";

// Icons
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { FaPoll } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const data = [
  {
    id: 1,
    name: "questions",
    icon: <BsFillQuestionSquareFill />,
  },
  {
    id: 2,
    name: "answers",
    icon: <RiQuestionAnswerFill />,
  },
  {
    id: 3,
    name: "polls",
    icon: <FaPoll />,
  },
  {
    id: 4,
    name: "best_answers",
    icon: <FaStarOfLife />,
  },
  {
    id: 6,
    name: "points",
    icon: <FaHeart />,
  },
  {
    id: 7,
    name: "blogs",
    icon: <IoIosDocument />,
  },
  {
    id: 8,
    name: "comments",
    icon: <FaComment />,
  },
  {
    id: 9,
    name: "followers",
    icon: <FaUser />,
  },
];

const UserStatsSection = ({ user }: any) => {
  // hooks
  const { t } = useTranslation();

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
      <Grid item md={12}>
        <Typography
          variant="h5"
          sx={{
            color: "primary.main",
            pb: 2,
            borderBottom: 2,
            borderColor: "grey.300",
          }}
        >
          User Stats
        </Typography>
      </Grid>
      <Grid item container md={12} sx={{ justifyContent: "space-between" }}>
        {data.map((item) => (
          <Grid item md={5.5}>
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
              {item.icon}
              <Typography>
                {t(`${item.name}`)}(
                {`${
                  user[item.name + "Count"]
                    ? user[item.name + "Count"]
                    : item.name === "points"
                    ? user.reputation
                      ? user.reputation
                      : 0
                    : 0
                }`}
                )
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default UserStatsSection;
