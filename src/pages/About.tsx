import Navigation from "@/components/Navigation";
import About from "@/components/About";
import LeadershipHistory from "@/components/LeadershipHistory";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <About />
        <LeadershipHistory />
      </main>
    </div>
  );
};

export default AboutPage;