"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/layout";
interface Message {
  id: number;
  name: string;
  message: string;
  sentByUser: boolean;
}

export default function Page() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, name: "John Doe", message: "Hello there!", sentByUser: false },
    {
      id: 2,
      name: "Jane Smith",
      message: "Hi, how are you?",
      sentByUser: false,
    },
    {
      id: 3,
      name: "Alice Johnson",
      message: "Good morning!",
      sentByUser: false,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleUserClick = (user: string) => {
    setSelectedUser(user);
    setIsTyping(false);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (selectedUser && newMessage.trim()) {
      const newMessageObj: Message = {
        id: messages.length + 1,
        name: selectedUser,
        message: newMessage,
        sentByUser: true,
      };
      setMessages([...messages, newMessageObj]);
      setNewMessage("");
      setIsTyping(true);

      // Simulate receiving a reply after 2 seconds
      setTimeout(() => {
        const replyMessageObj: Message = {
          id: messages.length + 2,
          name: selectedUser,
          message: "Thanks for your message!",
          sentByUser: false,
        };
        setMessages((prevMessages) => [...prevMessages, replyMessageObj]);
        setIsTyping(false);
      }, 2000);
    }
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold p-6 w-full text-white bg-primary">
        Your Messages
      </h2>
      <div className="flex w-full h-[700px] pe-4">
        {/* Sidebar */}
        <aside className="w-1/4 border-r border-gray-300 bg-gray-100 p-4">
          <h2 className="text-lg font-bold mb-4">Chats</h2>
          <ul className="space-y-2">
            {Array.from(new Set(messages.map((message) => message.name))).map(
              (user) => (
                <li
                  key={user}
                  className={`p-2 cursor-pointer hover:bg-gray-200 rounded ${
                    selectedUser === user ? "bg-gray-200" : ""
                  }`}
                  onClick={() => handleUserClick(user)}
                >
                  {user}
                </li>
              )
            )}
          </ul>
        </aside>

        {/* Chat Section */}
        <section className="w-3/4 p-4 flex flex-col">
          {selectedUser ? (
            <>
              <div className="border-b border-gray-300 pb-2 mb-4">
                <h2 className="text-xl font-bold">{selectedUser}</h2>
              </div>
              <div className="flex-1 overflow-y-auto space-y-4">
                {messages
                  .filter((message) => message.name === selectedUser)
                  .map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sentByUser ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-xs p-2 rounded-lg ${
                          message.sentByUser
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200"
                        }`}
                      >
                        {message.message}
                        {message.sentByUser && (
                          <span className="ml-2 text-xs text-gray-300">✔</span>
                        )}
                      </div>
                    </div>
                  ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-xs p-2 rounded-lg bg-gray-200">
                      <div className="typing-indicator">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-4 flex">
                <input
                  type="text"
                  className="flex-1 p-2 border border-gray-300 rounded-md"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={handleMessageChange}
                />
                <button
                  className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md"
                  onClick={handleSendMessage}
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-500">Select a chat to start messaging</p>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
}
