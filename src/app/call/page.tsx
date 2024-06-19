"use client";

import React from "react";
import {
  Grid,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Button,
  Paper,
  styled,
} from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import MicIcon from "@mui/icons-material/Mic";
import ChatIcon from "@mui/icons-material/Chat";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import AddIcon from "@mui/icons-material/Add";
import styles from "../telemedicine/Telemedicine.module.css";
import Link from "next/link";
const StyledAppBar = styled(AppBar)({
  backgroundColor: "#045357",
  color: "#ffffff",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
});

const VideoContainer = styled(Paper)({
  padding: "16px",
  marginBottom: "16px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#ffffff",
});

const ActivityContainer = styled(Paper)({
  padding: "16px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  backgroundColor: "#ffffff",
});

const SideBarContainer = styled(Paper)({
  padding: "16px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  backgroundColor: "#ffffff",
});

const activities = [
  {
    name: "Ronnie Fleming",
    date: "Sep 18",
    time: "9:00 AM",
    summary: "Consultation, prescription of medicines",
  },
  {
    name: "Jane Moss",
    date: "Sep 2",
    time: "10:00 AM",
    summary: "Counseling Psychology",
    repeat: true,
  },
  {
    name: "John Greene",
    date: "Aug 24",
    time: "10:30 AM",
    summary: "Eating Plan Diet",
  },
];

const Call = () => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      className={`bg-[#e0f2f1] min-h-screen ${styles.fadeIn}`}
    >
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <AddIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, textAlign: "center" }}>
            Virtual Meeting Dashboard
          </Typography>
          <Avatar src="/user.png" />
        </Toolbar>
      </StyledAppBar>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} md={8}>
          <VideoContainer>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={2}
            >
              <Avatar
                alt="Doctor"
                src="/profilePic.jpg"
                sx={{ width: 100, height: 100, marginRight: 2 }}
              />
              <Avatar
                alt="Patient"
                src="/profilePic2.jpg"
                sx={{ width: 100, height: 100 }}
              />
            </Box>
            <Typography variant="h6" className="text-[#045357]">
              Dr. Ronnie Fleming
            </Typography>
            <Typography variant="caption" className="text-[#004d40]">
              Duration: 00:15:24
            </Typography>
            <Box mt={2} display="flex" justifyContent="center" flexWrap="wrap">
              <Button
                variant="outlined"
                startIcon={<CallIcon />}
                sx={{
                  mx: 1,
                  my: 0.5,
                  borderColor: "#045357",
                  color: "#045357",
                  minWidth: "120px",
                }}
              >
                Call
              </Button>
              <Button
                variant="outlined"
                startIcon={<VideocamIcon />}
                sx={{
                  mx: 1,
                  my: 0.5,
                  borderColor: "#045357",
                  color: "#045357",
                  minWidth: "120px",
                }}
              >
                Video
              </Button>
              <Button
                variant="outlined"
                startIcon={<MicIcon />}
                sx={{
                  mx: 1,
                  my: 0.5,
                  borderColor: "#045357",
                  color: "#045357",
                  minWidth: "120px",
                }}
              >
                Mute
              </Button>
              <Button
                variant="outlined"
                startIcon={<ChatIcon />}
                sx={{
                  mx: 1,
                  my: 0.5,
                  borderColor: "#045357",
                  color: "#045357",
                  minWidth: "120px",
                }}
              >
                Chat
              </Button>
              <Button
                variant="outlined"
                startIcon={<ScreenShareIcon />}
                sx={{
                  mx: 1,
                  my: 0.5,
                  borderColor: "#045357",
                  color: "#045357",
                  minWidth: "120px",
                }}
              >
                Share Screen
              </Button>
            </Box>
          </VideoContainer>
          <ActivityContainer>
            <Typography variant="h6" gutterBottom className="text-[#045357]">
              Last activity
            </Typography>
            {activities.map((activity, index) => (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={2}
                flexWrap="wrap"
              >
                <Avatar alt={activity.name} src="/profilePic.jpg" />
                <Typography
                  variant="body1"
                  sx={{ flexGrow: 1, mx: 2, minWidth: "120px" }}
                  className="text-[#045357]"
                >
                  {activity.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ minWidth: "80px" }}
                  className="text-[#004d40]"
                >
                  {activity.date}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ minWidth: "80px" }}
                  className="text-[#004d40]"
                >
                  {activity.time}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 2, mx: 2, minWidth: "160px" }}
                  className="text-[#004d40]"
                >
                  {activity.summary}
                </Typography>
                <Button
                  variant="contained"
                  color={activity.repeat ? "secondary" : "primary"}
                  sx={{
                    backgroundColor: activity.repeat ? "#f50057" : "#045357",
                  }}
                >
                  {activity.repeat ? "Repeat" : "Get info"}
                </Button>
              </Box>
            ))}
          </ActivityContainer>
        </Grid>
        <Grid item xs={12} md={4}>
          <SideBarContainer>
            <Box mb={2}>
              <Typography variant="h6" gutterBottom className="text-[#045357]">
                Next Meeting: 28 Dec, 2023
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                className="text-[#004d40]"
              >
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
                &quot;Let thy food be thy medicine and thy medicine be thy
                food.&quot; - Hippocrates
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" className="text-[#045357]">
                40% off premium
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                className="text-[#004d40]"
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when.
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Call;
