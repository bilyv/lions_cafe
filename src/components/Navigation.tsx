
import { Link, useLocation } from "react-router-dom";
import { Coffee, Menu, X, ChevronDown, Home, BookOpen, Image, Info, Phone, ShoppingCart, Calendar, QrCode } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const leftNavItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/menu", label: "Menu", icon: BookOpen },
    { path: "/gallery", label: "Gallery", icon: Image },
  ];

  const rightNavItems = [
    { path: "/about", label: "About Us", icon: Info },
    { path: "/contact", label: "Contact", icon: Phone },
  ];

  const orderItems = [
    { path: "/order", label: "Order Online", icon: ShoppingCart },
    { path: "/booking", label: "Book a Table", icon: Calendar },
    { path: "/qr-order", label: "Order by QR Scan", icon: QrCode },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-coffee-brown to-espresso-black text-cream-beige shadow-xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Left Navigation Items */}
            <div className="flex items-center space-x-8">
              {leftNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive(item.path)
                      ? "bg-white/20 text-white shadow-lg"
                      : "hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Center Logo */}
            <Link to="/" className="flex items-center space-x-3 text-2xl font-bold hover:scale-105 transition-transform duration-300">
              <Coffee className="h-10 w-10 text-caramel-orange drop-shadow-lg" />
              <span className="bg-gradient-to-r from-caramel-orange to-yellow-400 bg-clip-text text-transparent">
                Lion's Café
              </span>
            </Link>

            {/* Right Navigation Items */}
            <div className="flex items-center space-x-8">
              {rightNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive(item.path)
                      ? "bg-white/20 text-white shadow-lg"
                      : "hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
              
              {/* Order Now Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-gradient-to-r from-caramel-orange to-yellow-500 hover:from-caramel-orange/90 hover:to-yellow-500/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Order Now
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/95 backdrop-blur-sm border-caramel-orange/20 shadow-xl rounded-xl p-2">
                  {orderItems.map((item) => (
                    <DropdownMenuItem key={item.path} asChild>
                      <Link to={item.path} className="flex items-center space-x-2 text-coffee-brown hover:bg-caramel-orange/10 rounded-lg p-2 transition-all duration-200">
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile Logo and Menu Button */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
              <Coffee className="h-8 w-8 text-caramel-orange" />
              <span className="bg-gradient-to-r from-caramel-orange to-yellow-400 bg-clip-text text-transparent">
                Lion's Café
              </span>
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-caramel-orange p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-white/10 mt-4 pt-4">
            <div className="flex flex-col space-y-1">
              {/* Navigation Items */}
              {[...leftNavItems, ...rightNavItems].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-white/20 text-white shadow-lg"
                      : "hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
              
              {/* Mobile Order Section */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-caramel-orange font-semibold mb-3 px-4 text-sm uppercase tracking-wide">
                  Order Now
                </p>
                <div className="space-y-1">
                  {orderItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-200"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
