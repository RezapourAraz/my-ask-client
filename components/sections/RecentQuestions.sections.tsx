import React, { FC } from "react";
import QuestionCard from "../cards/Question.cards";
import { Pagination } from "@mui/material";

type IRecentQuestionsSectionProps = {
  data: any;
};

const RecentQuestionsSection: FC<IRecentQuestionsSectionProps> = ({ data }) => {

  return (
    <>
      {data.map((question: any) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </>
  );
};

export default RecentQuestionsSection;
