import Navbar from "./LandingPage/Navbar/navbar";
import HeroSection from "./LandingPage/Sections/heroSection";

export default function page() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <HeroSection />
    </main>
  );
}
