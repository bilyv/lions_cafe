
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: "all", name: "All Photos", count: 12 },
    { id: "events", name: "Events", count: 4 },
    { id: "foods", name: "Foods", count: 4 },
    { id: "neighbourhood", name: "Neighbourhood", count: 4 }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Coffee Tasting Event",
      description: "Monthly coffee tasting with local roasters",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop",
      category: "events"
    },
    {
      id: 2,
      title: "Signature Lion's Blend",
      description: "Our house-roasted coffee beans",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      category: "foods"
    },
    {
      id: 3,
      title: "Artisan Latte Art",
      description: "Every cup is a work of art",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      category: "foods"
    },
    {
      id: 4,
      title: "Historic Downtown Location",
      description: "Located in the heart of the city",
      image: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?w=600&h=400&fit=crop",
      category: "neighbourhood"
    },
    {
      id: 5,
      title: "Community Book Club",
      description: "Weekly book discussions over coffee",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      category: "events"
    },
    {
      id: 6,
      title: "Fresh Pastries",
      description: "Baked fresh daily in our kitchen",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
      category: "foods"
    },
    {
      id: 7,
      title: "Cozy Interior",
      description: "Our warm and welcoming dining space",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop",
      category: "neighbourhood"
    },
    {
      id: 8,
      title: "Live Music Night",
      description: "Local artists perform every Friday",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      category: "events"
    },
    {
      id: 9,
      title: "Avocado Toast Special",
      description: "Fresh avocado on artisan bread",
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&h=400&fit=crop",
      category: "foods"
    },
    {
      id: 10,
      title: "Garden View",
      description: "Beautiful outdoor seating area",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      category: "neighbourhood"
    },
    {
      id: 11,
      title: "Art Exhibition Opening",
      description: "Showcasing local artists monthly",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      category: "events"
    },
    {
      id: 12,
      title: "Street View",
      description: "Bustling neighborhood atmosphere",
      image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600&h=400&fit=crop",
      category: "neighbourhood"
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % filteredItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [filteredItems.length]);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-cream-beige">
        {/* Header */}
        <div 
          className="relative text-white py-16 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop")',
            minHeight: '300px'
          }}
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">Gallery</h1>
            <p className="text-xl animate-slide-in-up animation-delay-200 text-cream-beige">
              Explore our vibrant café life through moments and memories
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentSlideIndex(0);
                }}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`${
                  activeCategory === category.id
                    ? "bg-caramel-orange hover:bg-caramel-orange/90 text-white"
                    : "border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-cream-beige"
                } transition-all duration-300`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>

          {/* Slideshow */}
          <div className="relative mb-12 max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
              >
                {filteredItems.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-96 md:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-200">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {filteredItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlideIndex 
                        ? "bg-white scale-125" 
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                  isVisible 
                    ? index % 3 === 0 
                      ? 'animate-slide-in-left' 
                      : index % 3 === 1 
                      ? 'animate-slide-in-up' 
                      : 'animate-slide-in-right'
                    : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
                onClick={() => goToSlide(filteredItems.indexOf(item))}
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-200">
                    {item.description}
                  </p>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2 group-hover:transition-colors text-coffee-brown">
                    {item.title}
                  </h3>
                  <p className="text-muted-olive">
                    {item.description}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 bg-light-coffee text-coffee-brown text-sm rounded-full capitalize">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visit CTA */}
        <div className="py-12 bg-light-coffee">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold mb-4 animate-fade-in text-coffee-brown">
              Experience It Yourself
            </h3>
            <p className="animate-fade-in animation-delay-200 text-espresso-black">
              Pictures don't do justice to the warmth and aroma that awaits you at Lion's Café.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
