
import Layout from "@/components/Layout";
import ReviewsSection from "@/components/ReviewsSection";
import LoyaltyProgram from "@/components/LoyaltyProgram";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Coffee, Users, Leaf } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Coffee,
      title: "Quality First",
      description: "We never compromise on the quality of our coffee beans, ingredients, or service."
    },
    {
      icon: Heart,
      title: "Community Love",
      description: "We're more than a café - we're a gathering place that brings people together."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Every customer is treated like family, and their satisfaction is our priority."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to ethical sourcing and environmentally friendly practices."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen" style={{ backgroundColor: 'hsl(42, 15%, 96%)' }}>
        {/* Header with Background Image */}
        <div 
          className="relative text-white py-16 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop")',
            minHeight: '300px'
          }}
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">About Lion's Café</h1>
            <p className="text-xl animate-slide-in-up animation-delay-200" style={{ color: 'hsl(42, 15%, 96%)' }}>
              Discover our story, mission, and the passion behind every cup
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 animate-fade-in" style={{ color: 'hsl(17, 41%, 31%)' }}>Our Story</h2>
            <div className="prose prose-lg max-w-none space-y-6 animate-fade-in animation-delay-200" style={{ color: 'hsl(0, 0%, 11%)' }}>
              <p>
                Lion's Café was born from a simple dream: to create a space where exceptional coffee meets genuine hospitality. 
                Founded in 2018 by coffee enthusiasts Maria and James Rodriguez, our café started as a small neighborhood spot 
                with a big vision.
              </p>
              <p>
                What began as a passion project has grown into a beloved community hub where friends meet, business deals are made, 
                students study, and families gather. We take pride in serving not just coffee, but moments of connection and joy.
              </p>
              <p>
                Every morning, we wake up excited to brew the perfect cup, bake fresh pastries, and welcome both familiar faces 
                and new friends through our doors. Our commitment to quality, community, and sustainability drives everything we do.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16" style={{ backgroundColor: 'hsl(20, 20%, 82%)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8 animate-fade-in" style={{ color: 'hsl(17, 41%, 31%)' }}>Our Mission</h2>
            <div className="bg-white rounded-lg p-8 shadow-lg animate-slide-in-up animation-delay-200">
              <p className="text-lg italic" style={{ color: 'hsl(0, 0%, 11%)' }}>
                "To create an exceptional coffee experience that brings people together, supports our community, 
                and celebrates the art of coffee making while maintaining the highest standards of quality and sustainability."
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in" style={{ color: 'hsl(17, 41%, 31%)' }}>Our Values</h2>
            <p className="text-lg animate-fade-in animation-delay-200" style={{ color: 'hsl(0, 0%, 40%)' }}>
              The principles that guide us every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className={`text-center bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-up`} style={{ animationDelay: `${index * 0.1}s`, borderColor: 'hsl(20, 20%, 82%)' }}>
                <CardHeader>
                  <div className="mx-auto mb-4 rounded-full p-3 w-16 h-16 flex items-center justify-center" style={{ backgroundColor: 'hsl(25, 69%, 45%)' }}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle style={{ color: 'hsl(17, 41%, 31%)' }}>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription style={{ color: 'hsl(0, 0%, 40%)' }}>
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16" style={{ backgroundColor: 'hsl(20, 20%, 82%)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8 animate-fade-in" style={{ color: 'hsl(17, 41%, 31%)' }}>Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow animate-slide-in-left">
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>Maria Rodriguez</h3>
                <p className="mb-3" style={{ color: 'hsl(25, 69%, 45%)' }}>Co-Founder & Head Barista</p>
                <p style={{ color: 'hsl(0, 0%, 40%)' }}>
                  With over 15 years in the coffee industry, Maria brings expertise in coffee sourcing 
                  and brewing techniques that ensure every cup meets our high standards.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow animate-slide-in-right animation-delay-200">
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'hsl(17, 41%, 31%)' }}>James Rodriguez</h3>
                <p className="mb-3" style={{ color: 'hsl(25, 69%, 45%)' }}>Co-Founder & Operations Manager</p>
                <p style={{ color: 'hsl(0, 0%, 40%)' }}>
                  James handles the business side while maintaining our commitment to community engagement 
                  and sustainable practices. His vision keeps Lion's Café growing while staying true to our roots.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <ReviewsSection />

        {/* Loyalty Program */}
        <LoyaltyProgram />
      </div>
    </Layout>
  );
};

export default About;
