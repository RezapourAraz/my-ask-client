import React from "react";

// Mui
import { Box, Button, Typography } from "@mui/material";

// icons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const VoteCard = ({ rating }: { rating: number }) => {
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
        <Button>
          <IoIosArrowUp />
        </Button>
      </Box>
      <Box>
        <Typography variant="h5" color="grey.800">
          {rating}
        </Typography>
      </Box>
      <Box>
        <Button>
          <IoIosArrowDown />
        </Button>
      </Box>
    </Box>
  );
};

export default VoteCard;
