
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Customer Care Person Image - Behind the chat icon */}
          {!isOpen && (
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 animate-scale-up-down">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
                alt="Customer Care Representative"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Chat Button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-up-down relative z-10"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MessageCircle className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Chat Window - Compact & Iconic */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-72 animate-scale-in">
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-cream-beige/95 to-amber-50/95 backdrop-blur-sm overflow-hidden">
            {/* Compact Header */}
            <CardHeader className="bg-gradient-to-r from-coffee-brown to-amber-800 text-cream-beige p-3 relative overflow-hidden">
              {/* Coffee Bean Decoration */}
              <div className="absolute top-1 right-1 w-2 h-3 bg-amber-400/20 rounded-full transform rotate-12"></div>

              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full border-2 border-amber-300 shadow-lg overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
                      alt="Customer Care Representative"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Online Status Indicator */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border border-white animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-sm font-bold text-amber-100 flex items-center">
                    <MessageCircle className="h-3 w-3 mr-1" />
                    Sarah
                  </CardTitle>
                  <p className="text-xs text-amber-200">☕ Online Now</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {/* Compact Welcome Message */}
              <div className="p-3 border-b border-amber-200/50">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-amber-200/30 relative">
                  {/* Speech Bubble Tail */}
                  <div className="absolute -bottom-1 left-4 w-3 h-3 bg-white/80 transform rotate-45 border-r border-b border-amber-200/30"></div>

                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-caramel-orange to-amber-600 flex items-center justify-center shadow-sm">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-coffee-brown font-medium text-xs mb-1">
                        Hi! Welcome to Lion's Café! ☕
                      </p>
                      <p className="text-espresso-black/80 text-xs">
                        How can I help you today?
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Iconic Quick Actions */}
              <div className="p-3 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    className="h-auto p-2 bg-white/60 backdrop-blur-sm border-amber-300/50 hover:bg-caramel-orange/10 hover:border-caramel-orange/50 transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-sm">☕</span>
                      </div>
                      <p className="text-xs font-medium text-coffee-brown">Menu</p>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-auto p-2 bg-white/60 backdrop-blur-sm border-amber-300/50 hover:bg-caramel-orange/10 hover:border-caramel-orange/50 transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-sm">📍</span>
                      </div>
                      <p className="text-xs font-medium text-coffee-brown">Location</p>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-auto p-2 bg-white/60 backdrop-blur-sm border-amber-300/50 hover:bg-caramel-orange/10 hover:border-caramel-orange/50 transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-sm">🎁</span>
                      </div>
                      <p className="text-xs font-medium text-coffee-brown">Rewards</p>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-auto p-2 bg-white/60 backdrop-blur-sm border-amber-300/50 hover:bg-caramel-orange/10 hover:border-caramel-orange/50 transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-sm">💬</span>
                      </div>
                      <p className="text-xs font-medium text-coffee-brown">Chat</p>
                    </div>
                  </Button>
                </div>
              </div>

              {/* Compact Footer */}
              <div className="bg-gradient-to-r from-amber-100/50 to-orange-100/50 p-2 text-center border-t border-amber-200/30">
                <div className="flex items-center justify-center space-x-1 text-coffee-brown/80">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-xs">
                    Responds in 2-3 min
                  </p>
                  <span className="text-caramel-orange text-xs">☕</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatButton;
