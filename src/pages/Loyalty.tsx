import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Layout from "@/components/Layout";
import { 
  Gift, 
  Star, 
  Coffee, 
  Crown, 
  Zap, 
  Heart, 
  Trophy, 
  Sparkles,
  CheckCircle,
  ArrowRight,
  Users,
  Calendar
} from "lucide-react";

const Loyalty = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Loyalty tiers data
  const loyaltyTiers = [
    {
      name: "Coffee Lover",
      icon: Coffee,
      color: "bg-amber-100 text-amber-800",
      borderColor: "border-amber-200",
      requirement: "0-99 points",
      benefits: [
        "5% discount on all drinks",
        "Birthday surprise",
        "Early access to new menu items"
      ]
    },
    {
      name: "Café Regular",
      icon: Star,
      color: "bg-blue-100 text-blue-800",
      borderColor: "border-blue-200",
      requirement: "100-299 points",
      benefits: [
        "10% discount on all items",
        "Free drink on your birthday",
        "Priority seating",
        "Monthly exclusive offers"
      ]
    },
    {
      name: "Lion's Elite",
      icon: Crown,
      color: "bg-purple-100 text-purple-800",
      borderColor: "border-purple-200",
      requirement: "300+ points",
      benefits: [
        "15% discount on all items",
        "Free birthday cake slice",
        "VIP seating area access",
        "Personal barista recommendations",
        "Exclusive events invitations"
      ]
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Sign Up",
      description: "Join our loyalty program for free and start earning points immediately",
      icon: Users
    },
    {
      step: 2,
      title: "Earn Points",
      description: "Get 1 point for every $1 spent. Bonus points on special occasions!",
      icon: Zap
    },
    {
      step: 3,
      title: "Unlock Rewards",
      description: "Redeem points for free drinks, food, and exclusive experiences",
      icon: Gift
    },
    {
      step: 4,
      title: "Level Up",
      description: "Advance through tiers to unlock even better benefits and perks",
      icon: Trophy
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        id="hero"
        ref={el => sectionRefs.current.hero = el}
        className="relative py-20 bg-gradient-to-br from-coffee-brown via-espresso-black to-coffee-brown text-cream-beige overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">☕</div>
          <div className="absolute top-32 right-20 text-4xl">🦁</div>
          <div className="absolute bottom-20 left-1/4 text-5xl">⭐</div>
          <div className="absolute bottom-32 right-1/3 text-3xl">🎁</div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className={`transition-all duration-1000 ${visibleSections.has('hero') ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="mb-8">
              <Gift className="h-20 w-20 mx-auto mb-6 text-caramel-orange animate-pulse-glow" />
            </div>
            
            <h1 className="font-caveat text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-caramel-orange to-yellow-400 bg-clip-text text-transparent">
              Lion's Loyalty Program
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className="text-2xl">🌟</span> Earn points, unlock rewards, and enjoy exclusive perks with every visit! <span className="text-2xl">🎉</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-caramel-orange to-yellow-500 hover:from-caramel-orange/90 hover:to-yellow-500/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Sparkles className="mr-2 h-5 w-5" />
                Join Now - It's Free!
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-caramel-orange text-caramel-orange hover:bg-caramel-orange hover:text-white transition-all duration-300">
                <Heart className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Loyalty Tiers Section */}
      <section 
        id="tiers"
        ref={el => sectionRefs.current.tiers = el}
        className="py-20 bg-cream-beige"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('tiers') ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="font-caveat text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-brown mb-6">
              Loyalty Tiers & Benefits
            </h2>
            <p className="text-lg text-espresso-black max-w-3xl mx-auto">
              The more you visit, the more you earn! Advance through our loyalty tiers and unlock amazing benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {loyaltyTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <Card 
                  key={tier.name}
                  className={`${tier.borderColor} border-2 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                    visibleSections.has('tiers') ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full ${tier.color} flex items-center justify-center mb-4`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-coffee-brown">{tier.name}</CardTitle>
                    <Badge variant="secondary" className="mt-2">{tier.requirement}</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-espresso-black">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        id="how-it-works"
        ref={el => sectionRefs.current.howItWorks = el}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('how-it-works') ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="font-caveat text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-brown mb-6">
              How It Works
            </h2>
            <p className="text-lg text-espresso-black max-w-3xl mx-auto">
              Getting started with Lion's Loyalty is simple! Follow these easy steps to start earning rewards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.step}
                  className={`text-center transition-all duration-1000 ${
                    visibleSections.has('how-it-works') ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-caramel-orange to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-coffee-brown text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    {index < howItWorksSteps.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute top-10 -right-12 h-6 w-6 text-caramel-orange" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-coffee-brown mb-3">{step.title}</h3>
                  <p className="text-espresso-black leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Points & Rewards Section */}
      <section
        id="rewards"
        ref={el => sectionRefs.current.rewards = el}
        className="py-20 bg-gradient-to-br from-caramel-orange/10 to-yellow-400/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('rewards') ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="font-caveat text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-brown mb-6">
              Earn & Redeem Points
            </h2>
            <p className="text-lg text-espresso-black max-w-3xl mx-auto">
              Every purchase brings you closer to amazing rewards. Here's how you can earn and spend your points.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Earning Points */}
            <Card className={`border-2 border-caramel-orange/20 hover:shadow-xl transition-all duration-500 ${
              visibleSections.has('rewards') ? 'animate-fade-in-up' : 'opacity-0'
            }`}>
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 text-caramel-orange" />
                <CardTitle className="text-2xl font-bold text-coffee-brown">Earning Points</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Coffee className="h-6 w-6 text-caramel-orange" />
                  <span>1 point per $1 spent on drinks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gift className="h-6 w-6 text-caramel-orange" />
                  <span>2 points per $1 spent on food</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-caramel-orange" />
                  <span>Bonus points on special occasions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-caramel-orange" />
                  <span>Referral bonuses for new members</span>
                </div>
              </CardContent>
            </Card>

            {/* Redeeming Points */}
            <Card className={`border-2 border-purple-200 hover:shadow-xl transition-all duration-500 ${
              visibleSections.has('rewards') ? 'animate-fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '200ms' }}>
              <CardHeader className="text-center">
                <Trophy className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <CardTitle className="text-2xl font-bold text-coffee-brown">Redeeming Rewards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Free Coffee</span>
                  <Badge variant="secondary">50 points</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Free Pastry</span>
                  <Badge variant="secondary">75 points</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Free Lunch</span>
                  <Badge variant="secondary">150 points</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>VIP Experience</span>
                  <Badge variant="secondary">300 points</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-coffee-brown text-cream-beige">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Sparkles className="h-16 w-16 mx-auto mb-6 text-caramel-orange animate-pulse-glow" />
          </div>

          <h2 className="font-caveat text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Start Earning?
          </h2>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of coffee lovers who are already enjoying exclusive rewards and benefits!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-caramel-orange to-yellow-500 hover:from-caramel-orange/90 hover:to-yellow-500/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Gift className="mr-2 h-5 w-5" />
              Join Loyalty Program
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-caramel-orange text-caramel-orange hover:bg-caramel-orange hover:text-white transition-all duration-300">
              <Coffee className="mr-2 h-5 w-5" />
              Visit Our Café
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Loyalty;
