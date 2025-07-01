
import { Coffee, Users, Wifi, Armchair } from "lucide-react";

const ValueSection = () => {
  const features = [
    {
      icon: Coffee,
      title: "Locally Roasted Beans",
      description: "We source and roast our beans locally for the freshest flavor"
    },
    {
      icon: Users,
      title: "Expert Baristas",
      description: "Our skilled team crafts each cup with precision and passion"
    },
    {
      icon: Wifi,
      title: "Free Wi-Fi",
      description: "Stay connected while you enjoy your coffee and get work done"
    },
    {
      icon: Armchair,
      title: "Cozy & Work-Friendly",
      description: "Comfortable seating perfect for meetings, studying, or relaxing"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-brown mb-4">
            Why Choose Lion's Café?
          </h2>
          <p className="text-lg text-espresso-black max-w-2xl mx-auto">
            We're more than just a coffee shop – we're your neighborhood gathering place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow animate-slide-in-up bg-cream-beige"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-caramel-orange rounded-full mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-coffee-brown mb-2">
                  {feature.title}
                </h3>
                <p className="text-espresso-black">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
