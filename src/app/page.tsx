"use client";
import { useEffect } from "react";
import Navbar from "./LandingPage/Navbar/navbar";
import dynamic from "next/dynamic";
// import ChatbaseIframe from "../components/ChatbaseIframe";

const DynamicHeroSection = dynamic(
  () => import("./LandingPage/Sections/heroSection"),
  {
    ssr: false,
  }
);
const DynamicSecondSection = dynamic(
  () => import("./LandingPage/Sections/secondSection"),
  {
    ssr: false,
  }
);
const DynamicCarexaSection = dynamic(
  () => import("./LandingPage/Sections/carexaSection"),
  {
    ssr: false,
  }
);
const DynamicFourthSection = dynamic(
  () => import("./LandingPage/Sections/fourthSection"),
  {
    ssr: false,
  }
);
const DynamicAnimationSection = dynamic(
  () => import("./LandingPage/Sections/animationSection"),
  {
    ssr: false,
  }
);
const DynamicFooter = dynamic(() => import("./LandingPage/Sections/footer"), {
  ssr: false,
});

export default function Page() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "7wd0VVBFlvvkuFuDiju-o",
        domain: "www.chatbase.co"
      };
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://www.chatbase.co/embed.min.js";
    script2.setAttribute("chatbotId", "7wd0VVBFlvvkuFuDiju-o");
    script2.setAttribute("domain", "www.chatbase.co");
    script2.defer = true;
    document.body.appendChild(script2);
  }, []);

  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <DynamicHeroSection />
      <DynamicSecondSection />
      {/* <DynamicCarexaSection /> */}
      {/* <div style={{ width: "40%", height: "80vh" }}>
        <ChatbaseIframe />
      </div> */}
      <DynamicFourthSection />
      <DynamicAnimationSection />
      <DynamicFooter />
    </main>
  );
}