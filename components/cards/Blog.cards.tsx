import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Mui
import { Box, Button, Grid, Typography } from "@mui/material";

// Icons
import { BiSolidImage } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

const BlogCard = ({ blog }: any) => {
  // hooks
  const router = useRouter();

  console.log(blog);

  return (
    <Box
      sx={{
        my: 6,
        bgcolor: "common.white",
        borderRadius: 1,
        boxShadow: 1,
        p: 4,
      }}
    >
      <Box sx={{ width: "100%", height: 600 }}>
        <img
          width="100%"
          height="100%"
          src="https://2code.info/demo/themes/ask-me/wp-content/uploads/2017/07/blog-2-806x440.png"
        />
      </Box>
      <Box sx={{ mt: 3, pb: 2, borderBottom: 1, borderColor: "grey.400" }}>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Box sx={{ bgcolor: "primary.main", display: "inline-flex", p: 1 }}>
            <BiSolidImage />
          </Box>
          <Link href="/blogs/1" style={{ textDecoration: "none" }}>
            <Typography
              variant="h3"
              sx={{
                color: "primary.main",
                transition: "color .2s ease-in-out",
                cursor: "pointer",
                ":hover": {
                  color: "secondary.main",
                },
              }}
            >
              {blog.title}
            </Typography>
          </Link>
        </Box>
      </Box>
      <Grid container my={1} gap={3}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            ":hover": {
              color: "primary.main",
            },
          }}
        >
          <FaUserAlt />
          <Typography variant="h5" color="secondary.main">
            Araz Rezapour
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            color="common.white"
            sx={{ p: 0.5, bgcolor: "success.main" }}
          >
            Explainer
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            ":hover": {
              color: "primary.main",
            },
          }}
        >
          <FaCalendar />
          <Typography variant="h6" color="secondary.main">
            {new Date(blog.created_at).toLocaleDateString()}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            ":hover": {
              color: "primary.main",
            },
          }}
        >
          <FaComments />
          <Typography variant="h5" color="secondary.main">
            2 comments
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            ":hover": {
              color: "primary.main",
            },
          }}
        >
          <FaEye />
          <Typography variant="h5" color="secondary.main">
            {blog.views} views
          </Typography>
        </Box>
      </Grid>
      <Box sx={{ my: 3 }}>
        <Typography
          variant="body2"
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            height: router.query.blogId ? "fit-content" : 50,
          }}
        >
          {router.query.blogId
            ? "We want to make it easier to learn more about a question and highlight key facts about it — such as how popular the question is, how many people are interested in it, and who the audience is. To accomplish that, today we’re introducing Question Overview, a new section on the question page that will make it easier to find the most important information about a question and its audience. Question Overview includes all of the information from the old Stats section, as well as new facts such as individual question followers you may be interested in (e.g. people you follow or other notable users), recent views on the question, or if the question is Most Wanted in a topic. We have lots of ideas for ways to make the Quora product and experience better. But we also value keeping our simple so everyone can focus on the most important features. Today we’re introducing Labs*, a new way we can bring features we haven’t chosen to introduce broadly as an option for you to try out. We hope that the products we build for Labs will make your Quora experience more enjoyable. Without further ado, our first ever Labs feature is: Keyboard Shortcuts! You will be able to navigate and take actions on Discuss awesome features on the web without ever lifting your fingers off your keyboard. To get started, go to your Settings page and click on the Labs tab. Keeping quality high is Disuss’s number one priority as we work to achieve our mission. In the coming weeks and months, we’ll be making major changes to strengthen quality. These changes will reward great questions and answers with better ranking and distribution and marginalize mediocre and low-quality answers. In other words: high-quality answers and useful knowledge shared will reach and help more people. Today, we’ve published a new in-depth answer that describes what quality means on Quora, and what it means to be helpful. What a helpful answer looks like. In summary, helpful and high-quality answers."
            : blog.content}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{ width: 200, color: "common.white", boxShadow: 0 }}
        >
          Continue reading
        </Button>
      </Box>
    </Box>
  );
};

export default BlogCard;
