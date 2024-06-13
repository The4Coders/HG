"use client";
import React from "react";
import { Grid, Box } from "@mui/material";
import Header from "./components/Header";
import VideoCallSection from "./components/VideoCallSection";
import ActivitySection from "./components/ActivitySection";
import SideBar from "./components/SideBar";
import styles from "../telemedicine/Telemedicine.module.css";

export default function Call() {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      className={`bg-[#e0f2f1] min-h-screen ${styles.fadeIn}`}
    >
      <Header />
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} md={8}>
          <VideoCallSection />
          <ActivitySection />
        </Grid>
        <Grid item xs={12} md={4}>
          <SideBar />
        </Grid>
      </Grid>
    </Box>
  );
}
