import Navigation from "@/components/Navigation";
import EnhancedHero from "@/components/EnhancedHero";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <EnhancedHero />
      <FeaturedSection />
      <Footer />
    </div>
  );
};

export default Index;
