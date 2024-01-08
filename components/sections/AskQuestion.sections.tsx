import React, { useState } from "react";

// Mui
import { Box, Button, Grid, Input, Typography } from "@mui/material";
import TextEditorInput from "../inputs/TextEditor.inputs";
import CustomSelectInput from "../inputs/CustomSelect.inputs";
import MultiSelectInput from "../inputs/CustomSelect.inputs";

const AskQuestionSection = ({ tags }: any) => {
  // states
  const [checkedState, setCheckedState] = useState();

  console.log(tags);

  return (
    <Box sx={{ px: 2 }}>
      <Grid sx={{ my: 6, p: 2, bgcolor: "common.white" }}>
        <Box sx={{ pb: 2, borderBottom: 2, borderColor: "grey.300" }}>
          <Typography variant="h3" color="primary.main">
            Ask Question
          </Typography>
        </Box>
        <Grid container my={2}>
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
            <Input sx={{ bgcolor: "grey.300" }} fullWidth />
            <Typography variant="h6" color="secondary.main" mt={1}>
              Please choose an appropriate title for the Question.
            </Typography>
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
            <TextEditorInput value={""} onChange={() => {}} />
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
            <Button
              fullWidth
              variant="contained"
              sx={{ color: "common.white" }}
            >
              Publish Your Question
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AskQuestionSection;
