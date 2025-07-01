
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Coffee, ArrowDown } from "lucide-react";
import FeaturedMenu from "@/components/FeaturedMenu";
import ReviewsSection from "@/components/ReviewsSection";
import ValueSection from "@/components/ValueSection";
import EventsSection from "@/components/EventsSection";
import LoyaltyProgram from "@/components/LoyaltyProgram";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop")'
        }}
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6 animate-slide-in-up">
            <Coffee className="h-20 w-20 mx-auto mb-4 text-cream-beige" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-up animation-delay-200 text-cream-beige">
            Lion's Café
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4 animate-slide-in-up animation-delay-300 text-cream-beige">
            Brewed Bold. Served with Pride.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-slide-in-up animation-delay-400 text-cream-beige/90">
            Experience the perfect blend of exceptional coffee and warm hospitality in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up animation-delay-500">
            <Button asChild size="lg" className="bg-cream-beige text-coffee-brown hover:bg-cream-beige/90 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/menu">Explore Our Menu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-cream-beige text-cream-beige hover:bg-cream-beige hover:text-coffee-brown shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/order">Order Online</Link>
            </Button>
          </div>
          <div className="mt-12 animate-bounce">
            <ArrowDown className="h-8 w-8 mx-auto text-cream-beige/70" />
          </div>
        </div>
      </section>

      {/* Featured Menu Highlights */}
      <FeaturedMenu />

      {/* Customer Reviews */}
      <ReviewsSection />

      {/* Value Section */}
      <ValueSection />

      {/* Loyalty Program */}
      <LoyaltyProgram />

      {/* Events Section */}
      <EventsSection />

      {/* Call to Action */}
      <section className="py-16 bg-coffee-brown text-cream-beige">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Ready for Your Perfect Cup?
          </h2>
          <p className="text-xl mb-8 animate-fade-in animation-delay-200">
            Join us today and discover why Lion's Café is the talk of the town.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Button asChild size="lg" className="bg-caramel-orange hover:bg-caramel-orange/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-cream-beige text-cream-beige hover:bg-cream-beige hover:text-coffee-brown shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/booking">Book a Table</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
