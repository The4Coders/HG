import Navbar from "./LandingPage/Navbar/navbar";
import dynamic from "next/dynamic";

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

export default function page() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <DynamicHeroSection />
      <DynamicSecondSection />
      <DynamicCarexaSection />
      <DynamicFourthSection />
      <DynamicAnimationSection />
      <DynamicFooter />
    </main>
  );
}
