
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Info } from "lucide-react";

const Menu = () => {
  const menuCategories = [
    {
      title: "Coffee & Espresso",
      items: [
        { 
          name: "Classic Espresso", 
          price: "$3.50", 
          description: "Rich, bold shot of our signature blend",
          image: "https://images.unsplash.com/photo-1510591509098-f4fdc79b83b8?w=300&h=200&fit=crop"
        },
        { 
          name: "Cappuccino", 
          price: "$4.25", 
          description: "Espresso with steamed milk and foam",
          image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop"
        },
        { 
          name: "Latte", 
          price: "$4.75", 
          description: "Smooth espresso with steamed milk",
          image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop"
        },
        { 
          name: "Lion's Special Brew", 
          price: "$5.25", 
          description: "Our signature house blend with caramel notes", 
          badge: "Popular",
          image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop"
        },
        { 
          name: "Iced Coffee", 
          price: "$4.00", 
          description: "Cold-brewed coffee served over ice",
          image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=200&fit=crop"
        },
      ]
    },
    {
      title: "Specialty Drinks",
      items: [
        { 
          name: "Mocha Delight", 
          price: "$5.50", 
          description: "Rich chocolate and espresso blend",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        },
        { 
          name: "Vanilla Macchiato", 
          price: "$5.25", 
          description: "Espresso with vanilla syrup and foam art",
          image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=300&h=200&fit=crop"
        },
        { 
          name: "Caramel Frappuccino", 
          price: "$5.75", 
          description: "Blended ice coffee with caramel",
          image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300&h=200&fit=crop"
        },
        { 
          name: "Golden Turmeric Latte", 
          price: "$4.95", 
          description: "Healthy blend with turmeric and spices", 
          badge: "New",
          image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop"
        },
      ]
    },
    {
      title: "Food & Pastries",
      items: [
        { 
          name: "Fresh Croissant", 
          price: "$3.25", 
          description: "Buttery, flaky pastry baked daily",
          image: "https://images.unsplash.com/photo-1555507036-ab794f4ade75?w=300&h=200&fit=crop"
        },
        { 
          name: "Avocado Toast", 
          price: "$8.50", 
          description: "Multigrain bread with fresh avocado and seasonings",
          image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=300&h=200&fit=crop"
        },
        { 
          name: "Lion's Breakfast Sandwich", 
          price: "$9.75", 
          description: "Eggs, cheese, and bacon on artisan bread", 
          badge: "Popular",
          image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725b?w=300&h=200&fit=crop"
        },
        { 
          name: "Blueberry Muffin", 
          price: "$3.75", 
          description: "House-made with fresh blueberries",
          image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=300&h=200&fit=crop"
        },
        { 
          name: "Caesar Salad", 
          price: "$11.25", 
          description: "Fresh greens with parmesan and our signature dressing",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop"
        },
      ]
    },
    {
      title: "Tea & Other Beverages",
      items: [
        { 
          name: "Earl Grey Tea", 
          price: "$3.25", 
          description: "Classic bergamot-flavored black tea",
          image: "https://images.unsplash.com/photo-1594631661960-31ff800c5049?w=300&h=200&fit=crop"
        },
        { 
          name: "Green Tea", 
          price: "$3.00", 
          description: "Antioxidant-rich green tea",
          image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop"
        },
        { 
          name: "Hot Chocolate", 
          price: "$4.25", 
          description: "Rich cocoa with whipped cream",
          image: "https://images.unsplash.com/photo-1542990253-a781e04c0082?w=300&h=200&fit=crop"
        },
        { 
          name: "Fresh Orange Juice", 
          price: "$4.50", 
          description: "Freshly squeezed daily",
          image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300&h=200&fit=crop"
        },
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen" style={{ backgroundColor: 'hsl(42, 15%, 96%)' }}>
        {/* Header with Background Image */}
        <div 
          className="relative text-white py-16 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop")',
            minHeight: '300px'
          }}
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">Our Menu</h1>
            <p className="text-xl animate-slide-in-up animation-delay-200" style={{ color: 'hsl(42, 15%, 96%)' }}>
              Discover our carefully crafted beverages and delicious food options
            </p>
          </div>
        </div>

        {/* Menu Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in" style={{ color: 'hsl(17, 41%, 31%)', animationDelay: `${categoryIndex * 0.1}s` }}>
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="hover:shadow-lg transition-all duration-300 bg-white transform hover:-translate-y-1 animate-slide-in-up overflow-hidden" style={{ animationDelay: `${(categoryIndex * 5 + itemIndex) * 0.05}s`, borderColor: 'hsl(20, 20%, 82%)' }}>
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      {item.badge && (
                        <Badge className="absolute top-2 right-2 text-white" style={{ backgroundColor: 'hsl(25, 69%, 45%)' }}>
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg" style={{ color: 'hsl(17, 41%, 31%)' }}>
                          {item.name}
                        </CardTitle>
                        <span className="text-xl font-bold ml-4" style={{ color: 'hsl(25, 69%, 45%)' }}>{item.price}</span>
                      </div>
                      <CardDescription className="mt-1" style={{ color: 'hsl(0, 0%, 40%)' }}>
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-caramel-orange hover:bg-caramel-orange/90 text-white">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Order
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 border-caramel-orange text-caramel-orange hover:bg-caramel-orange hover:text-white">
                          <Info className="h-4 w-4 mr-2" />
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="py-12" style={{ backgroundColor: 'hsl(20, 20%, 82%)' }}>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold mb-4 animate-fade-in" style={{ color: 'hsl(17, 41%, 31%)' }}>
              Can't decide? Ask our baristas!
            </h3>
            <p className="mb-6 animate-fade-in animation-delay-200" style={{ color: 'hsl(0, 0%, 11%)' }}>
              Our friendly staff is always happy to recommend the perfect drink or meal for you.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
