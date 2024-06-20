import Navbar from "./LandingPage/Navbar/navbar";
import dynamic from "next/dynamic";

// Dynamically import the HeroSection with SSR disabled
const DynamicHeroSection = dynamic(
  () => import("./LandingPage/Sections/heroSection"),
  {
    ssr: false,
  }
);

export default function page() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <DynamicHeroSection />
    </main>
  );
}
