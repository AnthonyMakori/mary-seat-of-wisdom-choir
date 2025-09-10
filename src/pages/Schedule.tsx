import Navigation from "@/components/Navigation";
import Schedule from "@/components/Schedule";
import Events from "@/components/Events";

const SchedulePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Schedule />
        <Events />
      </main>
    </div>
  );
};

export default SchedulePage;