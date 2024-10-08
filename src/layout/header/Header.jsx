import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import LeftNavBar from "./left-navigation/LeftNavBar";
import RightNavbar from "./right-navigation/RightNavbar";
import SearchBar from "./right-navigation/SearchBar";

export default function Header() {
  return (
    <AppBar position="sticky" color="primary" elevation={10}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <LeftNavBar />
        <Box display={"flex"}>
          <SearchBar />
          <RightNavbar />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
