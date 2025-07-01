
import Layout from "@/components/Layout";

const Gallery = () => {
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
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        {/* Header */}
        <div className="bg-amber-900 text-amber-50 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl text-amber-200">
              Take a look at our cozy atmosphere and delicious offerings
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-amber-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visit CTA */}
        <div className="bg-amber-100 py-12">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              Experience It Yourself
            </h3>
            <p className="text-amber-700">
              Pictures don't do justice to the warmth and aroma that awaits you at Lion's Café.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
