import React, { useState } from "react";

// Mui
import { Box, Button, Typography } from "@mui/material";

// icons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { voteService } from "@/redux/vote/vote.services";
import { toast } from "react-toastify";

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
    if (user) {
      const data = await voteService({
        user,
        body: {
          voteType: arg === "plus" ? 1 : 0,
          relName: "question",
          userId: user?.id,
        },
        relId: questionId,
      });

      if (data?.code === 201) {
        //   setNewRating(data.data.rating);
        if (arg === "plus") {
          setNewRating(newRating + 1);
        } else if (arg === "minus") {
          setNewRating(newRating - 1);
        }
        toast.success(data.message);
      } else {
        toast.error("You vote this question");
      }
    } else {
      toast.error("You must be login");
    }
  };

  return (
    <>
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
    </>
  );
};

export default VoteCard;
