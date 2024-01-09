import React, { useState } from "react";

// Mui
import { Box, Button, Grid, Input, Typography } from "@mui/material";
import TextEditorInput from "../inputs/TextEditor.inputs";
import CustomSelectInput from "../inputs/CustomSelect.inputs";
import MultiSelectInput from "../inputs/CustomSelect.inputs";
import LoadingButton from "@mui/lab/LoadingButton";

// yup
import * as yup from "yup";
import { useAskQuestionForm } from "@/lib/formik.hooks";
import { askQuestion } from "@/redux/questions/question.services";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

const AskQuestionSection = ({ tags }: any) => {
  // hooks
  const userCookie: any = getCookie("user");
  const router = useRouter();

  const user = userCookie && JSON.parse(userCookie);

  // states
  const [checkedState, setCheckedState] = useState([]);

  // handlers
  const handleOnSubmit = async (values: any) => {
    let tagsData: string[] = [];
    for (let i = 0; i < checkedState.length; i++) {
      // @ts-ignore
      tagsData.push(checkedState[i]?.id);
    }

    const data = await askQuestion({
      user,
      body: { ...values, tags: tagsData, user_id: user.id },
    });

    if (data.code === 201) {
      router.push("/");
    }
  };

  const {
    handleChange,
    handleSubmit,
    setFieldValue,
    errors,
    values,
    isSubmitting,
  } = useAskQuestionForm(handleOnSubmit);

  return (
    <Box sx={{ px: 2 }}>
      <Grid sx={{ my: 6, p: 2, bgcolor: "common.white" }}>
        <Box sx={{ pb: 2, borderBottom: 2, borderColor: "grey.300" }}>
          <Typography variant="h3" color="primary.main">
            Ask Question
          </Typography>
        </Box>
        <Grid
          container
          my={2}
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Grid my={1} item md={2} container alignItems="center">
            <Typography variant="subtitle2">
              Question Title
              <Typography
                color="primary.main"
                variant="subtitle2"
                component="span"
              >
                *
              </Typography>
            </Typography>
          </Grid>
          <Grid my={1} item md={10}>
            <Input
              sx={{ bgcolor: "grey.300", color: "grey.900", px: 1 }}
              fullWidth
              name="title"
              onChange={handleChange}
              value={values.title}
            />
            {errors.title && (
              <Typography variant="h6" color="secondary.main" mt={1}>
                Please choose an appropriate title for the Question.
              </Typography>
            )}
          </Grid>
          <Grid my={1} item md={2} container alignItems="center">
            <Typography variant="subtitle2">
              Content
              <Typography
                color="primary.main"
                variant="subtitle2"
                component="span"
              >
                *
              </Typography>
            </Typography>
          </Grid>
          <Grid my={1} item md={10}>
            <TextEditorInput
              value={values.content}
              onChange={(value: string) => setFieldValue("content", value)}
            />
            <Typography variant="h6" color="secondary.main" mt={1}>
              Please choose the appropriate section so easily search for your
              post .
            </Typography>
          </Grid>
          <Grid my={1} item md={2} container alignItems="center">
            <Typography variant="subtitle2">Tags</Typography>
          </Grid>
          <Grid my={1} item md={10}>
            <MultiSelectInput
              width="100%"
              inputItems={tags}
              setCheckedState={setCheckedState}
              checkedState={checkedState}
            />
            <Typography variant="h6" color="secondary.main" mt={1}>
              Please choose suitable Keywords Ex : Javascript , Node js
            </Typography>
          </Grid>
          <Grid md={12} my={3}>
            <LoadingButton
              type="submit"
              fullWidth
              loading={isSubmitting}
              variant="contained"
              sx={{
                color: "common.white",
                ".css-62e83j-MuiCircularProgress-root": {
                  color: "primary.main",
                },
              }}
            >
              Publish Your Question
            </LoadingButton>

            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ color: "common.white" }}
            >
              Publish Your Question
            </Button> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AskQuestionSection;
