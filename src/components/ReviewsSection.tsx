
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely love this place! The coffee is exceptional and the atmosphere is so cozy. Perfect for working or catching up with friends.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 5,
      text: "Best latte art in town! The baristas are true artists and the Lion's Special Brew is my new favorite. Highly recommend!",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      text: "The avocado toast and cappuccino combo is perfect. Great service, clean environment, and reasonable prices. Will definitely be back!",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 4,
      text: "Love the community feel here. Staff knows regulars by name and the coffee quality is consistently excellent. A true neighborhood gem.",
      date: "1 week ago"
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
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Don't just take our word for it - hear from our amazing customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card 
              key={review.id} 
              className={`bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Quote className="h-6 w-6 text-orange-400 mr-2" />
                  <div className="flex">{renderStars(review.rating)}</div>
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "{review.text}"
                </p>
                <div className="border-t pt-3">
                  <p className="font-semibold text-gray-800 text-sm">{review.name}</p>
                  <p className="text-gray-500 text-xs">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
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
