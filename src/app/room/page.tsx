"use client";

import "@livekit/components-styles";
import {
  LiveKitRoom,
  GridLayout,
  ParticipantTile,
  RoomAudioRenderer,
  ControlBar,
  useTracks,
} from "@livekit/components-react";
import { useEffect, useState } from "react";
import { Track } from "livekit-client";
import { useSearchParams } from "next/navigation";
import SuspenseWrapper from "../SuspenseWrapper"; // Ensure correct path

function generateRandomRoomId() {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
}

function RoomContent() {
  const params = useSearchParams();
  const [room, setRoom] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [generatedRoomId, setGeneratedRoomId] = useState<string>("");

  useEffect(() => {
    const roomParam = params.get("room");
    const nameParam = params.get("name");
    if (roomParam && nameParam) {
      setRoom(roomParam);
      setName(nameParam);
    }
  }, [params]);

  useEffect(() => {
    setGeneratedRoomId(generateRandomRoomId());
  }, []);

  async function getToken() {
    if (!room || !name) {
      setError("Room ID and Name are required.");
      return;
    }

    if (room !== generatedRoomId) {
      setError("Input Correct Room ID.");
      return;
    }

    try {
      const resp = await fetch(
        `/api/get-participant-token?room=${room}&username=${name}`
      );
      const data = await resp.json();
      if (resp.ok) {
        setToken(data.token);
      } else {
        setError(data.error || "Failed to fetch token.");
      }
    } catch (e) {
      console.error(e);
      setError("An error occurred while fetching the token.");
    }
  }

  if (token === "") {
    return (
      <div className="flex flex-col items-center justify-center py-4 h-[fit-content] bg-[#e0f2f1] rounded-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getToken();
          }}
          className="flex flex-col w-[75%]"
        >
          <input
            type="text"
            placeholder="Room ID"
            value={room}
            className="mb-4 ring-1 ring-gray-300 px-2 py-3 rounded-sm"
            onChange={(e) => setRoom(e.target.value)}
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            className="mb-4 ring-1 ring-gray-300 px-2 py-3 rounded-sm"
            onChange={(e) => setName(e.target.value)}
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-[#045357] text-white rounded-md px-8 transition-colors p-4"
          >
            Join
          </button>
        </form>
        <p className="mt-4 text-[#045357]">Room ID: {generatedRoomId}</p>
      </div>
    );
  }

  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      onDisconnected={() => setToken("")}
      data-lk-theme="default"
      style={{ height: "75vh" }}
    >
      <MyVideoConference />
      <RoomAudioRenderer />
      <ControlBar />
    </LiveKitRoom>
  );
}

function MyVideoConference() {
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false }
  );

  return (
    <GridLayout
      tracks={tracks}
      style={{ height: "calc(75vh - var(--lk-control-bar-height))" }}
    >
      <ParticipantTile />
    </GridLayout>
  );
}

export default function Room() {
  return (
    <SuspenseWrapper>
      <RoomContent />
    </SuspenseWrapper>
  );
}
