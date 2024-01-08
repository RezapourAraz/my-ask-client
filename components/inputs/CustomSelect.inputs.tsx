import React, { useState } from "react";

// Mui Components
import {
  Box,
  Checkbox,
  ClickAwayListener,
  FormControlLabel,
  styled,
  Typography,
} from "@mui/material";

// Mui icons
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

//Data

const CustomSelectInput = ({
  label = false,
  width = 300,
  height,
  placeholder,
  single = false,
  checkedState,
  setCheckedState,
  inputItems,
  disabled = false,
  error,
}: any) => {
  //  States
  const [open, setOpen] = useState(false);

  // handlers
  const handleOpen = () => {
    if (disabled) {
      setOpen(false);
    } else {
      setOpen(!open);
    }
  };

  const handleChange = (e: any, item: any) => {
    console.log(e.target);

    if (e.target.checked) {
      if (!single) {
        setCheckedState(item);
      } else {
        setCheckedState(parseInt(e.target.value));
      }
      setOpen(false);
    } else {
      if (checkedState === 0) {
        return;
      } else {
        setCheckedState();
      }
    }
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box component="div" width={width} sx={{ position: "relative" }}>
        {label && (
          <Typography
            variant="h4"
            fontSize={16}
            color="grey.700"
            mb={label ? 1 : 0}
          >
            {label}
          </Typography>
        )}
        <Select
          onClick={handleOpen}
          minHeight={40}
          height={height}
          sx={{
            borderRadius: "8px",
            justifyContent: "space-between",
            display: "flex",
            flexWrap: "nowrap",
            border: error ? "2px solid red" : "1px solid #828282",
          }}
        >
          <Box width="90%" display="flex" gap={1} sx={{ flexWrap: "nowrap" }}>
            {single
              ? inputItems?.map(
                  (item: any) =>
                    item.id === checkedState && (
                      <Typography
                        key={item.id}
                        variant="h5"
                        noWrap
                        fontSize={14}
                        color="primary.main"
                      >
                        {item.title}
                      </Typography>
                    )
                )
              : inputItems?.map(
                  (item: any) =>
                    item?.id === checkedState?.id && (
                      <Typography
                        key={item?.id}
                        variant="h5"
                        noWrap
                        fontSize={14}
                        color="primary.main"
                      >
                        {item?.title}
                      </Typography>
                    )
                )}
            <Typography
              variant="h5"
              fontSize={14}
              color={error ? "red" : "primary.main"}
              noWrap
            >
              {checkedState === 0 && "choose label"}
            </Typography>
          </Box>
          {open ? <FiChevronUp /> : <FiChevronDown />}
        </Select>
        {open && (
          <SelectOptionBox width="100%">
            <Box
              p={1.5}
              display="flex"
              flexWrap="nowrap"
              alignItems="center"
              justifyContent="space-between"
              bgcolor={!checkedState ? "primary.light" : "common.white"}
            >
              <FormControlLabel
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  width: "100%",
                  m: 0,
                }}
                label={
                  <Typography
                    variant="h5"
                    fontSize={14}
                    // color={error ? "red" : "inherit"}
                    noWrap
                    color="primary.main"
                  >
                    choose
                  </Typography>
                }
                control={
                  <Checkbox
                    checked={checkedState === 0 ? true : false}
                    value={0}
                    onChange={handleChange}
                    sx={{ display: "none" }}
                  />
                }
                labelPlacement="start"
              />
            </Box>
            {single
              ? inputItems?.map((item: any, idx: any) => (
                  <Box
                    key={idx}
                    p={1.5}
                    display="flex"
                    flexWrap="nowrap"
                    alignItems="center"
                    justifyContent="space-between"
                    bgcolor={
                      checkedState === item.id
                        ? "primary.light"
                        : "common.white"
                    }
                  >
                    <FormControlLabel
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        width: "100%",
                        m: 0,
                        fontSize: 12,
                      }}
                      label={
                        <Typography
                          noWrap
                          variant="h6"
                          sx={{ fontSize: 14, color: "grey.900" }}
                        >
                          {item.title}
                        </Typography>
                      }
                      control={
                        <Checkbox
                          checked={checkedState === item.id}
                          value={item.id}
                          name={item.title}
                          onChange={handleChange}
                          sx={{ display: "none" }}
                        />
                      }
                      labelPlacement="start"
                    />
                  </Box>
                ))
              : inputItems?.map((item: any, idx: number) => (
                  <Box
                    key={idx}
                    p={1.5}
                    display="flex"
                    flexWrap="nowrap"
                    alignItems="center"
                    justifyContent="space-between"
                    bgcolor={
                      checkedState?.id === item?.id
                        ? "primary.light"
                        : "initial"
                    }
                  >
                    <FormControlLabel
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        width: "100%",
                        m: 0,
                      }}
                      label={
                        <Typography
                          noWrap
                          variant="h6"
                          sx={{ fontSize: 14, color: "grey.900" }}
                        >
                          {item.title}
                        </Typography>
                      }
                      control={
                        <Checkbox
                          checked={checkedState?.id === item?.id}
                          value={item.id}
                          name={item.title}
                          onChange={(e) => handleChange(e, item)}
                          sx={{ display: "none", fontSize: 14 }}
                        />
                      }
                      labelPlacement="start"
                    />
                  </Box>
                ))}
          </SelectOptionBox>
        )}
      </Box>
    </ClickAwayListener>
  );
};

const Select = styled(Box)(({ theme }) => ({
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
  zIndex: 1000,
}));

export default CustomSelectInput;
