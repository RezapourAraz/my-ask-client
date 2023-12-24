import React, { Dispatch, FC, SetStateAction } from "react";

// Mui
import { Box, Grid, Pagination, Typography } from "@mui/material";
import RecentQuestionsSection from "../sections/RecentQuestions.sections";

// tabs data
const tabs = [
  {
    id: 1,
    name: "Recent Questions",
    value: "recentQuestions",
  },
  {
    id: 2,
    name: "Most Answered",
    value: "mostAnswered",
  },
  {
    id: 3,
    name: "Answers",
    value: "answers",
  },
  {
    id: 4,
    name: "No Answers",
    value: "noAnswers",
  },
  {
    id: 5,
    name: "Most Visited",
    value: "mostVisited",
  },
];

// Types
type IMainTabProps = {
  selectedTab: string;
  setSelectedTab: Dispatch<SetStateAction<string>>;
};

const MainTab: FC<IMainTabProps> = ({ selectedTab, setSelectedTab }) => {
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
              p: 1.5,
              bgcolor: tab.value === selectedTab ? "primary.main" : "initial",
              cursor: "pointer",
            }}
            onClick={() => setSelectedTab(tab.value)}
          >
            <Typography
              variant="h4"
              color={
                tab.value === selectedTab ? "common.white" : "secondary.main"
              }
            >
              {tab.name}
            </Typography>
          </Box>
        ))}
      </Grid>
      {selectedTab === "recentQuestions" && <RecentQuestionsSection />}
      {selectedTab === "mostAnswered" && <RecentQuestionsSection />}
      {selectedTab === "answers" && <RecentQuestionsSection />}
      {selectedTab === "noAnswers" && <RecentQuestionsSection />}
      {selectedTab === "mostVisited" && <RecentQuestionsSection />}
      <Grid container sx={{ justifyContent: "flex-end", my: 5 }}>
        <Pagination
          count={2}
          variant="text"
          shape="rounded"
          color="primary"
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
            },
          }}
        />
      </Grid>
    </Box>
  );
};

export default MainTab;
