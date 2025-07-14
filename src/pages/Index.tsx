
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Coffee } from "lucide-react";
import FeaturedMenu from "@/components/FeaturedMenu";
import ReviewsSection from "@/components/ReviewsSection";
import ValueSection from "@/components/ValueSection";

import ReservationPopup from "@/components/ReservationPopup";
import { useState, useEffect } from "react";

const Index = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Slideshow images from images folder - High-quality café images
  const heroImages = [
    "/envato-labs-ai-02cc4cca-55a0-417c-b0b3-b107e6e7f876.jpg",
    "/envato-labs-ai-118ec6d7-1d07-46d9-96d8-1b1e2c842dda.jpg",
    "/envato-labs-ai-469d25c0-91ca-45a5-98c4-dfdcad610bd3.jpg",
    "/envato-labs-ai-b93cf908-575d-4887-a819-777406b2a22f.jpg",
    "/envato-labs-ai-c326edd3-2fff-4696-a61e-f39179b628c5.jpg",
    "/envato-labs-ai-f62fd7d2-3aef-4a46-a735-0113ab162b49.jpg",
    "/envato-labs-ai-ff3a457e-41e2-4c95-a30c-077e8ba9e163.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Auto-advance slideshow every 6 seconds (slightly longer for better viewing)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    }, 6000);

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
        {/* Using high-quality café images from the images folder for better visual appeal */}
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






        <div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 transition-transform duration-300"
          style={{
            transform: `translateY(${scrollY * 0.3}px)` // Subtle parallax effect
          }}
        >
          <div className="mb-6 animate-slide-in-up">
            <Coffee className="h-20 w-20 mx-auto mb-4 text-amber-100" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-up animation-delay-200 text-amber-100">
            <span className="text-4xl">🦁</span> Lion's Café <span className="text-4xl">☕</span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4 animate-slide-in-up animation-delay-300 text-amber-200">
            <span className="text-xl">✨</span> Brewed Bold. Served with Pride. <span className="text-xl">✨</span>
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-slide-in-up animation-delay-400 leading-relaxed text-amber-100 font-medium">
            <span className="text-lg">🌟</span> Exceptional coffee and warm hospitality in the heart of the city <span className="text-lg">🏙️</span>
          </p>
          <div className="flex flex-row gap-6 justify-center animate-slide-in-up animation-delay-500">
            <Button asChild size="lg" className="bg-transparent border-2 border-amber-200/80 text-amber-100 hover:bg-amber-100/20 hover:border-amber-100 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
              <Link to="/menu">🍽️ Our Menu</Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-amber-200/80 text-amber-100 hover:bg-amber-100/20 hover:border-amber-100 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
              <Link to="/qr-order">📱 Scan to Order</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Menu Highlights */}
      <FeaturedMenu />

      {/* Customer Reviews */}
      <ReviewsSection />

      {/* Value Section */}
      <ValueSection />



      {/* Call to Action */}
      <section className="py-16 bg-coffee-brown text-cream-beige">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-caveat text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Ready for Your Perfect Cup?
          </h2>
          <p className="font-caveat text-2xl md:text-3xl mb-8 animate-fade-in animation-delay-200">
            Join us today and discover why Lion's Café is the talk of the town.
          </p>
          <div className="flex flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Button asChild size="sm" className="bg-caramel-orange hover:bg-caramel-orange/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2 text-sm font-semibold">
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button
              size="sm"
              className="bg-transparent border-2 border-cream-beige/80 text-cream-beige hover:bg-cream-beige/20 hover:border-cream-beige backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-6 py-2 text-sm"
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
