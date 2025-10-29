import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CongressSection from "@/components/CongressSection";
import VideoSection from "@/components/VideoSection";
import TeamSection from "@/components/TeamSection";
import PartnersSection from "@/components/PartnersSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CongressSection />
      <VideoSection />
      <TeamSection />
      <PartnersSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
