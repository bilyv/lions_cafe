
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Coffee, ArrowDown } from "lucide-react";
import FeaturedMenu from "@/components/FeaturedMenu";
import ReviewsSection from "@/components/ReviewsSection";
import ValueSection from "@/components/ValueSection";
import PromotionsSection from "@/components/PromotionsSection";
import LoyaltyProgram from "@/components/LoyaltyProgram";
import ReservationPopup from "@/components/ReservationPopup";
import { useState, useEffect } from "react";

const Index = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Slideshow images from public directory - ChatGPT generated café images
  const heroImages = [
    "/ChatGPT Image Jul 13, 2025, 04_58_55 PM.png",
    "/ChatGPT Image Jul 13, 2025, 04_59_05 PM.png",
    "/ChatGPT Image Jul 13, 2025, 04_59_29 PM.png",
    "/ChatGPT Image Jul 13, 2025, 05_10_06 PM.png",
    "/lion cafe 2.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Handle scroll effect for image zoom
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <Layout>
      {/* Hero Section with Slideshow Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images Slideshow with Enhanced Transitions and Scroll Effect */}
        <div className="absolute inset-0 slideshow-container">
          {heroImages.map((image, index) => {
            // Calculate scroll-based zoom effect - image gets closer (larger) when scrolling
            const scrollProgress = Math.min(scrollY / 500, 1); // Normalize scroll to 0-1 over 500px
            const zoomScale = index === currentImageIndex
              ? 1 + (scrollProgress * 0.3) // Scale from 1 to 1.3 when scrolling
              : 1.05;

            return (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
                  index === currentImageIndex
                    ? 'opacity-100 slideshow-image'
                    : 'opacity-0'
                }`}
                style={{
                  backgroundImage: `url("${image}")`,
                  transform: `scale(${zoomScale})`,
                  transitionDelay: index === currentImageIndex ? '0ms' : '200ms'
                }}
              />
            );
          })}

          {/* Enhanced gradient overlay for better text readability */}
          <div
            className="absolute inset-0 slideshow-gradient-overlay transition-opacity duration-300"
            style={{
              opacity: 0.4 + (Math.min(scrollY / 300, 1) * 0.3) // Darken overlay when scrolling
            }}
          />
        </div>





        {/* Enhanced Slideshow Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-500 border-2 ${
                index === currentImageIndex
                  ? 'bg-cream-beige border-cream-beige scale-125 slideshow-dot-active shadow-lg'
                  : 'bg-transparent border-cream-beige/60 hover:border-cream-beige hover:bg-cream-beige/30 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 transition-transform duration-300"
          style={{
            transform: `translateY(${scrollY * 0.3}px)` // Subtle parallax effect
          }}
        >
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
              <Link to="/qr-order">Order by QR Scan</Link>
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

      {/* Promotions Section */}
      <PromotionsSection />

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
            <Button
              variant="outline"
              size="lg"
              className="border-cream-beige text-cream-beige hover:bg-cream-beige hover:text-coffee-brown shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setIsReservationOpen(true)}
            >
              Reserve Table
            </Button>
          </div>
        </div>
      </section>

      {/* Reservation Popup */}
      <ReservationPopup
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </Layout>
  );
};

export default Index;
