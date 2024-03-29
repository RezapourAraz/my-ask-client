import React from "react";

// Mui
import { Box, Button, Grid, Input, Typography, styled } from "@mui/material";
import { useTranslation } from "next-i18next";
import TextEditorInput from "../inputs/TextEditor.inputs";
import { useBlogForm } from "@/lib/formik.hooks";
import { addBlog } from "@/redux/blogs/blogss.services";
import { useRouter } from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";

const AddPostSection = ({ user }: { user: any }) => {
  // hooks
  const { t } = useTranslation();
  const router = useRouter();

  // states
  const [attachment, setAttachment] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);

  // handler
  const submitHandler = async () => {
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("title", values.title);
      formData.append("content", values.content);
      formData.append("userId", user.id);

      if (attachment) {
        formData.append("thumbnail", attachment);
      }

      const data = await addBlog({ user, body: formData });

      if (data.code === 201) {
        setLoading(false);
        setFieldValue("title", "");
        setFieldValue("content", "");
        setAttachment(null);

        router.push("/blogs");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleFileChange = (e: any) => {
    setAttachment(e.target.files[0]);
  };

  const { errors, values, handleChange, handleSubmit, setFieldValue } =
    useBlogForm(submitHandler);

  return (
    <Box sx={{ px: 2 }}>
      <Grid sx={{ my: 6, p: 2, bgcolor: "common.white" }}>
        <Box sx={{ pb: 2, borderBottom: 2, borderColor: "grey.300" }}>
          <Typography variant="h3" color="primary.main">
            {t("add_post")}
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
              {t("post_title")}{" "}
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
              name="title"
              sx={{ bgcolor: "grey.300", color: "grey.900", px: 1 }}
              fullWidth
              value={values.title}
              onChange={handleChange}
            />
            {/* <Typography variant="h6" color="secondary.main">
              {t("enter_post_title")}
            </Typography> */}
          </Grid>
          <Grid my={1} item md={2} container alignItems="center">
            <Typography variant="subtitle2">
              {t("thumbnail")}{" "}
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
            <Button
              component="label"
              variant="contained"
              sx={{
                width: "100%",
                p: 2.2,
                bgcolor: "grey.300",
                boxShadow: 0,
                ":hover": { bgcolor: "grey.300", boxShadow: 0 },
              }}
            >
              <VisuallyHiddenInput
                type="file"
                name="thumbnail"
                onChange={handleFileChange}
              />
            </Button>
          </Grid>
          <Grid my={1} item md={2} container alignItems="center">
            <Typography variant="subtitle2">
              {t("content")}{" "}
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
          </Grid>
          <Grid
            md={12}
            my={3}
            sx={{ ".Mui-disabled": { bgcolor: "grey.800" } }}
          >
            <LoadingButton
              variant="contained"
              fullWidth
              type="submit"
              sx={{ boxShadow: 0, color: "common.white" }}
              loading={loading}
            >
              {t("publish_blog")}
            </LoadingButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default AddPostSection;
