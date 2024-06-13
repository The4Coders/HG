"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  styled,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#045357",
  color: "#ffffff",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
});

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <AddIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: "center" }}>
          Dashboard
        </Typography>
        <Avatar src="/user.png" />
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
