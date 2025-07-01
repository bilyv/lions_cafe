
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Coffee, Star, Clock, MapPin } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center" style={{ backgroundColor: 'hsl(42, 15%, 96%)' }}>
        <div className="absolute inset-0" style={{ backgroundColor: 'hsl(20, 20%, 82%, 0.3)' }}></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6 animate-slide-in-up">
            <Coffee className="h-20 w-20 mx-auto mb-4" style={{ color: 'hsl(25, 69%, 45%)' }} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-up animation-delay-200" style={{ color: 'hsl(17, 41%, 31%)' }}>
            Lion's Café
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-in-up animation-delay-300" style={{ color: 'hsl(0, 0%, 11%)' }}>
            Where exceptional coffee meets warm hospitality. Experience the perfect blend of flavor and comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up animation-delay-400">
            <Button asChild size="lg" className="text-white shadow-lg hover:shadow-xl transition-all duration-300" style={{ backgroundColor: 'hsl(25, 69%, 45%)' }}>
              <Link to="/menu">View Our Menu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300" style={{ borderColor: 'hsl(17, 41%, 31%)', color: 'hsl(17, 41%, 31%)' }}>
              <Link to="/contact">Visit Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in" style={{ color: 'hsl(17, 41%, 31%)' }}>
              Why Choose Lion's Café?
            </h2>
            <p className="text-lg max-w-2xl mx-auto animate-fade-in animation-delay-200" style={{ color: 'hsl(0, 0%, 40%)' }}>
              We're passionate about delivering an exceptional coffee experience that goes beyond just great taste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slide-in-left" style={{ backgroundColor: 'hsl(42, 15%, 96%)' }}>
              <Star className="h-12 w-12 mx-auto mb-4" style={{ color: 'hsl(25, 69%, 45%)' }} />
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>Premium Quality</h3>
              <p style={{ color: 'hsl(0, 0%, 40%)' }}>
                We source the finest beans from sustainable farms and roast them to perfection.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slide-in-up animation-delay-200" style={{ backgroundColor: 'hsl(20, 20%, 82%)' }}>
              <Clock className="h-12 w-12 mx-auto mb-4" style={{ color: 'hsl(17, 41%, 31%)' }} />
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>Fresh Daily</h3>
              <p style={{ color: 'hsl(0, 0%, 40%)' }}>
                Our pastries and coffee are prepared fresh every morning with attention to detail.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slide-in-right animation-delay-400" style={{ backgroundColor: 'hsl(42, 15%, 96%)' }}>
              <MapPin className="h-12 w-12 mx-auto mb-4" style={{ color: 'hsl(53, 31%, 40%)' }} />
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>Perfect Location</h3>
              <p style={{ color: 'hsl(0, 0%, 40%)' }}>
                Located in the heart of the city, we're your perfect stop for coffee and relaxation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-white" style={{ backgroundColor: 'hsl(17, 41%, 31%)' }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Ready for Your Perfect Cup?
          </h2>
          <p className="text-xl mb-8 animate-fade-in animation-delay-200" style={{ color: 'hsl(42, 15%, 96%)' }}>
            Join us today and discover why Lion's Café is the talk of the town.
          </p>
          <Button asChild size="lg" className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in animation-delay-400" style={{ color: 'hsl(17, 41%, 31%)' }}>
            <Link to="/menu">Explore Our Menu</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

