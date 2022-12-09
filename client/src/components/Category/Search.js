import * as React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Search(props) {
  const data = props.data;
  const setData = props.setData;
  const [searchField, setSearchField] = useState("");
  const allData = props.allData;
  const searchBy = props.searchBy;

  const handleChanges = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    if (searchBy === "name") {
      setData([
        ...allData.filter((product) =>
          product.name.toLowerCase().includes(searchField.toLowerCase())
        ),
      ]);
    } else if (searchBy === "email") {
      setData([
        ...allData.filter((product) =>
          product.email.toLowerCase().includes(searchField.toLowerCase())
        ),
      ]);
    }
  }, [searchField]);

  return (
    <Box
      sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}
    >
      <SearchIcon></SearchIcon>
      <TextField
        size="small"
        variant="outlined"
        autoComplete="given-name"
        name="Search"
        id="Search"
        label="Search"
        onChange={handleChanges}
      />
    </Box>
  );
}
