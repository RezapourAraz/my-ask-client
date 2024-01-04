import React, { FC } from "react";

// Mui
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";

// Icons
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "next-i18next";

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
    id: 3,
    name: "Redux",
  },
];

type IQuestionCard = {
  question: any;
};

const QuestionCard: FC<IQuestionCard> = ({ question }) => {
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
      <Grid container item md={1} sx={{ alignItems: "center" }}>
        <Avatar />
      </Grid>
      <Grid container item md={11} sx={{ alignItems: "center" }}>
        <Grid item md={10}>
          <Link href="/questions/1" style={{ textDecoration: "none" }}>
            <Typography variant="h2" color="secondary.main">
              {question.title}
            </Typography>
          </Link>
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
            {/* <MdOutlineQuestionMark style={{ color: "white" }} /> */}
            <Typography variant="h6" fontSize={12}>
              {t("question")}
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
            {t("report")}
          </Button>
        </Grid>
        <Grid
          item
          md={12}
          sx={{ py: 4, borderBottom: 1, borderColor: "grey.300" }}
        >
          <Typography variant="caption" fontSize={16}>
            {question.content}
          </Typography>
        </Grid>
        <Grid container item md={12} sx={{ mt: 2, gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <FaStar style={{ color: "yellow" }} />
            <Typography>{question.rating}</Typography>
          </Box>
          <Box display="flex" gap={1}>
            {question.tags.map((tag: any) => (
              <Box
                key={tag.tagId}
                bgcolor="secondary.main"
                sx={{
                  p: 0.5,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">{tag.tagTitle}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuestionCard;
