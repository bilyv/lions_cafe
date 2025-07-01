
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedMenu = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Signature Lion's Blend",
      description: "Our house-roasted coffee with notes of chocolate and caramel",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Artisan Croissant",
      description: "Buttery, flaky pastry baked fresh daily",
      price: "$3.25",
      image: "https://images.unsplash.com/photo-1555507036-ab794f4ade75?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Caramel Macchiato",
      description: "Rich espresso with steamed milk and caramel drizzle",
      price: "$5.75",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Avocado Toast",
      description: "Fresh avocado on artisan bread with herbs and lime",
      price: "$8.50",
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      name: "Berry Parfait",
      description: "Greek yogurt layered with fresh berries and granola",
      price: "$6.25",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=200&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-cream-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-brown mb-4">
            Featured Menu Highlights
          </h2>
          <p className="text-lg text-espresso-black max-w-2xl mx-auto">
            Discover our most popular items, crafted with care and served with pride
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
          {featuredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="hover:shadow-lg transition-shadow animate-slide-in-up bg-white border-light-coffee"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-coffee-brown mb-2">{item.name}</h3>
                  <p className="text-sm text-espresso-black mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-caramel-orange">{item.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-caramel-orange hover:bg-caramel-orange/90 text-white">
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
