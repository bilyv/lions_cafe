
import { Link, useLocation } from "react-router-dom";
import { Coffee, X, ChevronDown, Home, BookOpen, Info, Phone, Calendar, QrCode, Gift } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useScrollPosition } from "@/hooks/use-mobile";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY, isAtTop, isPastHero, scrollDirection } = useScrollPosition();

  const leftNavItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/menu", label: "Menu", icon: BookOpen },
  ];

  const rightNavItems = [
    { path: "/about", label: "About Us", icon: Info },
    { path: "/contact", label: "Contact", icon: Phone },
  ];

  const orderItems = [
    { path: "/booking", label: "Book a Table", icon: Calendar },
    { path: "/qr-order", label: "Scan to Order", icon: QrCode },
    { path: "/loyalty", label: "Loyalty Program", icon: Gift },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Calculate navbar visibility and styles based on scroll position
  const shouldHideNavbar = isPastHero && scrollDirection === 'down';

  // Close mobile menu when navbar hides
  useEffect(() => {
    if (shouldHideNavbar && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [shouldHideNavbar, isMenuOpen]);

  const navbarStyles = {
    transform: shouldHideNavbar
      ? 'translateY(-100%)'
      : isAtTop
        ? 'translateY(0)'
        : `translateY(${Math.min(scrollY * 0.1, 20)}px)`,
    borderRadius: isAtTop ? '0px' : '20px',
    margin: isAtTop ? '0' : '0 20px',
    boxShadow: isAtTop
      ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      : '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    opacity: shouldHideNavbar ? 0 : 1,
  };

  return (
    <nav
      className={`sticky top-0 z-50 relative transition-all duration-500 bg-gradient-to-r from-coffee-brown via-coffee-brown to-black backdrop-blur-sm text-cream-beige`}
      style={navbarStyles}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Left Navigation Items */}
            <div className="flex items-center space-x-4">
              {leftNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive(item.path)
                      ? "bg-white/20 text-white shadow-lg"
                      : "hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <item.icon className="h-3.5 w-3.5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Center Logo */}
            <Link to="/" className="flex items-center space-x-3 text-2xl font-bold hover:scale-105 transition-transform duration-300">
              <Coffee className="h-10 w-10 text-caramel-orange drop-shadow-lg coffee-menu-icon animate-coffee-steam" />
              <span className="bg-gradient-to-r from-caramel-orange to-yellow-400 bg-clip-text text-transparent">
                Lion's Café
              </span>
            </Link>

            {/* Right Navigation Items */}
            <div className="flex items-center space-x-4">
              {rightNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive(item.path)
                      ? "bg-white/20 text-white shadow-lg"
                      : "hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <item.icon className="h-3.5 w-3.5" />
                  <span>{item.label}</span>
                </Link>
              ))}

              {/* Order Now Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-gradient-to-r from-caramel-orange to-yellow-500 hover:from-caramel-orange/90 hover:to-yellow-500/90 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-3 py-1.5 text-xs">
                    Order Now
                    <ChevronDown className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/95 backdrop-blur-sm border-caramel-orange/20 shadow-xl rounded-xl p-2">
                  {orderItems.map((item) => (
                    <DropdownMenuItem key={item.path} asChild>
                      <Link to={item.path} className="flex items-center space-x-2 text-coffee-brown hover:bg-caramel-orange/10 rounded-lg p-2 transition-all duration-200 text-xs">
                        <item.icon className="h-3.5 w-3.5" />
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
            <Link to="/" className="flex items-center space-x-1.5 text-lg font-bold">
              <Coffee className="h-7 w-7 text-caramel-orange coffee-menu-icon animate-coffee-steam" />
              <span className="bg-gradient-to-r from-caramel-orange to-yellow-400 bg-clip-text text-transparent">
                Lion's Café
              </span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:shadow-lg ${
                isMenuOpen ? 'rotate-180 scale-110' : 'hover:scale-110'
              }`}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-caramel-orange transition-transform duration-300" />
              ) : (
                <Coffee className="h-5 w-5 text-caramel-orange coffee-menu-icon" />
              )}
            </button>
          </div>
        </div>


      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Menu Dropdown */}
          <div className="absolute top-full left-0 right-0 bg-gradient-to-r from-coffee-brown via-coffee-brown to-black backdrop-blur-sm text-cream-beige shadow-2xl z-50 lg:hidden animate-slide-in-from-top border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col space-y-1">
                {/* Navigation Items */}
                {[...leftNavItems, ...rightNavItems].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? "bg-white/20 text-white shadow-md"
                        : "hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                ))}

                {/* Mobile Order Section */}
                <div className="mt-4 pt-3 border-t border-white/20">
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
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
