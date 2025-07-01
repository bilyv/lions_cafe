
import { Gift, Coffee, Star, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LoyaltyProgram = () => {
  const rewards = [
    {
      stamps: 3,
      reward: "Free Pastry",
      icon: Gift,
      description: "Choose any pastry from our bakery selection"
    },
    {
      stamps: 6,
      reward: "Free Regular Coffee",
      icon: Coffee,
      description: "Any regular coffee or espresso drink"
    },
    {
      stamps: 10,
      reward: "Free Specialty Drink",
      icon: Star,
      description: "Any specialty drink from our premium menu"
    },
    {
      stamps: 15,
      reward: "Lion's VIP Treatment",
      icon: Award,
      description: "Free meal + drink combo and priority seating"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
            Lion's Loyalty Program
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Earn stamps with every purchase and unlock amazing rewards!
          </p>
        </div>

        {/* How it works */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 mb-12 text-white text-center animate-slide-in-up">
          <h3 className="text-2xl font-bold mb-4">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="bg-white/20 rounded-full p-4 mb-3">
                <Coffee className="h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">1. Buy Coffee</h4>
              <p className="text-orange-100 text-sm">Get 1 stamp for every purchase</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 rounded-full p-4 mb-3">
                <Star className="h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">2. Collect Stamps</h4>
              <p className="text-orange-100 text-sm">Watch your stamps add up</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 rounded-full p-4 mb-3">
                <Gift className="h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">3. Earn Rewards</h4>
              <p className="text-orange-100 text-sm">Redeem stamps for free items</p>
            </div>
          </div>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {rewards.map((reward, index) => (
            <Card 
              key={index} 
              className={`text-center bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 hover:shadow-lg transition-all duration-300 animate-slide-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-3">
                  <reward.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-gray-800">
                  {reward.stamps} Stamps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-orange-600 mb-2">{reward.reward}</h4>
                <p className="text-sm text-gray-600">{reward.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sign Up CTA */}
        <div className="text-center bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 animate-fade-in animation-delay-400">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Start Earning?
          </h3>
          <p className="text-gray-600 mb-6">
            Sign up for our loyalty program today and get your first stamp free!
          </p>
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            Join Lion's Loyalty Program
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyProgram;
