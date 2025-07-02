
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Clock, CreditCard, Truck } from "lucide-react";

const OrderOnline = () => {
  return (
    <Layout>
      <div className="min-h-screen" style={{ backgroundColor: 'hsl(42, 15%, 96%)' }}>
        {/* Hero Section */}
        <div 
          className="relative text-white py-16 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop")',
            minHeight: '300px'
          }}
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">Order Online</h1>
            <p className="text-xl animate-slide-in-up animation-delay-200" style={{ color: 'hsl(42, 15%, 96%)' }}>
              Skip the wait and get your favorites delivered or ready for pickup
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'hsl(17, 41%, 31%)' }}>
            How Online Ordering Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-caramel-orange rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>
                Browse Menu
              </h3>
              <p style={{ color: 'hsl(0, 0%, 40%)' }}>
                Explore our full menu and select your favorite drinks and snacks
              </p>
            </div>

            <div className="text-center">
              <div className="bg-caramel-orange rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>
                Choose Time
              </h3>
              <p style={{ color: 'hsl(0, 0%, 40%)' }}>
                Select pickup or delivery time that works best for your schedule
              </p>
            </div>

            <div className="text-center">
              <div className="bg-caramel-orange rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>
                Pay Securely
              </h3>
              <p style={{ color: 'hsl(0, 0%, 40%)' }}>
                Complete your payment online with our secure checkout system
              </p>
            </div>

            <div className="text-center">
              <div className="bg-caramel-orange rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>
                Enjoy
              </h3>
              <p style={{ color: 'hsl(0, 0%, 40%)' }}>
                Pick up your order or have it delivered fresh to your door
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-caramel-orange hover:bg-caramel-orange/90 text-white">
              Start Your Order
            </Button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16" style={{ backgroundColor: 'hsl(20, 20%, 82%)' }}>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'hsl(17, 41%, 31%)' }}>
              Why Order Online?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>Save Time</h4>
                <p style={{ color: 'hsl(0, 0%, 11%)' }}>Skip the line and have your order ready when you arrive</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>Contactless</h4>
                <p style={{ color: 'hsl(0, 0%, 11%)' }}>Safe and convenient ordering from anywhere</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>Rewards</h4>
                <p style={{ color: 'hsl(0, 0%, 11%)' }}>Earn loyalty points with every online order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderOnline;
