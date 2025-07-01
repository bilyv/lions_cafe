
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
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 animate-slide-in-up">
          <Card className="shadow-2xl border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
              <CardTitle className="text-lg flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                Live Chat Support
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-sm text-gray-700">
                    Hi! Welcome to Lion's Café! 👋
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    How can we help you today?
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full text-left justify-start text-sm h-auto p-3 hover:bg-orange-50 hover:border-orange-300"
                  >
                    ❓ Menu Questions
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full text-left justify-start text-sm h-auto p-3 hover:bg-orange-50 hover:border-orange-300"
                  >
                    📍 Location & Hours
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full text-left justify-start text-sm h-auto p-3 hover:bg-orange-50 hover:border-orange-300"
                  >
                    🎁 Loyalty Program
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full text-left justify-start text-sm h-auto p-3 hover:bg-orange-50 hover:border-orange-300"
                  >
                    📞 Contact Support
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    Usually responds within a few minutes
                  </p>
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
