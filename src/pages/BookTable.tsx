
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, CheckCircle } from "lucide-react";
import ReservationPopup from "@/components/ReservationPopup";
import { useState } from "react";

const BookTable = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <Layout>
      <div className="min-h-screen" style={{ backgroundColor: 'hsl(42, 15%, 96%)' }}>
        {/* Hero Section */}
        <div 
          className="relative text-white py-16 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop")',
            minHeight: '300px'
          }}
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">Book a Table</h1>
            <p className="text-xl animate-slide-in-up animation-delay-200" style={{ color: 'hsl(42, 15%, 96%)' }}>
              Reserve your spot at Lion's Café for the perfect dining experience
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'hsl(17, 41%, 31%)' }}>
            How Table Booking Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-caramel-orange rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>
                Select Date & Time
              </h3>
              <p style={{ color: 'hsl(0, 0%, 40%)' }}>
                Choose your preferred date and time from our available slots
              </p>
            </div>

            <div className="text-center">
              <div className="bg-caramel-orange rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>
                Party Size
              </h3>
              <p style={{ color: 'hsl(0, 0%, 40%)' }}>
                Tell us how many guests will be joining you for the meal
              </p>
            </div>

            <div className="text-center">
              <div className="bg-caramel-orange rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>
                Table Preference
              </h3>
              <p style={{ color: 'hsl(0, 0%, 40%)' }}>
                Request specific seating areas or special accommodations
              </p>
            </div>

            <div className="text-center">
              <div className="bg-caramel-orange rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>
                Confirmation
              </h3>
              <p style={{ color: 'hsl(0, 0%, 40%)' }}>
                Receive instant confirmation and reminders for your reservation
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-caramel-orange hover:bg-caramel-orange/90 text-white"
              onClick={() => setIsReservationOpen(true)}
            >
              Reserve Your Table
            </Button>
          </div>
        </div>

        {/* Reservation Info */}
        <div className="py-16" style={{ backgroundColor: 'hsl(20, 20%, 82%)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-center mb-8" style={{ color: 'hsl(17, 41%, 31%)' }}>
              Reservation Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4" style={{ color: 'hsl(17, 41%, 31%)' }}>Operating Hours</h4>
                <ul className="space-y-2" style={{ color: 'hsl(0, 0%, 11%)' }}>
                  <li>Monday - Friday: 7:00 AM - 9:00 PM</li>
                  <li>Saturday: 8:00 AM - 10:00 PM</li>
                  <li>Sunday: 8:00 AM - 8:00 PM</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4" style={{ color: 'hsl(17, 41%, 31%)' }}>Reservation Policy</h4>
                <ul className="space-y-2" style={{ color: 'hsl(0, 0%, 11%)' }}>
                  <li>• Tables held for 15 minutes past reservation time</li>
                  <li>• Free cancellation up to 2 hours before</li>
                  <li>• Large groups (8+) may require deposit</li>
                  <li>• Special dietary needs accommodated</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Reservation Popup */}
        <ReservationPopup
          isOpen={isReservationOpen}
          onClose={() => setIsReservationOpen(false)}
        />
      </div>
    </Layout>
  );
};

export default BookTable;
