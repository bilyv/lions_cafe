
import { Coffee, Phone, Mail, MapPin, Clock, Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-coffee-brown via-amber-900 to-espresso-black text-cream-beige relative overflow-hidden">
      {/* Coffee Bean Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-6 h-8 bg-amber-200 rounded-full transform rotate-12"></div>
        <div className="absolute top-32 right-20 w-4 h-6 bg-cream-beige rounded-full transform -rotate-12"></div>
        <div className="absolute bottom-20 left-32 w-8 h-10 bg-caramel-orange rounded-full transform rotate-45"></div>
        <div className="absolute bottom-40 right-16 w-5 h-7 bg-amber-300 rounded-full transform -rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-4 bg-yellow-200 rounded-full transform rotate-90"></div>
        <div className="absolute top-1/3 right-1/3 w-7 h-9 bg-orange-200 rounded-full transform -rotate-30"></div>
        <div className="absolute bottom-1/3 left-1/2 w-4 h-5 bg-amber-400 rounded-full transform rotate-60"></div>
      </div>

      {/* Coffee Steam Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <div className="w-0.5 h-8 bg-gradient-to-t from-transparent via-cream-beige/10 to-transparent animate-pulse"></div>
        <div className="w-0.5 h-6 bg-gradient-to-t from-transparent via-cream-beige/8 to-transparent animate-pulse animation-delay-500 ml-1.5"></div>
        <div className="w-0.5 h-10 bg-gradient-to-t from-transparent via-cream-beige/6 to-transparent animate-pulse animation-delay-1000 ml-3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-caramel-orange to-amber-600 rounded-full p-1.5 shadow-lg">
                <Coffee className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-caramel-orange to-yellow-400 bg-clip-text text-transparent">
                  Lion's Café
                </h2>
                <p className="text-xs text-amber-200 font-medium">Brewed Bold. Served with Pride.</p>
              </div>
            </div>
            <p className="text-amber-100 leading-relaxed max-w-md text-sm">
              ☕ Serving the finest coffee and creating memorable experiences since our beginning.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-3">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-full p-1.5 hover:scale-110 transition-transform duration-300 cursor-pointer group">
                <Instagram className="h-4 w-4 text-white group-hover:animate-pulse" />
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-full p-1.5 hover:scale-110 transition-transform duration-300 cursor-pointer group">
                <Facebook className="h-4 w-4 text-white group-hover:animate-pulse" />
              </div>
              <div className="bg-gradient-to-r from-sky-500 to-blue-500 rounded-full p-1.5 hover:scale-110 transition-transform duration-300 cursor-pointer group">
                <Twitter className="h-4 w-4 text-white group-hover:animate-pulse" />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-caramel-orange to-amber-600 rounded-full p-1">
                <Phone className="h-3 w-3 text-white" />
              </div>
              <h3 className="text-base font-semibold text-amber-100">Get In Touch</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 group hover:text-caramel-orange transition-colors duration-300">
                <div className="bg-amber-600/20 rounded-full p-1.5 group-hover:bg-caramel-orange/30 transition-colors duration-300">
                  <Phone className="h-3 w-3 text-caramel-orange" />
                </div>
                <div>
                  <p className="text-xs text-amber-200">Call us</p>
                  <p className="font-medium text-sm">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 group hover:text-caramel-orange transition-colors duration-300">
                <div className="bg-amber-600/20 rounded-full p-1.5 group-hover:bg-caramel-orange/30 transition-colors duration-300">
                  <Mail className="h-3 w-3 text-caramel-orange" />
                </div>
                <div>
                  <p className="text-xs text-amber-200">Email us</p>
                  <p className="font-medium text-sm">hello@lionscafe.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 group hover:text-caramel-orange transition-colors duration-300">
                <div className="bg-amber-600/20 rounded-full p-1.5 group-hover:bg-caramel-orange/30 transition-colors duration-300">
                  <MapPin className="h-3 w-3 text-caramel-orange" />
                </div>
                <div>
                  <p className="text-xs text-amber-200">Visit us</p>
                  <p className="font-medium text-sm">123 Coffee Street, Brew City</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-full p-1">
                <Clock className="h-3 w-3 text-white" />
              </div>
              <h3 className="text-base font-semibold text-amber-100">Opening Hours</h3>
            </div>
            <div className="space-y-2">
              <div className="bg-amber-800/20 rounded-md p-2 border border-amber-600/20">
                <div className="flex justify-between items-center">
                  <span className="text-amber-200 text-xs">Monday - Friday</span>
                  <span className="font-medium text-cream-beige text-xs">6:00 AM - 8:00 PM</span>
                </div>
              </div>
              <div className="bg-amber-800/20 rounded-md p-2 border border-amber-600/20">
                <div className="flex justify-between items-center">
                  <span className="text-amber-200 text-xs">Saturday</span>
                  <span className="font-medium text-cream-beige text-xs">7:00 AM - 9:00 PM</span>
                </div>
              </div>
              <div className="bg-amber-800/20 rounded-md p-2 border border-amber-600/20">
                <div className="flex justify-between items-center">
                  <span className="text-amber-200 text-xs">Sunday</span>
                  <span className="font-medium text-cream-beige text-xs">8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-amber-600/30 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex items-center space-x-2 text-amber-200">
              <Heart className="h-3 w-3 text-red-400 animate-pulse" />
              <p className="text-xs">
                Made with love and the finest coffee beans
              </p>
              <Coffee className="h-3 w-3 text-caramel-orange" />
            </div>

            <div className="text-center md:text-right">
              <p className="text-amber-300 text-xs">
                &copy; 2025 Lion's Café. All rights reserved.
              </p>
              <p className="text-xs text-amber-400">
                Brewing excellence since day one ☕
              </p>
            </div>
          </div>

          {/* Coffee Bean Decoration */}
          <div className="flex justify-center mt-3 space-x-1">
            <div className="w-1.5 h-2 bg-amber-400/40 rounded-full transform rotate-12 animate-pulse"></div>
            <div className="w-2 h-2.5 bg-caramel-orange/40 rounded-full transform -rotate-12 animate-pulse animation-delay-300"></div>
            <div className="w-1.5 h-2 bg-amber-400/40 rounded-full transform rotate-45 animate-pulse animation-delay-600"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

