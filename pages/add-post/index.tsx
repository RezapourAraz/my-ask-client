import React from "react";

// components
import MainLayout from "@/components/layout/Main.layout";
import MainSidebar from "@/components/sidebars/Main.sidebars";

// Mui
import { Box, Button, Grid, Input } from "@mui/material";
import AddPostSection from "@/components/sections/AddPost.sections";
import Head from "next/head";

const AddPost = () => {
  return (
    <>
      <Head>
        <title>Add Post</title>
        <meta name="description" content="Travel App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout sidebar={<MainSidebar />}>
        <AddPostSection />
      </MainLayout>
    </>
  );
};

export default AddPost;
