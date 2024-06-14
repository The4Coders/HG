"use client";
import React from "react";
import { Box, Typography, Button, Paper, styled } from "@mui/material";

const SideBarContainer = styled(Paper)({
  padding: "16px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  backgroundColor: "#ffffff",
});

const SideBar = () => {
  return (
    <SideBarContainer>
      <Box mb={2}>
        <Typography variant="h6" gutterBottom className="text-[#045357]">
          Next Meeting: 28 Dec, 2023
        </Typography>
        <Typography variant="body2" gutterBottom className="text-[#004d40]">
          Discussion of blood test results and discussion of well-being.
          Prescribing medications.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: "#045357" }}
        >
          More details
        </Button>
      </Box>
      <Box mb={2}>
        <Typography variant="h6" className="text-[#045357]">
          Quote of the Day
        </Typography>
        <Typography variant="body2" className="text-[#004d40]">
          &quot;Let thy food be thy medicine and thy medicine be thy food.&quot;
          - Hippocrates
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" className="text-[#045357]">
          40% off premium
        </Typography>
        <Typography variant="body2" gutterBottom className="text-[#004d40]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ backgroundColor: "#f50057" }}
        >
          Upgrade
        </Button>
      </Box>
    </SideBarContainer>
  );
};

export default SideBar;
