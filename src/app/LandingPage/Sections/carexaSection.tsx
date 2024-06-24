"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "scrollreveal";

const CarexaSection: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      sender: "Carexa",
      text: "Hi there! I'm Carexa, your personal health advisor. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1000,
      easing: "ease-out",
      reset: true,
    });

    sr.reveal(".down", {
      origin: "bottom",
      interval: 200,
    });
  }, []);

  const handleSend = (message: string) => {
    if (message.trim() === "") return;

    const newMessages = [...messages, { sender: "User", text: message }];
    setMessages(newMessages);
    setInput("");

    setIsTyping(true);

    // Simulate a response from Carexa after showing typing indicator
    setTimeout(() => {
      const response = getResponse(message);
      setIsTyping(false);
      setMessages([...newMessages, { sender: "Carexa", text: response }]);
    }, 2000);
  };

  const getResponse = (question: string) => {
    const qa: { [key: string]: string } = {
      Hello: "Hello! How can I help you with your health today?",
      Hey: "Hey! What can I do for you today?",
      Hi: "Hi there! Need any health advice?",
      "Good morning":
        "Good morning! How can I assist you with your health today?",
      "Good afternoon": "Good afternoon! How can I help you today?",
      "Good evening": "Good evening! How can I assist you today?",
      "What are some tips for a healthy diet?":
        "A healthy diet includes a variety of fruits and vegetables, whole grains, lean proteins, and low-fat dairy products. Avoid processed foods and sugary drinks.",
      "How can I improve my mental health?":
        "Practicing mindfulness, regular exercise, staying connected with loved ones, and getting enough sleep are great ways to improve your mental health.",
      "What exercises are good for weight loss?":
        "Cardio exercises like running, cycling, and swimming are effective for weight loss. Strength training can also help by building muscle, which boosts metabolism.",
      "How often should I get a health check-up?":
        "It's generally recommended to have a health check-up once a year. However, this can vary based on your age, health condition, and doctor's advice.",
      "What should I do if I have a cold?":
        "Rest, stay hydrated, and use over-the-counter medications to relieve symptoms. If your symptoms persist or worsen, consult a healthcare professional.",
      "How much water should I drink daily?":
        "It's commonly recommended to drink eight 8-ounce glasses of water a day, which equals about 2 liters, or half a gallon. However, individual needs may vary.",
      "What are the benefits of regular exercise?":
        "Regular exercise helps improve cardiovascular health, strengthens muscles, enhances mental health, aids in weight management, and boosts overall energy levels.",
      "How can I manage stress effectively?":
        "Effective stress management includes practices like mindfulness meditation, regular physical activity, maintaining a healthy diet, getting enough sleep, and seeking social support.",
      "What are some healthy sleep habits?":
        "Healthy sleep habits include maintaining a consistent sleep schedule, creating a restful environment, limiting screen time before bed, and avoiding large meals and caffeine before sleeping.",
    };

    return (
      qa[question] ||
      "I'm sorry, I don't have information on that topic. Please try asking something else."
    );
  };

  return (
    <div className="bg-[#045357] pt-12 md:pt-28 pb-12 md:pb-24">
      <div className="w-full max-w-[xl] md:ml-40 md:down">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left">
          Explore{" "}
          <span className="text-green-400 text-5xl md:text-6xl underline">
            Carexa
          </span>
        </h2>
        <p className="mt-2 text-gray-300 text-center md:text-left">
          Carexa is your personal health advisor who can help you discover new
          health tips tailored to your needs.
        </p>
      </div>
      <div className="container mx-auto px-4 md:flex md:flex-col md:items-center md:mt-10">
        <div className="w-full md:w-[70%] max-w-[xl] md:flex md:flex-row md:justify-center md:mb-8 down">
          <div className="md:w-1/2 md:mb-0 mb-8 hidden md:block">
            <Image
              src="/carexa.png"
              alt="Carexa"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-[500px] md:h-full md:ml-8 down">
            <div className="mt-8 bg-gray-800 p-5 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="md:block">
                  <Image
                    src="/carexa.png"
                    alt="Carexa"
                    width={50}
                    height={50}
                    className="rounded-full border-[2px] border-green-700"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-green-400">Carexa</p>
                  <p className="text-gray-400 text-sm">
                    You can talk to me about anything health-related
                  </p>
                </div>
              </div>
              <div className="space-y-4 p-2 max-h-60 overflow-y-auto bg-gray-700 rounded-lg">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg shadow-md ${
                      msg.sender === "Carexa"
                        ? "bg-green-700"
                        : "bg-white ml-auto"
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>
                ))}
                {isTyping && (
                  <div className="p-4 rounded-lg shadow-md bg-green-700">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-200 rounded-full animate-bounce mr-1"></div>
                      <div className="w-2 h-2 bg-gray-200 rounded-full animate-bounce mr-1"></div>
                      <div className="w-2 h-2 bg-gray-200 rounded-full animate-bounce"></div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-4 flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Your message..."
                  className="w-full p-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button
                  onClick={() => handleSend(input)}
                  className="bg-green-700 text-white p-2 rounded-r-lg"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarexaSection;
