
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-temple-maroon/40 backdrop-blur-sm"></div>
      </div>

      {/* Navigation Header */}
      <div className="relative z-10">
        <SiteHeader />
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 text-white p-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-temple-ivory drop-shadow-lg">
            Welcome to Durga Mandir
            <br />
            <span className="text-3xl md:text-5xl mt-2 block">दुर्गा मंदिर में आपका स्वागत है</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-temple-ivory/90 max-w-2xl mx-auto">
            A sacred space for prayer, meditation, and community gatherings. Join us in worship and celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-temple-gold hover:bg-temple-gold/90 text-temple-maroon font-semibold px-8 py-6"
            >
              <Link to="/about">About Our Temple</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-temple-gold text-temple-ivory hover:bg-temple-gold/20 px-8 py-6"
            >
              <Link to="/team">Meet Our Decoration team Member</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <SiteFooter />
      </div>
    </div>
  );
};

export default Home;
