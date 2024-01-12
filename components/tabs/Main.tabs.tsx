import React, { Dispatch, FC, SetStateAction, useState } from "react";

// Mui
import { Box, Grid, Pagination, Typography } from "@mui/material";
import RecentQuestionsSection from "../sections/RecentQuestions.sections";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";

// tabs data
const tabs = [
  {
    id: 1,
    name: "recent_questions",
    value: "recent",
  },
  {
    id: 3,
    name: "answers",
    value: "answers",
  },
  {
    id: 4,
    name: "no_answers",
    value: "no-answers",
  },
  {
    id: 5,
    name: "most_visited",
    value: "visited",
  },
];

// Types
type IMainTabProps = {
  selectedTab: string;
  setSelectedTab: Dispatch<SetStateAction<string>>;
  data: any;
};

const MainTab: FC<IMainTabProps> = ({ selectedTab, setSelectedTab, data }) => {
  // hooks
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const { replace, pathname, locale } = useRouter();

  // handlers
  const handleChangePagination = (value: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", String(value));
    params.set("limit", String(10));

    replace(`${pathname}?${params.toString()}`);
  };

  const handleChangeTab = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === "recent") params.set("filter", "recent");
    if (value === "most") params.set("filter", "most");
    if (value === "answers") params.set("filter", "answers");
    if (value === "no-answers") params.set("filter", "no-answers");
    if (value === "visited") params.set("filter", "visited");
    params.set("page", String(1));

    replace(`${pathname}?${params.toString()}`);
    setSelectedTab(value);
  };

  return (
    <Box>
      <Grid
        container
        sx={{ my: 5, borderBottom: 2, borderColor: "primary.main" }}
      >
        {tabs.map((tab) => (
          <Box
            key={tab.id}
            sx={{
              p: { xs: 0.5, md: 1.5 },
              bgcolor: tab.value === selectedTab ? "primary.main" : "initial",
              cursor: "pointer",
            }}
            onClick={() => handleChangeTab(tab.value)}
          >
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: 14, md: 18 } }}
              color={
                tab.value === selectedTab ? "common.white" : "secondary.main"
              }
            >
              {t(`${tab.name}`)}
            </Typography>
          </Box>
        ))}
      </Grid>

      <RecentQuestionsSection data={data.data} />

      {data.count / data.pageSize > 1 && (
        <Grid
          container
          sx={{
            justifyContent: "flex-end",
            my: 5,
          }}
        >
          <Pagination
            count={Math.ceil(data.count / data.pageSize)}
            variant="text"
            shape="rounded"
            color="primary"
            onChange={(event, value) => handleChangePagination(value)}
            sx={{
              ".MuiPaginationItem-page": {
                bgcolor: "grey.500",
                color: "common.black",
              },
              ".Mui-selected": {
                bgcolor: "primary.main",
                color: "common.white",
              },
              ".MuiPaginationItem-previousNext": {
                bgcolor: "grey.500",
                color: "common.black",
                rotate: locale === "fa" ? "180deg" : "initial",
              },
            }}
          />
        </Grid>
      )}
    </Box>
  );
};

export default MainTab;
