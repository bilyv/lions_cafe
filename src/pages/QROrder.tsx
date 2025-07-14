
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { QrCode, Smartphone, Coffee, Zap } from "lucide-react";

const QROrder = () => {
  return (
    <Layout>
      <div className="min-h-screen" style={{ backgroundColor: 'hsl(42, 15%, 96%)' }}>
        {/* Hero Section */}
        <div
          className="relative text-white py-16 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/waiter1.jpg")',
            minHeight: '300px'
          }}
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">Order by QR Scan</h1>
            <p className="text-xl animate-slide-in-up animation-delay-200" style={{ color: 'hsl(42, 15%, 96%)' }}>
              Fast, contactless ordering right from your table
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'hsl(17, 41%, 31%)' }}>
            How QR Ordering Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-caramel-orange rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <QrCode className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>
                Scan QR Code
              </h3>
              <p style={{ color: 'hsl(0, 0%, 40%)' }}>
                Use your phone's camera to scan the QR code on your table
              </p>
            </div>

            <div className="text-center">
              <div className="bg-caramel-orange rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>
                Browse on Phone
              </h3>
              <p style={{ color: 'hsl(0, 0%, 40%)' }}>
                View our full menu and customize your order on your device
              </p>
            </div>

            <div className="text-center">
              <div className="bg-caramel-orange rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>
                Order & Pay
              </h3>
              <p style={{ color: 'hsl(0, 0%, 40%)' }}>
                Place your order and pay securely through your phone
              </p>
            </div>

            <div className="text-center">
              <div className="bg-caramel-orange rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>
                Served to Table
              </h3>
              <p style={{ color: 'hsl(0, 0%, 40%)' }}>
                Sit back and relax while we bring your order directly to you
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto mb-8">
              <div className="bg-black p-4 rounded-lg mb-4">
                <QrCode className="h-32 w-32 mx-auto text-white" />
              </div>
              <p className="text-sm" style={{ color: 'hsl(0, 0%, 40%)' }}>
                Sample QR Code - Scan this to try our demo menu
              </p>
            </div>
            <Button size="lg" className="bg-caramel-orange hover:bg-caramel-orange/90 text-white">
              Try Demo Order
            </Button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16" style={{ backgroundColor: 'hsl(20, 20%, 82%)' }}>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'hsl(17, 41%, 31%)' }}>
              Benefits of QR Ordering
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>Contactless</h4>
                <p style={{ color: 'hsl(0, 0%, 11%)' }}>No need to handle physical menus or wait for service</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>Instant</h4>
                <p style={{ color: 'hsl(0, 0%, 11%)' }}>Your order goes straight to the kitchen immediately</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>Convenient</h4>
                <p style={{ color: 'hsl(0, 0%, 11%)' }}>Perfect for busy schedules and group orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QROrder;
