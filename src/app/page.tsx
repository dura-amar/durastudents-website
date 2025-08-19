import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import DonateSection from "@/components/DonateSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import Navbar from "@/components/interactivity/nav_bar";
import NewsSection from "@/components/NewsSection";
import PartnersSection from "@/components/PartnersSection";
import ProgramsSection from "@/components/ProgramsSection";
import ResourcesSection from "@/components/ResourcesSection";
import TeamSection from "@/components/TeamSection";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <TopBar />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ImpactSection />
      <ResourcesSection />
      <NewsSection />
      <PartnersSection />
      <TeamSection />
      <DonateSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
