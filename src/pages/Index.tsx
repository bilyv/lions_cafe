
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Coffee, Star, Clock, MapPin } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-orange-100 via-red-100 to-yellow-100 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6 animate-slide-in-up">
            <Coffee className="h-20 w-20 text-orange-500 mx-auto mb-4" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6 animate-slide-in-up animation-delay-200">
            Lion's Café
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto animate-slide-in-up animation-delay-300">
            Where exceptional coffee meets warm hospitality. Experience the perfect blend of flavor and comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up animation-delay-400">
            <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/menu">View Our Menu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-orange-500 text-orange-600 hover:bg-orange-50 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/contact">Visit Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
              Why Choose Lion's Café?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in animation-delay-200">
              We're passionate about delivering an exceptional coffee experience that goes beyond just great taste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 shadow-md hover:shadow-lg transition-shadow animate-slide-in-left">
              <Star className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                We source the finest beans from sustainable farms and roast them to perfection.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-red-50 to-yellow-50 shadow-md hover:shadow-lg transition-shadow animate-slide-in-up animation-delay-200">
              <Clock className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fresh Daily</h3>
              <p className="text-gray-600">
                Our pastries and coffee are prepared fresh every morning with attention to detail.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 shadow-md hover:shadow-lg transition-shadow animate-slide-in-right animation-delay-400">
              <MapPin className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Perfect Location</h3>
              <p className="text-gray-600">
                Located in the heart of the city, we're your perfect stop for coffee and relaxation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Ready for Your Perfect Cup?
          </h2>
          <p className="text-xl mb-8 text-orange-100 animate-fade-in animation-delay-200">
            Join us today and discover why Lion's Café is the talk of the town.
          </p>
          <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in animation-delay-400">
            <Link to="/menu">Explore Our Menu</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
