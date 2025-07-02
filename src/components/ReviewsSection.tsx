
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely love this place! The coffee is exceptional and the atmosphere is so cozy. Perfect for working or catching up with friends.",
      date: "2 weeks ago",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 5,
      text: "Best latte art in town! The baristas are true artists and the Lion's Special Brew is my new favorite. Highly recommend!",
      date: "1 month ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      text: "The avocado toast and cappuccino combo is perfect. Great service, clean environment, and reasonable prices. Will definitely be back!",
      date: "3 weeks ago",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 4,
      text: "Love the community feel here. Staff knows regulars by name and the coffee quality is consistently excellent. A true neighborhood gem.",
      date: "1 week ago",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Lisa Wang",
      rating: 5,
      text: "The pastries are freshly baked every morning and the wifi is perfect for remote work. This has become my second office!",
      date: "4 days ago",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "James Miller",
      rating: 5,
      text: "Exceptional service and even better coffee. The Lion's Blend is smooth with perfect crema. A must-visit spot!",
      date: "1 week ago",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Don't just take our word for it - hear from our amazing customers
          </p>
        </div>

        {/* Moving carousel of reviews */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="animate-[slide_30s_linear_infinite]">
              {[...reviews, ...reviews].map((review, index) => (
                <CarouselItem key={`${review.id}-${index}`} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 mx-2">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-800">{review.name}</p>
                          <div className="flex">{renderStars(review.rating)}</div>
                        </div>
                      </div>
                      <div className="flex items-start mb-3">
                        <Quote className="h-5 w-5 text-orange-400 mr-2 flex-shrink-0 mt-1" />
                        <p className="text-gray-700 text-sm leading-relaxed italic">
                          "{review.text}"
                        </p>
                      </div>
                      <div className="border-t pt-3">
                        <p className="text-gray-500 text-xs">{review.date}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto animate-fade-in animation-delay-600">
            <div className="flex justify-center mb-4">
              <div className="flex">{renderStars(5)}</div>
            </div>
            <p className="text-2xl font-bold text-gray-800 mb-2">4.9/5 Average Rating</p>
            <p className="text-gray-600">Based on 500+ customer reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
