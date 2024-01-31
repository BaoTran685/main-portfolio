import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <NavBar />
      <div className="container mx-auto mt-24 px-5 sm:px-6 md:px-8 lg:px-13 py-4">
        <HeroSection />
        <ExperienceSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
