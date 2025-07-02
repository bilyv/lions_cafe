
import { Gift, Coffee, Star, Award, Crown, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LoyaltyProgram = () => {
  const rewards = [
    {
      stamps: 3,
      reward: "Free Pastry",
      icon: Gift,
      description: "Choose any pastry from our bakery selection",
      color: "from-amber-600 to-orange-600"
    },
    {
      stamps: 6,
      reward: "Free Regular Coffee",
      icon: Coffee,
      description: "Any regular coffee or espresso drink",
      color: "from-coffee-brown to-amber-800"
    },
    {
      stamps: 10,
      reward: "Free Specialty Drink",
      icon: Star,
      description: "Any specialty drink from our premium menu",
      color: "from-caramel-orange to-yellow-600"
    },
    {
      stamps: 15,
      reward: "Lion's VIP Treatment",
      icon: Crown,
      description: "Free meal + drink combo and priority seating",
      color: "from-yellow-600 to-amber-500"
    }
  ];

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
        <div className="absolute bottom-1/3 left-1/2 w-4 h-5 bg-amber-400 rounded-full transform rotate-60"></div>
      </div>

      {/* Coffee Steam Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-20 bg-gradient-to-t from-transparent via-cream-beige/20 to-transparent animate-pulse"></div>
        <div className="w-1 h-16 bg-gradient-to-t from-transparent via-cream-beige/15 to-transparent animate-pulse animation-delay-500 ml-3"></div>
        <div className="w-1 h-24 bg-gradient-to-t from-transparent via-cream-beige/10 to-transparent animate-pulse animation-delay-1000 ml-6"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6 animate-fade-in">
            <Coffee className="h-12 w-12 text-caramel-orange mr-3" />
            <Heart className="h-8 w-8 text-amber-300 animate-pulse" />
            <Coffee className="h-12 w-12 text-caramel-orange ml-3 transform scale-x-[-1]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-cream-beige mb-4 animate-fade-in">
            Lion's Loyalty Program
          </h2>
          <p className="text-lg text-amber-100 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Join our pride and earn exclusive rewards with every sip! ☕
          </p>
        </div>

        {/* How it works */}
        <div className="bg-gradient-to-r from-amber-800/90 to-coffee-brown/90 backdrop-blur-sm rounded-3xl p-8 mb-12 text-cream-beige text-center animate-slide-in-up border border-amber-600/30 shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 text-amber-100">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center group">
              <div className="bg-gradient-to-br from-caramel-orange to-amber-600 rounded-full p-4 mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-amber-100">1. Buy Coffee</h4>
              <p className="text-cream-beige/80 text-sm">Get 1 stamp for every delicious purchase</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-gradient-to-br from-yellow-600 to-amber-700 rounded-full p-4 mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-amber-100">2. Collect Stamps</h4>
              <p className="text-cream-beige/80 text-sm">Watch your coffee stamps add up</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-full p-4 mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-amber-100">3. Earn Rewards</h4>
              <p className="text-cream-beige/80 text-sm">Redeem stamps for amazing coffee treats</p>
            </div>
          </div>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {rewards.map((reward, index) => (
            <Card
              key={index}
              className={`text-center bg-gradient-to-br from-cream-beige/95 to-amber-50/95 backdrop-blur-sm border-amber-300/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-slide-in-up group overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Coffee Bean Decoration */}
              <div className="absolute top-2 right-2 w-3 h-4 bg-amber-400/30 rounded-full transform rotate-12"></div>
              <div className="absolute bottom-2 left-2 w-2 h-3 bg-caramel-orange/20 rounded-full transform -rotate-45"></div>

              <CardHeader className="relative">
                <div className={`mx-auto bg-gradient-to-r ${reward.color} rounded-full p-4 w-18 h-18 flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                  <reward.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-coffee-brown font-bold">
                  {reward.stamps} ☕ Stamps
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <h4 className="font-semibold text-caramel-orange mb-3 text-lg">{reward.reward}</h4>
                <p className="text-sm text-espresso-black/80 leading-relaxed">{reward.description}</p>

                {/* Progress indicator */}
                <div className="mt-4 bg-amber-200/50 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${reward.color} rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                    style={{ width: `${Math.min((reward.stamps / 15) * 100, 100)}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sign Up CTA */}
        <div className="text-center bg-gradient-to-br from-cream-beige/95 to-amber-100/95 backdrop-blur-sm rounded-3xl p-8 animate-fade-in animation-delay-400 border border-amber-400/30 shadow-2xl relative overflow-hidden">
          {/* Coffee Cup Steam Animation */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-1">
              <div className="w-0.5 h-6 bg-amber-400/40 rounded-full animate-pulse"></div>
              <div className="w-0.5 h-8 bg-caramel-orange/40 rounded-full animate-pulse animation-delay-300"></div>
              <div className="w-0.5 h-6 bg-amber-400/40 rounded-full animate-pulse animation-delay-600"></div>
            </div>
          </div>

          <div className="flex justify-center items-center mb-4">
            <Coffee className="h-10 w-10 text-caramel-orange mr-2" />
            <h3 className="text-2xl font-bold text-coffee-brown">
              Ready to Join the Pride?
            </h3>
            <Coffee className="h-10 w-10 text-caramel-orange ml-2 transform scale-x-[-1]" />
          </div>

          <p className="text-espresso-black/80 mb-6 text-lg">
            Sign up for our loyalty program today and get your first stamp absolutely free! ☕
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-coffee-brown to-amber-800 hover:from-coffee-brown/90 hover:to-amber-800/90 text-cream-beige shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg font-semibold">
              Join Lion's Loyalty Program
            </Button>
            <div className="flex items-center text-caramel-orange font-medium">
              <Star className="h-5 w-5 mr-1 animate-spin" />
              <span>Free First Stamp!</span>
              <Star className="h-5 w-5 ml-1 animate-spin" />
            </div>
          </div>

          {/* Coffee Bean Decorations */}
          <div className="absolute bottom-4 left-4 w-4 h-5 bg-amber-400/30 rounded-full transform rotate-45"></div>
          <div className="absolute bottom-6 right-6 w-3 h-4 bg-caramel-orange/30 rounded-full transform -rotate-30"></div>
          <div className="absolute top-8 right-8 w-2 h-3 bg-coffee-brown/20 rounded-full transform rotate-60"></div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyProgram;
