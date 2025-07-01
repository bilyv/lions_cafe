
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: "Cozy Interior",
      description: "Our warm and welcoming dining space",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Fresh Coffee Beans",
      description: "Premium beans roasted to perfection",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Artisan Latte Art",
      description: "Every cup is a work of art",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Relaxing Atmosphere",
      description: "Perfect spot for meetings or relaxation",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Garden View",
      description: "Beautiful outdoor seating area",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Fresh Pastries",
      description: "Baked fresh daily in our kitchen",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">Gallery</h1>
            <p className="text-xl text-orange-100 animate-slide-in-up animation-delay-200">
              Take a look at our cozy atmosphere and delicious offerings
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visit CTA */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 py-12">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 animate-fade-in">
              Experience It Yourself
            </h3>
            <p className="text-gray-700 animate-fade-in animation-delay-200">
              Pictures don't do justice to the warmth and aroma that awaits you at Lion's Café.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
