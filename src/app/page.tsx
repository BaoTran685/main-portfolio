import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <NavBar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
