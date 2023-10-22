import Container from "@/components/common/container";
import Navbar from "@/components/common/navbar";
import HeroSection from "@/components/hero-section/hero-section";
import ProjectsSection from "@/components/projects-section/projects-section";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
    </Container>
  );
}
