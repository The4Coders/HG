import Navbar from './LandingPage/Navbar/navbar';
import HeroSection from './LandingPage/Sections/heroSection';
import SecondSection from './LandingPage/Sections/secondSection';
import CarexaSection from './LandingPage/Sections/carexaSection';
import FourthSection from './LandingPage/Sections/fourthSection';
import AnimationSection from './LandingPage/Sections/animationSection';
import Footer from './LandingPage/Sections/footer'

export default function page() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <HeroSection />
      <SecondSection />
      <CarexaSection />
      <FourthSection />
      <AnimationSection />
      <Footer />
    </main>
  );
}
