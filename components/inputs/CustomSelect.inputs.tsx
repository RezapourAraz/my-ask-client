import React, { useState } from "react";
//Mui Components
import {
  Box,
  Checkbox,
  Chip,
  ClickAwayListener,
  FormControlLabel,
  Grid,
  IconButton,
  InputBase,
  styled,
  Typography,
} from "@mui/material";
//Mui icons
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

//Data
const defaultInputItems = [
  {
    id: 1,
    title: "service 1",
  },
  {
    id: 2,
    title: "service 2",
  },
  {
    id: 3,
    title: "service 3",
  },
];

const MultiSelectInput = ({
  width = 395,
  checkedState,
  setCheckedState,
  inputItems = defaultInputItems,
  disabled = false,
}: any) => {
  //  States
  const [open, setOpen] = useState(false);
  // const [checkedState, setCheckedState] = useState([]);
  //  Handle open function
  const handleOpen = () => {
    if (disabled) {
      setOpen(false);
    } else {
      setOpen(!open);
    }
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box component="div" width={width} sx={{ position: "relative" }}>
        <Select
          onClick={handleOpen}
          minHeight={40}
          sx={{
            borderRadius: "8px",
            justifyContent: "space-between",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {inputItems.map((item: any, idx: any) => (
              <Typography
                fontSize={{ xs: 10, md: 12 }}
                bgcolor="primary.light"
                p={checkedState[item.id] ? 0.5 : 0}
                borderRadius={1}
              >
                {checkedState[item.id] && item.title}
              </Typography>
            ))}
          </Box>
          {open ? (
            <FiChevronDown sx={{ color: "grey.secondary" }} />
          ) : (
            <FiChevronUp sx={{ color: "grey.secondary" }} />
          )}
        </Select>
        {open && (
          <SelectOptionBox
            width={width}
            sx={{
              ".MuiFormControlLabel-root": {
                m: 0,
              },
            }}
          >
            <Grid container sx={{ my: 1 }} flexDirection="column">
              {inputItems.map((item: any, idx: any) => (
                <Grid
                  key={item.id}
                  item
                  xs={12}
                  sx={{
                    ".MuiFormControlLabel-root": {
                      width: "100%",
                      p: 2,
                      display: "flex",
                      flexDirection: "row-reverse",
                      justifyContent: "space-between",
                      backgroundColor: checkedState[item.id]
                        ? "primary.light"
                        : "white",
                    },
                  }}
                >
                  <FormControlLabel
                    sx={{
                      mr: 0,
                    }}
                    control={
                      <Checkbox
                        sx={{ p: 0 }}
                        name={item.title}
                        checked={checkedState[item.id]}
                        onChange={(e) =>
                          setCheckedState({
                            ...checkedState,
                            [item.id]: !checkedState[item.id],
                          })
                        }
                      />
                    }
                    label={
                      <Typography variant="h6" sx={{ color: "grey.900" }}>
                        {item.title}
                      </Typography>
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </SelectOptionBox>
        )}
      </Box>
    </ClickAwayListener>
  );
};

const Select = styled(Box)(({ theme }) => ({
  border: `1px solid #828282`,
  display: "flex",
  cursor: "pointer",
  borderRadius: "4px",
  padding: "10px 15px",
  alignItems: "center",
}));

const SelectOptionBox = styled(Box)(({ theme }) => ({
  marginTop: 5,
  height: 200,
  backgroundColor: theme.palette.grey[100],
  borderRadius: 8,
  border: `2px solid #828282`,
  overflowY: "auto",
  position: "absolute",
  zIndex: 1,
}));

export default MultiSelectInput;
