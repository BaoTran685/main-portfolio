import HeroSection from "./components/Hero/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./components/About/AboutSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
import ProjectsSection from "./components/Project/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[var(--background--first-white)] scroll-smooth font-['Poppins']">
      <NavBar />
      <div className="container mx-auto">
        <div className="mx-6 md:mx-8 xl:mx-14">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <EmailSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
