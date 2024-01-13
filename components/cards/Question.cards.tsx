import React, { FC, useEffect, useState } from "react";

// Mui
import {
  Avatar,
  Box,
  Button,
  Grid,
  Input,
  NoSsr,
  Typography,
} from "@mui/material";

// Icons
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import Link from "next/link";
import { useTranslation } from "next-i18next";
import VoteCard from "./Vote.cards";
import { getCookie, getCookies } from "cookies-next";
import { useRouter } from "next/router";

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
  const { query } = useRouter();

  const userData = getCookie("user");
  const user = userData ? JSON.parse(userData) : null;

  const link = `/questions/${question.id} ${question.title}`.replace(/ /g, "-");
  const { slug } = query;
  // @ts-ignore
  const id = slug ? slug.split("-")[0] : undefined;

  // states
  const [openReport, setOpenReport] = useState(false);

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
      <Grid
        container
        item
        md={1}
        xs={12}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Avatar
          src={question.profile}
          alt={question.username}
          sx={{ bgcolor: "primary.main", color: "common.white" }}
        />
        {id && (
          <VoteCard
            rating={question.vote}
            questionId={question.id}
            user={user}
          />
        )}
      </Grid>
      <Grid container item md={11} xs={12} sx={{ alignItems: "center" }}>
        <Grid container display="inline-flex" wrap="nowrap" gap={2}>
          <Grid
            item
            // md={10} xs={12}
            sx={{ my: { xs: 2, md: 0 } }}
          >
            <Link href={link} style={{ textDecoration: "none" }}>
              <Typography
                variant="h2"
                color="secondary.main"
                sx={{ fontSize: { md: 22, xs: 16 } }}
              >
                {question.title}
              </Typography>
            </Link>
          </Grid>
          <Grid
            container
            item
            // md={2}
            // xs={12}
            sx={{
              display: "inline-flex",
              flexWrap: "nowrap",
              columnGap: 1,
              justifyContent: "space-between",
              marginInlineStart: "auto",
              width: { xs: 150 },
              height: "fit-content",
            }}
          >
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
              <Typography variant="h6" sx={{ fontsize: { xs: 10, md: 14 } }}>
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
                fontSize: { xs: 12, md: 14 },
              }}
              onClick={() => setOpenReport(true)}
            >
              {t("report")}
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          md={12}
          xs={12}
          sx={{
            py: { xs: 2, md: 4 },
            borderBottom: 1,
            borderColor: "grey.300",
          }}
        >
          <NoSsr>
            <Typography
              variant="caption"
              sx={{ fontSize: { md: 14, xs: 10 } }}
              dangerouslySetInnerHTML={{
                __html: question.content,
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
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                variant="contained"
                sx={{ color: "common.white", boxShadow: 0 }}
                onClick={() => setOpenReport(false)}
              >
                {t("report")}
              </Button>
              <Button onClick={() => setOpenReport(false)}>
                {t("cancel")}
              </Button>
            </Box>
          </Box>
        )}
        <Grid container item md={12} xs={12} sx={{ mt: 2, gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <FaStar style={{ color: "yellow" }} />
            <Typography variant="h6" color="common.black">
              {question.rating}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <FaEye />
            <Typography variant="h6" color="common.black">
              {question.views}
            </Typography>
          </Box>
          <Box display="flex" gap={1}>
            {question?.tags?.map((tag: any) => (
              <Box
                key={tag?.tagId}
                bgcolor="secondary.main"
                sx={{
                  p: 0.5,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ textWrap: "nowrap" }}>
                  {tag?.tagTitle}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuestionCard;
