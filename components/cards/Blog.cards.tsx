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
import { pointMaker } from "@/helper/pointMaker";
import { useTranslation } from "react-i18next";

const BlogCard = ({ blog }: any) => {
  // hooks
  const router = useRouter();
  const { t } = useTranslation();

  const link = `/blogs/${blog.id} ${blog.title}`.replace(/ /g, "-");

  // @ts-ignore
  const blogId = router.query?.slug?.split("-")[0];

  // state
  const userPoints = pointMaker(blog.reputation ? blog.reputation : 0);

  console.log(router.query.blogId);

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
          src={`https://arazdev.storage.iran.liara.space/api/v1/blogs/${blog?.thumbnail}`}
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
              {blog?.title}
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
          <Box>
            <FaUserAlt />
          </Box>
          <Typography variant="h5" color="secondary.main">
            {blog.username}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="caption"
            color="common.white"
            sx={{ p: 0.5, bgcolor: userPoints?.color, borderRadius: 1 }}
          >
            {userPoints?.name}
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
          <Box>
            <FaCalendar />
          </Box>
          <Typography variant="caption" color="secondary.main">
            {new Date(blog?.created_at).toLocaleDateString("fa-IR")}
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
          <Box>
            <FaComments />
          </Box>
          <Typography variant="caption" color="secondary.main">
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
          <Box>
            <FaEye />
          </Box>
          <Typography variant="caption" color="secondary.main">
            {blog?.views} views
          </Typography>
        </Box>
      </Grid>
      <Box
        sx={{
          my: 3,
        }}
      >
        <Typography
          dangerouslySetInnerHTML={{ __html: blog?.content }}
          sx={{
            height: blogId ? "fit-content" : 50,
            textOverflow: blogId ? "initial" : "ellipsis",
            overflow: blogId ? "initial" : "hidden",
            display: "-webkit-box",
            lineClamp: blogId ? 0 : 2,
            WebkitLineClamp: blogId ? 0 : 2,
            WebkitBoxOrient: "vertical",
          }}
        />
      </Box>
      {!blogId && (
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            sx={{ width: 200, color: "common.white", boxShadow: 0 }}
            onClick={() => router.push(link)}
          >
            {t("continue_reading")}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default BlogCard;
