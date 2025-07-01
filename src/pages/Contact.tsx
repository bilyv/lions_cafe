
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
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
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        {/* Header with Background Image */}
        <div 
          className="relative text-white py-16 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop")',
            minHeight: '300px'
          }}
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-amber-200">
              We'd love to hear from you. Get in touch with us today!
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-6">Get In Touch</h2>
                <p className="text-amber-700 mb-8">
                  Whether you have questions about our menu, want to book an event, or just want to say hello, 
                  we're here to help. Visit us or reach out through any of the methods below.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-amber-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-amber-900">
                      <MapPin className="h-5 w-5 mr-2 text-amber-600" />
                      Visit Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-amber-700">
                      123 Coffee Street<br />
                      Brew City, BC 12345<br />
                      United States
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-amber-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-amber-900">
                      <Phone className="h-5 w-5 mr-2 text-amber-600" />
                      Call Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-amber-700">
                      Phone: (555) 123-4567<br />
                      Available during business hours
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-amber-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-amber-900">
                      <Mail className="h-5 w-5 mr-2 text-amber-600" />
                      Email Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-amber-700">
                      hello@lionscafe.com<br />
                      We typically respond within 24 hours
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-amber-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-amber-900">
                      <Clock className="h-5 w-5 mr-2 text-amber-600" />
                      Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-amber-700">
                      Monday - Friday: 6:00 AM - 8:00 PM<br />
                      Saturday: 7:00 AM - 9:00 PM<br />
                      Sunday: 8:00 AM - 6:00 PM
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">Send us a Message</CardTitle>
                  <CardDescription className="text-amber-700">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-amber-900">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-amber-200 focus:border-amber-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-amber-900">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-amber-200 focus:border-amber-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-amber-900">Message</Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">Find Us on the Map</CardTitle>
                <CardDescription className="text-amber-700">
                  Located in the heart of Brew City, we're easy to find and close to public transportation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-amber-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-amber-700">
                    <MapPin className="h-12 w-12 mx-auto mb-2 text-amber-600" />
                    <p>Interactive map would be displayed here</p>
                    <p className="text-sm">123 Coffee Street, Brew City, BC 12345</p>
                  </div>
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
