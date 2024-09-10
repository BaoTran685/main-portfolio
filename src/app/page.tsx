
import HeroSection from "./components/Hero/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./components/About/AboutSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
import ProjectsSection from "./components/Project/ProjectsSection";
import EmailSection from "./components/Email/EmailSection"
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[var(--background-white-color)] scroll-smooth">
      <NavBar />
      <div className="container mx-auto">
        <div className="mx-6 md:mx-8 xl:mx-14">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <EmailSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
