
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Percent, Gift, Clock, Coffee } from "lucide-react";

const PromotionsSection = () => {
  const promotions = [
    {
      id: 1,
      title: "Happy Hour Special",
      description: "50% off all specialty drinks",
      details: "Monday to Friday, 3-5 PM",
      discount: "50% OFF",
      icon: Clock,
      color: "bg-gradient-to-r from-orange-400 to-red-400",
      badge: "Limited Time"
    },
    {
      id: 2,
      title: "Student Discount",
      description: "Show your student ID for instant savings",
      details: "Valid with student ID",
      discount: "20% OFF",
      icon: Percent,
      color: "bg-gradient-to-r from-blue-400 to-purple-400",
      badge: "Everyday"
    },
    {
      id: 3,
      title: "Loyalty Rewards",
      description: "Buy 9 coffees, get the 10th free",
      details: "Punch card program",
      discount: "Free Coffee",
      icon: Gift,
      color: "bg-gradient-to-r from-green-400 to-teal-400",
      badge: "Members Only"
    },
    {
      id: 4,
      title: "Morning Rush",
      description: "Early bird gets the discount",
      details: "Before 9 AM daily",
      discount: "15% OFF",
      icon: Coffee,
      color: "bg-gradient-to-r from-yellow-400 to-orange-400",
      badge: "Early Bird"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-brown mb-4 animate-fade-in">
            Special Promotions & Discounts
          </h2>
          <p className="text-lg text-espresso-black max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Save more on your favorite drinks and treats with our exciting offers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promotions.map((promotion, index) => {
            const IconComponent = promotion.icon;
            return (
              <Card 
                key={promotion.id} 
                className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-up bg-white`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute top-0 left-0 right-0 h-2 ${promotion.color}`}></div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <div className={`p-3 rounded-full ${promotion.color} shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {promotion.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-coffee-brown text-lg">{promotion.title}</CardTitle>
                  <CardDescription className="text-espresso-black">
                    {promotion.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-center mb-4">
                    <div className={`inline-block px-4 py-2 rounded-full text-white font-bold text-lg ${promotion.color}`}>
                      {promotion.discount}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 text-center mb-4">
                    {promotion.details}
                  </p>
                  <Button className="w-full bg-caramel-orange hover:bg-caramel-orange/90 text-white">
                    Claim Offer
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-600 mb-4">
            Terms and conditions apply. Offers cannot be combined with other promotions.
          </p>
          <Button variant="outline" className="border-caramel-orange text-caramel-orange hover:bg-caramel-orange hover:text-white">
            View All Offers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
