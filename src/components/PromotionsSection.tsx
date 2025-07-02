
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pizza, Calendar, Coffee } from "lucide-react";

const PromotionsSection = () => {
  // Single weekend pizza promotion
  const promotion = {
    id: 1,
    title: "Weekend Pizza Special",
    description: "Buy one pizza at $12 and get one absolutely free!",
    details: "Available only on Saturday & Sunday",
    discount: "BUY 1 GET 1 FREE",
    icon: Pizza,
    color: "bg-gradient-to-r from-red-500 to-orange-500",
    badge: "Weekend Only",
    price: "$12"
  };

  return (
    <section className="py-16 bg-gradient-to-br from-coffee-brown via-amber-900 to-espresso-black relative overflow-hidden">
      {/* Coffee Bean Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-6 h-8 bg-amber-200 rounded-full transform rotate-12"></div>
        <div className="absolute top-32 right-20 w-4 h-6 bg-cream-beige rounded-full transform -rotate-12"></div>
        <div className="absolute bottom-20 left-32 w-8 h-10 bg-caramel-orange rounded-full transform rotate-45"></div>
        <div className="absolute bottom-40 right-16 w-5 h-7 bg-amber-300 rounded-full transform -rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-4 bg-yellow-200 rounded-full transform rotate-90"></div>
        <div className="absolute top-1/3 right-1/3 w-7 h-9 bg-orange-200 rounded-full transform -rotate-30"></div>
      </div>

      {/* Coffee Steam Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-20 bg-gradient-to-t from-transparent via-cream-beige/20 to-transparent animate-pulse"></div>
        <div className="w-1 h-16 bg-gradient-to-t from-transparent via-cream-beige/15 to-transparent animate-pulse animation-delay-500 ml-3"></div>
        <div className="w-1 h-24 bg-gradient-to-t from-transparent via-cream-beige/10 to-transparent animate-pulse animation-delay-1000 ml-6"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4 animate-fade-in">
            <Pizza className="h-8 w-8 text-caramel-orange mr-2" />
            <Coffee className="h-6 w-6 text-amber-300 animate-pulse" />
            <Pizza className="h-8 w-8 text-caramel-orange ml-2 transform scale-x-[-1]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-cream-beige mb-3 animate-fade-in">
            Weekend Pizza Special
          </h2>
          <p className="text-base text-amber-100 max-w-xl mx-auto animate-fade-in animation-delay-200">
            Enjoy our delicious pizzas with an unbeatable weekend deal! 🍕
          </p>
        </div>

        {/* Compact Featured Promotion Card */}
        <div className="flex justify-center">
          <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-in-up bg-gradient-to-br from-cream-beige/95 to-amber-50/95 backdrop-blur-sm border-amber-300/50 max-w-sm w-full">
            {/* Coffee Bean Decorations */}
            <div className="absolute top-2 right-2 w-2 h-3 bg-amber-400/30 rounded-full transform rotate-12"></div>
            <div className="absolute bottom-2 left-2 w-1.5 h-2 bg-caramel-orange/20 rounded-full transform -rotate-45"></div>

            {/* Top Accent Bar */}
            <div className={`absolute top-0 left-0 right-0 h-2 ${promotion.color}`}></div>

            {/* Pizza Images */}
            <div className="relative h-32 bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center space-x-4">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=120&h=120&fit=crop&crop=center"
                    alt="Delicious Pizza 1"
                    className="w-20 h-20 rounded-full object-cover border-3 border-white shadow-lg"
                  />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                </div>
                <div className="text-caramel-orange font-bold text-lg">+</div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=120&h=120&fit=crop&crop=center"
                    alt="Delicious Pizza 2"
                    className="w-20 h-20 rounded-full object-cover border-3 border-white shadow-lg"
                  />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">FREE</span>
                  </div>
                </div>
              </div>
            </div>

            <CardHeader className="pb-3 text-center">
              <Badge variant="secondary" className="text-xs mb-2 bg-red-100 text-red-700 border-red-200">
                {promotion.badge}
              </Badge>

              <CardTitle className="text-coffee-brown text-lg font-bold mb-1">{promotion.title}</CardTitle>
              <CardDescription className="text-espresso-black/80 text-sm">
                {promotion.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0 text-center">
              {/* Compact Price and Offer Display */}
              <div className="mb-4">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                    {promotion.price}
                  </div>
                  <span className="text-coffee-brown text-sm font-medium">for</span>
                  <div className={`px-3 py-1 rounded-full text-white font-bold text-sm ${promotion.color}`}>
                    2 PIZZAS
                  </div>
                </div>
                <div className={`inline-block px-4 py-2 rounded-full text-white font-bold text-base ${promotion.color} shadow-md`}>
                  {promotion.discount}
                </div>
              </div>

              {/* Compact Days Available */}
              <div className="bg-amber-100/50 rounded-lg p-3 mb-4 border border-amber-200/50">
                <div className="flex items-center justify-center space-x-1 text-coffee-brown mb-1">
                  <Calendar className="h-4 w-4 text-caramel-orange" />
                  <span className="font-medium text-sm">Available on:</span>
                </div>
                <div className="flex justify-center space-x-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Saturday
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Sunday
                  </div>
                </div>
              </div>

              <p className="text-xs text-espresso-black/70 mb-4 italic">
                "Perfect for sharing with family and friends!"
              </p>

              <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 py-2 text-sm font-semibold">
                <Pizza className="h-4 w-4 mr-1" />
                Order Your Pizza Deal
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Compact Terms and Additional Info */}
        <div className="text-center mt-6">
          <div className="bg-amber-800/20 backdrop-blur-sm rounded-lg p-3 border border-amber-600/30 max-w-lg mx-auto">
            <p className="text-xs text-amber-200 mb-1">
              <strong>Terms:</strong> Valid weekends only. Cannot be combined with other offers.
            </p>
            <div className="flex items-center justify-center space-x-1 text-amber-100">
              <Coffee className="h-3 w-3 text-caramel-orange" />
              <span className="text-xs">Pair with our premium coffee!</span>
              <Coffee className="h-3 w-3 text-caramel-orange" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
