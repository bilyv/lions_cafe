
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Coffee, Heart, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-mobile";

const FeaturedMenu = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { isIntersecting, intersectionRatio } = useIntersectionObserver(sectionRef, {
    threshold: [0, 0.2, 0.5, 0.8, 1],
    rootMargin: '-100px 0px -100px 0px'
  });

  const featuredItems = [
    {
      id: 1,
      name: "Signature Lion's Blend",
      description: "Our house-roasted coffee with notes of chocolate and caramel",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Artisan Croissant",
      description: "Buttery, flaky pastry baked fresh daily",
      price: "$3.25",
      image: "https://images.unsplash.com/photo-1555507036-ab794f4ade75?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Caramel Macchiato",
      description: "Rich espresso with steamed milk and caramel drizzle",
      price: "$5.75",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Avocado Toast",
      description: "Fresh avocado on artisan bread with herbs and lime",
      price: "$8.50",
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      name: "Berry Parfait",
      description: "Greek yogurt layered with fresh berries and granola",
      price: "$6.25",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=200&fit=crop"
    },
    {
      id: 6,
      name: "Iced Vanilla Latte",
      description: "Smooth espresso with vanilla and cold milk over ice",
      price: "$4.75",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=200&fit=crop"
    },
    {
      id: 7,
      name: "Chocolate Muffin",
      description: "Rich chocolate muffin with chocolate chips",
      price: "$3.75",
      image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=300&h=200&fit=crop"
    },
    {
      id: 8,
      name: "Caesar Salad",
      description: "Fresh greens with parmesan and signature dressing",
      price: "$11.25",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop"
    }
  ];

  // Duplicate items for seamless loop
  const duplicatedItems = [...featuredItems, ...featuredItems];

  // Calculate section styles based on intersection (removed scaling effect)
  const sectionStyles = {
    transform: isIntersecting && intersectionRatio > 0.3
      ? `translateZ(50px)`
      : 'translateZ(0)',
    zIndex: isIntersecting && intersectionRatio > 0.3 ? 30 : 10,
    boxShadow: isIntersecting && intersectionRatio > 0.3
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
      : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-cream-beige relative transition-all duration-700 ease-out"
      style={sectionStyles}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcoming Description Section */}
        <div className="text-center mb-16">
          <div className="mb-8 animate-fade-in">
            <Coffee className="h-16 w-16 mx-auto mb-6 text-caramel-orange" />
          </div>
          
          <h2 className="font-caveat text-5xl md:text-6xl lg:text-7xl font-bold text-coffee-brown mb-6 animate-slide-in-up">
            Welcome to Lion's Café
          </h2>

          <div className="max-w-4xl mx-auto mb-8 animate-slide-in-up animation-delay-200">
            <p className="font-caveat text-2xl md:text-3xl lg:text-4xl text-coffee-brown mb-6 font-semibold">
              Where Every Cup Tells a Story
            </p>
            <p className="font-caveat text-xl md:text-2xl text-espresso-black leading-relaxed mb-6 font-medium">
              Step into our warm embrace and discover a world where premium coffee meets exceptional hospitality.
              At Lion's Café, we believe that great coffee is more than just a beverage – it's a moment of connection,
              a pause in your day, and a celebration of life's simple pleasures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center animate-slide-in-left animation-delay-300">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-md">
                <Coffee className="h-8 w-8 text-caramel-orange" />
              </div>
              <h3 className="font-semibold text-coffee-brown mb-2">Premium Quality</h3>
              <p className="text-sm text-espresso-black">Carefully sourced beans roasted to perfection</p>
            </div>
            
            <div className="text-center animate-slide-in-up animation-delay-400">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-md">
                <Heart className="h-8 w-8 text-caramel-orange" />
              </div>
              <h3 className="font-semibold text-coffee-brown mb-2">Made with Love</h3>
              <p className="text-sm text-espresso-black">Every drink crafted with passion and care</p>
            </div>
            
            <div className="text-center animate-slide-in-right animation-delay-500">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-md">
                <Users className="h-8 w-8 text-caramel-orange" />
              </div>
              <h3 className="font-semibold text-coffee-brown mb-2">Community First</h3>
              <p className="text-sm text-espresso-black">Building connections one cup at a time</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-coffee-brown to-caramel-orange p-1 rounded-lg inline-block animate-fade-in animation-delay-600">
            <div className="bg-cream-beige px-8 py-4 rounded-md">
              <p className="text-coffee-brown font-semibold text-lg">
                "Your perfect cup awaits – let us craft something special just for you"
              </p>
            </div>
          </div>
        </div>

        {/* Featured Menu Items */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-coffee-brown mb-4">
            Featured Menu Highlights
          </h3>
          <p className="text-lg text-espresso-black max-w-2xl mx-auto">
            Discover our most popular items, crafted with care and served with pride
          </p>
        </div>

        {/* Horizontal Slideshow Container */}
        <div className="relative overflow-hidden mb-8">
          <div
            className="flex animate-slide-horizontal"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              width: `${duplicatedItems.length * 320}px`,
              animationPlayState: isHovered ? 'paused' : 'running'
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-80 mx-2"
              >
                <Card
                  className={`hover:shadow-2xl transition-all duration-300 bg-white border-light-coffee transform ${
                    isHovered ? 'hover:scale-105 hover:z-10 hover:-translate-y-2' : ''
                  }`}
                >
                  <CardContent className="p-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-coffee-brown mb-2">{item.name}</h3>
                      <p className="text-sm text-espresso-black mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-caramel-orange">{item.price}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-caramel-orange hover:bg-caramel-orange/90 text-white">
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
