
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Gift } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Live Jazz Night",
      date: "Every Friday",
      time: "7:00 PM - 9:00 PM",
      description: "Enjoy smooth jazz while sipping your favorite coffee",
      type: "event",
      icon: Calendar
    },
    {
      id: 2,
      title: "Buy 2 Get 1 Free",
      date: "All Week",
      time: "Valid until supplies last",
      description: "Special offer on all pastries - perfect for sharing!",
      type: "offer",
      icon: Gift
    }
  ];

  return (
    <section className="py-16 bg-light-coffee">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-brown mb-4">
            Upcoming Events & Offers
          </h2>
          <p className="text-lg text-espresso-black max-w-2xl mx-auto">
            Don't miss out on our special events and limited-time offers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <Card 
                key={event.id}
                className="hover:shadow-lg transition-shadow animate-slide-in-up bg-white border-2 border-caramel-orange/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-caramel-orange rounded-full">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-coffee-brown">{event.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-espresso-black mt-1">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-espresso-black mb-4">{event.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-caramel-orange text-caramel-orange hover:bg-caramel-orange hover:text-white">
            <span>See All Events</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
