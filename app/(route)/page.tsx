import AboutSection from "@/components/about-section/about-section";
import BottomSection from "@/components/bottom-section/bottom-section";
import Container from "@/components/common/container";
import Navbar from "@/components/common/navbar";
import EndorsementSection from "@/components/endorsement-section/endorsement-section";
import HeroSection from "@/components/hero-section/hero-section";
import ProjectsSection from "@/components/projects-section/projects-section";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <EndorsementSection />
      <BottomSection />
    </Container>
  );
}
