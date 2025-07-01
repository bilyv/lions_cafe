
import { Link, useLocation } from "react-router-dom";
import { Coffee, Menu, X, ChevronDown } from "lucide-react";
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
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
  ];

  const rightNavItems = [
    { path: "/gallery", label: "Gallery" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-coffee-brown text-cream-beige shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Left Navigation Items */}
            <div className="flex items-center space-x-6">
              {leftNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-white/20 text-white"
                      : "hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Center Logo */}
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
              <Coffee className="h-8 w-8 text-caramel-orange" />
              <span>Lion's Café</span>
            </Link>

            {/* Right Navigation Items */}
            <div className="flex items-center space-x-6">
              {rightNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-white/20 text-white"
                      : "hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Order Now Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-caramel-orange hover:bg-caramel-orange/90 text-white">
                    Order Now
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border-caramel-orange/20">
                  <DropdownMenuItem asChild>
                    <Link to="/order" className="text-coffee-brown hover:bg-caramel-orange/10">
                      Order Online
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/booking" className="text-coffee-brown hover:bg-caramel-orange/10">
                      Book a Table
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/qr-order" className="text-coffee-brown hover:bg-caramel-orange/10">
                      Order by QR Scan
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile Logo and Menu Button */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
              <Coffee className="h-8 w-8 text-caramel-orange" />
              <span>Lion's Café</span>
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-caramel-orange p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {[...leftNavItems, ...rightNavItems].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-white/20 text-white"
                      : "hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Order Options */}
              <div className="mt-2 mx-3 space-y-2">
                <p className="text-caramel-orange font-medium">Order Now:</p>
                <Link
                  to="/order"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 hover:text-white"
                >
                  Order Online
                </Link>
                <Link
                  to="/booking"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 hover:text-white"
                >
                  Book a Table
                </Link>
                <Link
                  to="/qr-order"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 hover:text-white"
                >
                  Order by QR Scan
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
