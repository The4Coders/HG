import { google } from "googleapis";

const calendar = google.calendar("v3");

export async function createGoogleMeet(
  auth,
  summary,
  description,
  startTime,
  endTime
) {
  const event = {
    summary,
    description,
    start: {
      dateTime: startTime,
      timeZone: "America/Los_Angeles",
    },
    end: {
      dateTime: endTime,
      timeZone: "America/Los_Angeles",
    },
    conferenceData: {
      createRequest: {
        requestId: "some-random-id",
        conferenceSolutionKey: {
          type: "hangoutsMeet",
        },
        status: {
          statusCode: "success",
        },
      },
    },
  };

  const response = await calendar.events.insert({
    auth,
    calendarId: "primary",
    resource: event,
    conferenceDataVersion: 1,
  });

  return response.data.hangoutLink;
}
