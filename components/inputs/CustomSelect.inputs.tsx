import React, { useEffect, useState } from "react";

// Mui Components
import {
  Box,
  Checkbox,
  ClickAwayListener,
  FormControlLabel,
  Input,
  styled,
  Typography,
} from "@mui/material";

// Mui icons
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { t } from "i18next";

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
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // handlers
  const handleOpen = () => {
    if (disabled) {
      setOpen(false);
    } else {
      setOpen(!open);
    }
  };

  const handleChange = (e: any, item: any) => {
    if (e.target.checked) {
      if (!single) {
        const findInCheck = checkedState.find((el: any) => el.id === item.id);

        if (!findInCheck) setCheckedState([...checkedState, item]);
        else {
          const filterCheck = checkedState.filter(
            (el: any) => el.id !== item.id
          );
          setCheckedState(filterCheck);
        }
      } else {
        setCheckedState(parseInt(e.target.value));
      }
      setOpen(false);
    } else {
      if (!checkedState.length) {
        return;
      } else {
        setCheckedState();
      }
    }
  };

  useEffect(() => {
    if (search !== "") {
      let searchedTags = inputItems.filter((item: any) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredData(searchedTags);
    } else {
      setFilteredData(inputItems);
    }
  }, [search]);

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
                    checkedState.find((el: any) => el.id === item.id) && (
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
              {!checkedState.length && "choose tag"}
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
            >
              <Input
                fullWidth
                placeholder={t("search_here")}
                sx={{ color: "common.black" }}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </Box>
            <Box
              p={1.5}
              display="flex"
              flexWrap="nowrap"
              alignItems="center"
              justifyContent="space-between"
              bgcolor={!checkedState.length ? "primary.light" : "common.white"}
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
                    choose tag
                  </Typography>
                }
                control={
                  <Checkbox
                    checked={checkedState.length ? true : false}
                    value={0}
                    onChange={handleChange}
                    sx={{ display: "none" }}
                  />
                }
                labelPlacement="start"
              />
            </Box>
            {single
              ? filteredData?.map((item: any, idx: any) => (
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
              : filteredData?.map((item: any, idx: number) => (
                  <Box
                    key={idx}
                    p={1.5}
                    display="flex"
                    flexWrap="nowrap"
                    alignItems="center"
                    justifyContent="space-between"
                    bgcolor={
                      checkedState.find((el: any) => el.id === item.id)
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
