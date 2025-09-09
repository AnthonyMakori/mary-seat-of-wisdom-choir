import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Events />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-3">
              <span className="text-secondary-foreground font-bold text-sm">M</span>
            </div>
            <h3 className="font-playfair text-xl font-bold">
              Mary Seat of Wisdom Choir
            </h3>
          </div>
          <p className="font-inter text-primary-foreground/80 mb-4">
            Praising God through sacred music and liturgical excellence
          </p>
          <div className="border-t border-primary-foreground/20 pt-4">
            <p className="font-inter text-sm text-primary-foreground/60">
              © 2024 MWOW Choir. All rights reserved. | Built with faith and dedication.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
