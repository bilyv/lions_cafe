
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Coffee, Heart, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting Lion's Café. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-coffee-brown via-amber-900 to-espresso-black relative overflow-hidden">
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

        {/* Header Section */}
        <div className="relative text-cream-beige py-16 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex justify-center items-center mb-6 animate-fade-in">
              <Coffee className="h-12 w-12 text-caramel-orange mr-3" />
              <Heart className="h-8 w-8 text-amber-300 animate-pulse" />
              <Coffee className="h-12 w-12 text-caramel-orange ml-3 transform scale-x-[-1]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Contact Us</h1>
            <p className="text-xl text-amber-100 animate-fade-in animation-delay-200">
              We'd love to brew up a conversation with you! ☕
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-cream-beige/95 to-amber-100/95 backdrop-blur-sm rounded-3xl p-8 border border-amber-400/30 shadow-2xl relative overflow-hidden">
                {/* Coffee Bean Decorations */}
                <div className="absolute top-4 right-4 w-3 h-4 bg-amber-400/30 rounded-full transform rotate-12"></div>
                <div className="absolute bottom-4 left-4 w-2 h-3 bg-caramel-orange/20 rounded-full transform -rotate-45"></div>

                <div className="flex items-center mb-6">
                  <MessageCircle className="h-8 w-8 text-caramel-orange mr-3" />
                  <h2 className="text-3xl font-bold text-coffee-brown">Get In Touch</h2>
                </div>
                <p className="text-espresso-black/80 mb-8 leading-relaxed">
                  Whether you have questions about our coffee menu, want to book an event, or just want to say hello,
                  we're here to help. Visit us or reach out through any of the methods below. ☕
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-cream-beige/90 to-amber-50/90 backdrop-blur-sm border-amber-300/50 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="absolute top-2 right-2 w-2 h-3 bg-amber-400/20 rounded-full transform rotate-12"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center text-coffee-brown group-hover:text-caramel-orange transition-colors duration-300">
                      <div className="bg-gradient-to-r from-caramel-orange to-amber-600 rounded-full p-2 mr-3">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      Visit Our Café
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-espresso-black/80 leading-relaxed">
                      📍 123 Coffee Street<br />
                      Brew City, BC 12345<br />
                      United States
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-cream-beige/90 to-amber-50/90 backdrop-blur-sm border-amber-300/50 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="absolute top-2 right-2 w-2 h-3 bg-caramel-orange/20 rounded-full transform -rotate-45"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center text-coffee-brown group-hover:text-caramel-orange transition-colors duration-300">
                      <div className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full p-2 mr-3">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      Call Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-espresso-black/80 leading-relaxed">
                      ☎️ Phone: (555) 123-4567<br />
                      Available during business hours
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-cream-beige/90 to-amber-50/90 backdrop-blur-sm border-amber-300/50 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="absolute top-2 right-2 w-3 h-4 bg-amber-300/30 rounded-full transform rotate-60"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center text-coffee-brown group-hover:text-caramel-orange transition-colors duration-300">
                      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full p-2 mr-3">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      Email Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-espresso-black/80 leading-relaxed">
                      ✉️ hello@lionscafe.com<br />
                      We typically respond within 24 hours
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-cream-beige/90 to-amber-50/90 backdrop-blur-sm border-amber-300/50 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="absolute top-2 right-2 w-2 h-3 bg-coffee-brown/20 rounded-full transform -rotate-30"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center text-coffee-brown group-hover:text-caramel-orange transition-colors duration-300">
                      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-full p-2 mr-3">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      Opening Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-espresso-black/80 leading-relaxed">
                      🕐 Monday - Friday: 6:00 AM - 8:00 PM<br />
                      🕕 Saturday: 7:00 AM - 9:00 PM<br />
                      🕗 Sunday: 8:00 AM - 6:00 PM
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-gradient-to-br from-cream-beige/95 to-amber-100/95 backdrop-blur-sm border-amber-300/50 shadow-2xl relative overflow-hidden">
                {/* Coffee Steam Animation */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-1">
                    <div className="w-0.5 h-6 bg-amber-400/40 rounded-full animate-pulse"></div>
                    <div className="w-0.5 h-8 bg-caramel-orange/40 rounded-full animate-pulse animation-delay-300"></div>
                    <div className="w-0.5 h-6 bg-amber-400/40 rounded-full animate-pulse animation-delay-600"></div>
                  </div>
                </div>

                {/* Coffee Bean Decorations */}
                <div className="absolute bottom-4 left-4 w-4 h-5 bg-amber-400/30 rounded-full transform rotate-45"></div>
                <div className="absolute bottom-6 right-6 w-3 h-4 bg-caramel-orange/30 rounded-full transform -rotate-30"></div>
                <div className="absolute top-8 right-8 w-2 h-3 bg-coffee-brown/20 rounded-full transform rotate-60"></div>

                <CardHeader className="text-center">
                  <div className="flex justify-center items-center mb-4">
                    <Send className="h-8 w-8 text-caramel-orange mr-2" />
                    <CardTitle className="text-coffee-brown text-2xl">Send us a Message</CardTitle>
                    <Coffee className="h-8 w-8 text-caramel-orange ml-2" />
                  </div>
                  <CardDescription className="text-espresso-black/80 text-lg">
                    Fill out the form below and we'll brew up a response as soon as possible! ☕
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-coffee-brown font-medium flex items-center">
                        <span className="mr-2">👤</span> Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-amber-300 focus:border-caramel-orange focus:ring-caramel-orange bg-white/80 backdrop-blur-sm"
                        placeholder="Your full name..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-coffee-brown font-medium flex items-center">
                        <span className="mr-2">📧</span> Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-amber-300 focus:border-caramel-orange focus:ring-caramel-orange bg-white/80 backdrop-blur-sm"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-coffee-brown font-medium flex items-center">
                        <span className="mr-2">💬</span> Message
                      </Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-caramel-orange focus:border-caramel-orange bg-white/80 backdrop-blur-sm resize-none"
                        placeholder="Tell us how we can help you... Whether it's about our coffee, events, or just to say hello! ☕"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-coffee-brown to-amber-800 hover:from-coffee-brown/90 hover:to-amber-800/90 text-cream-beige shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 py-3 text-lg font-semibold"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <Card className="bg-gradient-to-br from-cream-beige/95 to-amber-100/95 backdrop-blur-sm border-amber-300/50 shadow-2xl relative overflow-hidden">
              {/* Coffee Bean Decorations */}
              <div className="absolute top-4 right-4 w-4 h-5 bg-amber-400/30 rounded-full transform rotate-45"></div>
              <div className="absolute bottom-4 left-4 w-3 h-4 bg-caramel-orange/30 rounded-full transform -rotate-30"></div>

              <CardHeader className="text-center">
                <div className="flex justify-center items-center mb-4">
                  <MapPin className="h-8 w-8 text-caramel-orange mr-2" />
                  <CardTitle className="text-coffee-brown text-2xl">Find Our Coffee Haven</CardTitle>
                  <Coffee className="h-8 w-8 text-caramel-orange ml-2" />
                </div>
                <CardDescription className="text-espresso-black/80 text-lg">
                  Located in the heart of Brew City, we're easy to find and close to public transportation. ☕
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-amber-200/50 to-caramel-orange/30 rounded-xl flex items-center justify-center border-2 border-amber-300/50 relative overflow-hidden">
                  {/* Coffee Cup Steam Animation */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex space-x-1">
                      <div className="w-0.5 h-8 bg-coffee-brown/30 rounded-full animate-pulse"></div>
                      <div className="w-0.5 h-10 bg-amber-600/30 rounded-full animate-pulse animation-delay-300"></div>
                      <div className="w-0.5 h-8 bg-coffee-brown/30 rounded-full animate-pulse animation-delay-600"></div>
                    </div>
                  </div>

                  <div className="text-center text-coffee-brown">
                    <div className="bg-gradient-to-r from-caramel-orange to-amber-600 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <MapPin className="h-10 w-10 text-white" />
                    </div>
                    <p className="text-lg font-semibold mb-2">🗺️ Interactive map would be displayed here</p>
                    <p className="text-sm text-espresso-black/80">📍 123 Coffee Street, Brew City, BC 12345</p>
                    <p className="text-xs text-caramel-orange mt-2 font-medium">Come visit us for the perfect cup! ☕</p>
                  </div>

                  {/* Scattered Coffee Beans */}
                  <div className="absolute top-8 left-8 w-2 h-3 bg-coffee-brown/20 rounded-full transform rotate-12"></div>
                  <div className="absolute bottom-8 right-8 w-3 h-4 bg-amber-600/20 rounded-full transform -rotate-45"></div>
                  <div className="absolute top-16 right-12 w-2 h-3 bg-caramel-orange/20 rounded-full transform rotate-60"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
