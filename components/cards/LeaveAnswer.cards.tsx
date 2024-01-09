import React, { useState } from "react";

// Mui
import { Box, Button, Grid, Input, Typography } from "@mui/material";
import TextEditorInput from "../inputs/TextEditor.inputs";
import { useRouter } from "next/router";
import { addQuestionAnswer } from "@/redux/answers/answers.services";
import { getCookie, getCookies } from "cookies-next";

const LeaveAnswerCard = () => {
  // hooks
  const { query } = useRouter();
  const userCookie: any = getCookie("user");

  const user = userCookie && JSON.parse(userCookie);

  // states
  // @ts-ignore
  const questionId = query?.slug.split("-")[0];
  const [content, setContent] = useState<string>("");

  const handleChangeText = (e: any) => {
    setContent(e);
  };

  const handleAnswer = async () => {
    const body = {
      content,
      questionId: Number(questionId),
      userId: user?.id,
    };

    const data = await addQuestionAnswer({ user, body });
  };

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
          <TextEditorInput
            value={content}
            onChange={(e: any) => handleChangeText(e)}
          />
        </Grid>
        <Grid md={12} my={2}>
          <Button
            variant="contained"
            fullWidth
            sx={{ color: "common.white" }}
            onClick={handleAnswer}
          >
            Post Your Answer
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LeaveAnswerCard;
