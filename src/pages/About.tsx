
import Layout from "@/components/Layout";
import LoyaltyProgram from "@/components/LoyaltyProgram";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Coffee, Users, Leaf, Award, Target, Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [refreshAnimation, setRefreshAnimation] = useState(true);
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

  // Refresh animation trigger
  useEffect(() => {
    setRefreshAnimation(true);
    const timer = setTimeout(() => setRefreshAnimation(false), 100);
    return () => clearTimeout(timer);
  }, []);

  // Helper function to get animation classes
  const getAnimationClass = (sectionId, baseAnimation, delay = 0) => {
    const isVisible = visibleSections.has(sectionId);
    const delayClass = delay > 0 ? `animation-delay-${delay}` : '';
    return `${baseAnimation} ${delayClass} ${isVisible ? 'animate-in' : 'animate-out'}`;
  };

  const values = [
    {
      icon: Coffee,
      title: "Quality First",
      description: "We never compromise on the quality of our coffee beans, ingredients, or service.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Community Love",
      description: "We're more than a café - we're a gathering place that brings people together.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Every customer is treated like family, and their satisfaction is our priority.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to ethical sourcing and environmentally friendly practices.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen" style={{ backgroundColor: 'hsl(42, 15%, 96%)' }}>
        {/* Header with Background Image */}
        <div
          ref={el => sectionRefs.current.header = el}
          id="header"
          className="relative text-white py-12 sm:py-16 md:py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url("/waiter.jpg")',
            minHeight: '300px'
          }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className={`absolute top-10 left-10 w-4 h-4 bg-amber-400/30 rounded-full ${refreshAnimation ? 'animate-bounce' : ''}`} style={{ animationDelay: '0.5s' }}></div>
            <div className={`absolute top-20 right-20 w-6 h-6 bg-orange-400/30 rounded-full ${refreshAnimation ? 'animate-pulse' : ''}`} style={{ animationDelay: '1s' }}></div>
            <div className={`absolute bottom-20 left-20 w-5 h-5 bg-yellow-400/30 rounded-full ${refreshAnimation ? 'animate-bounce' : ''}`} style={{ animationDelay: '1.5s' }}></div>
            <div className={`absolute bottom-10 right-10 w-3 h-3 bg-amber-300/30 rounded-full ${refreshAnimation ? 'animate-pulse' : ''}`} style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 transform transition-all duration-1000 ${refreshAnimation ? 'animate-slide-in-up scale-105' : 'scale-100'}`}>
              About Lion's Café
            </h1>
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl transform transition-all duration-1000 ${refreshAnimation ? 'animate-slide-in-up animation-delay-200 opacity-90' : 'opacity-100'}`} style={{ color: 'hsl(42, 15%, 96%)' }}>
              Discover our story, mission, and the passion behind every cup
            </p>
          </div>
        </div>

        {/* Story Section - Mobile Responsive */}
        <div
          ref={el => sectionRefs.current.story = el}
          id="story"
          className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden"
        >
          {/* Floating animation elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute top-1/4 left-10 w-8 h-8 bg-orange-200/40 rounded-full ${getAnimationClass('story', 'animate-float')}`} style={{ animationDelay: '0s' }}></div>
            <div className={`absolute top-1/2 right-20 w-6 h-6 bg-amber-200/40 rounded-full ${getAnimationClass('story', 'animate-float')}`} style={{ animationDelay: '1s' }}></div>
            <div className={`absolute bottom-1/4 left-1/3 w-4 h-4 bg-red-200/40 rounded-full ${getAnimationClass('story', 'animate-float')}`} style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div className={`${getAnimationClass('story', 'animate-slide-in-left')} order-2 lg:order-1 transform transition-all duration-1000`}>
                <div className={`bg-gradient-to-r from-orange-500 to-red-500 w-16 sm:w-20 h-1 mb-4 sm:mb-6 transform transition-all duration-800 ${getAnimationClass('story', 'animate-expand-width')}`}></div>
                <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 transform transition-all duration-1000 ${getAnimationClass('story', 'animate-fade-in-up')}`} style={{ color: 'hsl(17, 41%, 31%)' }}>Our Story</h2>
                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: 'hsl(0, 0%, 11%)' }}>
                  <p className={`transform transition-all duration-1000 ${getAnimationClass('story', 'animate-fade-in-up', 300)}`}>
                    Lion's Café was born from a simple dream: to create a space where exceptional coffee meets genuine hospitality.
                    Founded in 2018 by coffee enthusiasts Maria and James Rodriguez, our café started as a small neighborhood spot
                    with a big vision.
                  </p>
                  <p className={`transform transition-all duration-1000 ${getAnimationClass('story', 'animate-fade-in-up', 500)}`}>
                    What began as a passion project has grown into a beloved community hub where friends meet, business deals are made,
                    students study, and families gather. We take pride in serving not just coffee, but moments of connection and joy.
                  </p>
                  <p className={`transform transition-all duration-1000 ${getAnimationClass('story', 'animate-fade-in-up', 700)}`}>
                    Every morning, we wake up excited to brew the perfect cup, bake fresh pastries, and welcome both familiar faces
                    and new friends through our doors. Our commitment to quality, community, and sustainability drives everything we do.
                  </p>
                </div>
              </div>
              <div className={`${getAnimationClass('story', 'animate-slide-in-right', 200)} order-1 lg:order-2 transform transition-all duration-1000`}>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop"
                    alt="Coffee shop interior"
                    className={`rounded-2xl shadow-2xl w-full h-auto transform transition-all duration-1000 ${getAnimationClass('story', 'animate-scale-in hover:scale-105')}`}
                  />
                  <div className={`absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg transform transition-all duration-1000 ${getAnimationClass('story', 'animate-bounce-in', 800)}`}>
                    <div className="text-center">
                      <div className={`text-2xl sm:text-3xl font-bold text-orange-500 transform transition-all duration-500 ${getAnimationClass('story', 'animate-number-count')}`}>2018</div>
                      <div className="text-gray-600 text-sm sm:text-base">Founded</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section - Mobile Responsive */}
        <div
          ref={el => sectionRefs.current.mission = el}
          id="mission"
          className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white relative overflow-hidden"
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute top-20 left-1/4 w-2 h-2 bg-white/20 rounded-full ${getAnimationClass('mission', 'animate-float')}`} style={{ animationDelay: '0s' }}></div>
            <div className={`absolute top-1/3 right-1/4 w-3 h-3 bg-white/15 rounded-full ${getAnimationClass('mission', 'animate-float')}`} style={{ animationDelay: '1s' }}></div>
            <div className={`absolute bottom-1/3 left-1/3 w-1 h-1 bg-white/25 rounded-full ${getAnimationClass('mission', 'animate-float')}`} style={{ animationDelay: '2s' }}></div>
            <div className={`absolute bottom-20 right-1/3 w-2 h-2 bg-white/20 rounded-full ${getAnimationClass('mission', 'animate-float')}`} style={{ animationDelay: '3s' }}></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className={`flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8 transform transition-all duration-1000 ${getAnimationClass('mission', 'animate-fade-in-up')}`}>
              <Target className={`h-12 w-12 sm:h-16 sm:w-16 mb-2 sm:mb-0 sm:mr-4 transform transition-all duration-1000 ${getAnimationClass('mission', 'animate-spin-slow')}`} />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Our Mission</h2>
            </div>
            <div className={`bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl transform transition-all duration-1000 ${getAnimationClass('mission', 'animate-slide-in-up', 200)}`}>
              <Eye className={`h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-4 sm:mb-6 text-orange-200 transform transition-all duration-1000 ${getAnimationClass('mission', 'animate-pulse-glow')}`} />
              <p className={`text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium transform transition-all duration-1000 ${getAnimationClass('mission', 'animate-fade-in', 400)}`}>
                "To create an exceptional coffee experience that brings people together, supports our community,
                and celebrates the art of coffee making while maintaining the highest standards of quality and sustainability."
              </p>
            </div>
          </div>
        </div>

        {/* Values Section - Mobile Responsive */}
        <div
          ref={el => sectionRefs.current.values = el}
          id="values"
          className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden"
        >
          {/* Floating geometric shapes */}
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute top-10 left-10 w-6 h-6 bg-orange-100 rounded-full ${getAnimationClass('values', 'animate-float')}`} style={{ animationDelay: '0s' }}></div>
            <div className={`absolute top-1/4 right-20 w-4 h-4 bg-amber-100 rotate-45 ${getAnimationClass('values', 'animate-float')}`} style={{ animationDelay: '1s' }}></div>
            <div className={`absolute bottom-1/4 left-1/4 w-8 h-8 bg-red-100 rounded-full ${getAnimationClass('values', 'animate-float')}`} style={{ animationDelay: '2s' }}></div>
            <div className={`absolute bottom-20 right-1/4 w-5 h-5 bg-orange-100 rotate-12 ${getAnimationClass('values', 'animate-float')}`} style={{ animationDelay: '3s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 transform transition-all duration-1000 ${getAnimationClass('values', 'animate-fade-in-up')}`} style={{ color: 'hsl(17, 41%, 31%)' }}>Our Values</h2>
              <p className={`text-base sm:text-lg md:text-xl transform transition-all duration-1000 ${getAnimationClass('values', 'animate-fade-in-up', 200)}`} style={{ color: 'hsl(0, 0%, 40%)' }}>
                The principles that guide us every day
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <Card key={index} className={`text-center bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg overflow-hidden ${getAnimationClass('values', 'animate-slide-in-up', index * 100 + 300)}`}>
                  <CardHeader className="pb-4">
                    <div className={`mx-auto mb-4 sm:mb-6 rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gradient-to-r ${value.color} shadow-lg`}>
                      <value.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl" style={{ color: 'hsl(17, 41%, 31%)' }}>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm sm:text-base leading-relaxed" style={{ color: 'hsl(0, 0%, 40%)' }}>
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section - Mobile Responsive */}
        <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in" style={{ color: 'hsl(17, 41%, 31%)' }}>Meet Our Team</h2>
              <p className="text-base sm:text-lg md:text-xl animate-fade-in animation-delay-200" style={{ color: 'hsl(0, 0%, 40%)' }}>
                The passionate people behind Lion's Café
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-left">
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-6">
                    <span className="text-lg sm:text-2xl font-bold text-white">MR</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1" style={{ color: 'hsl(17, 41%, 31%)' }}>Maria Rodriguez</h3>
                    <p className="text-base sm:text-lg font-medium" style={{ color: 'hsl(25, 69%, 45%)' }}>Co-Founder & Head Barista</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left" style={{ color: 'hsl(0, 0%, 40%)' }}>
                  With over 15 years in the coffee industry, Maria brings expertise in coffee sourcing 
                  and brewing techniques that ensure every cup meets our high standards.
                </p>
                <div className="mt-4 sm:mt-6 flex items-center justify-center sm:justify-start space-x-2">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                  <span className="text-xs sm:text-sm text-gray-600">15+ Years Experience</span>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-right animation-delay-300">
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-6">
                    <span className="text-lg sm:text-2xl font-bold text-white">JR</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1" style={{ color: 'hsl(17, 41%, 31%)' }}>James Rodriguez</h3>
                    <p className="text-base sm:text-lg font-medium" style={{ color: 'hsl(25, 69%, 45%)' }}>Co-Founder & Operations Manager</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left" style={{ color: 'hsl(0, 0%, 40%)' }}>
                  James handles the business side while maintaining our commitment to community engagement 
                  and sustainable practices. His vision keeps Lion's Café growing while staying true to our roots.
                </p>
                <div className="mt-4 sm:mt-6 flex items-center justify-center sm:justify-start space-x-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                  <span className="text-xs sm:text-sm text-gray-600">Community Leader</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Redesigned Loyalty Program with Coffee/Brown Background */}
        <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-coffee-brown via-amber-900 to-orange-900 relative overflow-hidden">
          {/* Coffee beans background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-8 h-8 bg-amber-200 rounded-full"></div>
            <div className="absolute top-32 right-20 w-6 h-6 bg-orange-200 rounded-full"></div>
            <div className="absolute bottom-20 left-32 w-10 h-10 bg-amber-300 rounded-full"></div>
            <div className="absolute bottom-40 right-16 w-4 h-4 bg-orange-300 rounded-full"></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
                Lion's Loyalty Program
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-amber-100 max-w-2xl mx-auto animate-fade-in animation-delay-200">
                Join our pride and earn exclusive rewards with every visit!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 text-center text-white hover:bg-white/20 transition-all duration-300 animate-slide-in-up">
                <div className="bg-white/20 rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <Coffee className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">Buy Coffee</h3>
                <p className="text-white/80 text-sm sm:text-base">Earn 1 stamp for every purchase</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 text-center text-white hover:bg-white/20 transition-all duration-300 animate-slide-in-up animation-delay-200">
                <div className="bg-white/20 rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <Award className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">Collect Stamps</h3>
                <p className="text-white/80 text-sm sm:text-base">Watch your rewards grow</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 text-center text-white hover:bg-white/20 transition-all duration-300 animate-slide-in-up animation-delay-400 sm:col-span-2 md:col-span-1">
                <div className="bg-white/20 rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <Heart className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">Get Rewards</h3>
                <p className="text-white/80 text-sm sm:text-base">Redeem amazing benefits</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 text-center shadow-2xl animate-fade-in animation-delay-600">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                Ready to Join the Pride?
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
                Sign up today and get your first stamp absolutely free!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-coffee-brown to-amber-700 hover:from-coffee-brown/90 hover:to-amber-700/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Join Lion's Loyalty
                </button>
                <button className="border-2 border-gray-300 text-gray-700 hover:border-coffee-brown hover:text-coffee-brown px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
