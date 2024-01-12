import React, { useState } from "react";

// Mui
import { Box, Button, Typography } from "@mui/material";

// icons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { voteQuestion } from "@/redux/questions/question.services";

const VoteCard = ({
  rating,
  questionId,
  user,
}: {
  rating: any;
  questionId: any;
  user: any;
}) => {
  // states
  const [newRating, setNewRating] = useState(rating);

  // handlers
  const sendVote = async (arg: string) => {
    if (arg === "plus") {
      setNewRating(newRating + 1);
    } else if (arg === "minus") {
      setNewRating(newRating - 1);
    }

    const data = await voteQuestion({
      user,
      body: { rating: newRating, questionId },
    });

    if (data.code === 200) {
      //   setNewRating(data.data.rating);
    }
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box>
        <Button onClick={() => sendVote("plus")}>
          <IoIosArrowUp />
        </Button>
      </Box>
      <Box>
        <Typography variant="h5" color="grey.800">
          {newRating}
        </Typography>
      </Box>
      <Box>
        <Button onClick={() => sendVote("minus")}>
          <IoIosArrowDown />
        </Button>
      </Box>
    </Box>
  );
};

export default VoteCard;
