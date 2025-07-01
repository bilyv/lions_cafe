
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Coffee, Star, Clock, MapPin } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <Coffee className="h-20 w-20 text-amber-600 mx-auto mb-4" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6">
            Lion's Café
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-2xl mx-auto">
            Where exceptional coffee meets warm hospitality. Experience the perfect blend of flavor and comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link to="/menu">View Our Menu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50">
              <Link to="/contact">Visit Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Why Choose Lion's Café?
            </h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              We're passionate about delivering an exceptional coffee experience that goes beyond just great taste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-amber-50 shadow-md">
              <Star className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Premium Quality</h3>
              <p className="text-amber-700">
                We source the finest beans from sustainable farms and roast them to perfection.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-amber-50 shadow-md">
              <Clock className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Fresh Daily</h3>
              <p className="text-amber-700">
                Our pastries and coffee are prepared fresh every morning with attention to detail.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-amber-50 shadow-md">
              <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Perfect Location</h3>
              <p className="text-amber-700">
                Located in the heart of the city, we're your perfect stop for coffee and relaxation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-900 text-amber-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Perfect Cup?
          </h2>
          <p className="text-xl mb-8 text-amber-200">
            Join us today and discover why Lion's Café is the talk of the town.
          </p>
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
            <Link to="/menu">Explore Our Menu</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
