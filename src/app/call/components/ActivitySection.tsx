"use client";
import React from "react";
import { Box, Typography, Button, Avatar, styled, Paper } from "@mui/material";

const ActivityContainer = styled(Paper)({
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

const ActivitySection = () => {
  return (
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
        >
          <Avatar alt={activity.name} src="/profilePic.jpg" />
          <Typography
            variant="body1"
            sx={{ flexGrow: 1, mx: 2 }}
            className="text-[#045357]"
          >
            {activity.name}
          </Typography>
          <Typography variant="body2" className="text-[#004d40]">
            {activity.date}
          </Typography>
          <Typography variant="body2" className="text-[#004d40]">
            {activity.time}
          </Typography>
          <Typography
            variant="body2"
            sx={{ flexGrow: 2, mx: 2 }}
            className="text-[#004d40]"
          >
            {activity.summary}
          </Typography>
          <Button
            variant="contained"
            color={activity.repeat ? "secondary" : "primary"}
            sx={{ backgroundColor: activity.repeat ? "#f50057" : "#045357" }}
          >
            {activity.repeat ? "Repeat" : "Get info"}
          </Button>
        </Box>
      ))}
    </ActivityContainer>
  );
};

export default ActivitySection;
