
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Info } from "lucide-react";
import { useState } from "react";

const Menu = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const menuCategories = [
    {
      title: "Coffee",
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
        {
          name: "Mocha Delight",
          price: "$5.50",
          description: "Rich chocolate and espresso blend",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
        },
      ]
    },
    {
      title: "Drinks",
      items: [
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
    },
    {
      title: "Foods",
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
        {
          name: "Grilled Sandwich",
          price: "$7.50",
          description: "Toasted bread with cheese and vegetables",
          image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&h=200&fit=crop"
        },
      ]
    }
  ];

  // Create duplicated items for seamless loop
  const createDuplicatedItems = (items) => [...items, ...items];

  return (
    <Layout>
      <div className="min-h-screen" style={{ backgroundColor: 'hsl(42, 15%, 96%)' }}>
        {/* Header with Background Video */}
        <div className="relative text-white overflow-hidden" style={{ minHeight: '400px' }}>
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            poster="/envato-labs-ai-02cc4cca-55a0-417c-b0b3-b107e6e7f876.jpg"
            preload="metadata"
          >
            <source src="/envato_video_gen_Jul_13_2025_20_47_30.mp4" type="video/mp4" />
          </video>

          {/* Video overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30"></div>

          {/* Text Content */}
          <div className="relative z-10 flex items-center justify-center h-full py-16">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up text-white drop-shadow-lg">Our Menu</h1>
              <p className="text-xl animate-slide-in-up animation-delay-200 text-cream-beige drop-shadow-md">
                Discover our carefully crafted beverages and delicious food options
              </p>
            </div>
          </div>
        </div>



        {/* Menu Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {menuCategories.map((category, categoryIndex) => {
            const duplicatedItems = createDuplicatedItems(category.items);

            return (
              <div key={categoryIndex} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in" style={{ color: 'hsl(17, 41%, 31%)', animationDelay: `${categoryIndex * 0.1}s` }}>
                  {category.title}
                </h2>

                {/* Horizontal Slideshow Container */}
                <div className="relative overflow-hidden mb-8">
                  <div
                    className="flex animate-slide-horizontal"
                    onMouseEnter={() => setHoveredCategory(categoryIndex)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    style={{
                      width: `${duplicatedItems.length * 320}px`,
                      animationPlayState: hoveredCategory === categoryIndex ? 'paused' : 'running'
                    }}
                  >
                    {duplicatedItems.map((item, index) => (
                      <div
                        key={`${item.name}-${index}`}
                        className="flex-shrink-0 w-80 mx-2"
                      >
                        <Card
                          className={`hover:shadow-2xl transition-all duration-300 bg-white border-light-coffee transform ${
                            hoveredCategory === categoryIndex ? 'hover:scale-105 hover:z-10 hover:-translate-y-2' : ''
                          } overflow-hidden`}
                          style={{ borderColor: 'hsl(20, 20%, 82%)' }}
                        >
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Text-Based Menu Section */}
        <div className="py-16 bg-gradient-to-br from-coffee-brown via-amber-900 to-espresso-black relative overflow-hidden">
          {/* Coffee Bean Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-6 h-8 bg-amber-200 rounded-full transform rotate-12"></div>
            <div className="absolute top-32 right-20 w-4 h-6 bg-cream-beige rounded-full transform -rotate-12"></div>
            <div className="absolute bottom-20 left-32 w-8 h-10 bg-caramel-orange rounded-full transform rotate-45"></div>
            <div className="absolute bottom-40 right-16 w-5 h-7 bg-amber-300 rounded-full transform -rotate-45"></div>
            <div className="absolute top-1/2 left-1/4 w-3 h-4 bg-yellow-200 rounded-full transform rotate-90"></div>
            <div className="absolute top-1/3 right-1/3 w-7 h-9 bg-orange-200 rounded-full transform -rotate-30"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-cream-beige/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-400/30">
              {/* Menu Title */}
              <h2 className="font-dancing text-5xl md:text-6xl font-bold text-center mb-12 text-coffee-brown animate-fade-in">
                Lion's Café Menu
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Hot Coffee Section */}
                <div className="animate-slide-in-left">
                  <h3 className="font-dancing text-3xl md:text-4xl font-semibold mb-6 text-caramel-orange flex items-center">
                    ☕ Hot Coffee
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-coffee-brown/20 pb-2">
                      <span className="font-dancing text-xl md:text-2xl text-coffee-brown">Espresso</span>
                      <span className="font-dancing text-xl md:text-2xl font-semibold text-caramel-orange">1,200 RWF</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-coffee-brown/20 pb-2">
                      <span className="font-dancing text-xl md:text-2xl text-coffee-brown">Americano</span>
                      <span className="font-dancing text-xl md:text-2xl font-semibold text-caramel-orange">1,500 RWF</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-coffee-brown/20 pb-2">
                      <span className="font-dancing text-xl md:text-2xl text-coffee-brown">Cappuccino</span>
                      <span className="font-dancing text-xl md:text-2xl font-semibold text-caramel-orange">2,000 RWF</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-coffee-brown/20 pb-2">
                      <span className="font-dancing text-xl md:text-2xl text-coffee-brown">Café Latte</span>
                      <span className="font-dancing text-xl md:text-2xl font-semibold text-caramel-orange">2,200 RWF</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-coffee-brown/20 pb-2">
                      <span className="font-dancing text-xl md:text-2xl text-coffee-brown">Macchiato</span>
                      <span className="font-dancing text-xl md:text-2xl font-semibold text-caramel-orange">1,800 RWF</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-coffee-brown/20 pb-2">
                      <span className="font-dancing text-xl md:text-2xl text-coffee-brown">Mocha</span>
                      <span className="font-dancing text-xl md:text-2xl font-semibold text-caramel-orange">2,500 RWF</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-coffee-brown/20 pb-2">
                      <span className="font-dancing text-xl md:text-2xl text-coffee-brown">Lion's Signature Brew</span>
                      <span className="font-dancing text-xl md:text-2xl font-semibold text-caramel-orange">2,800 RWF</span>
                    </div>
                  </div>
                </div>

                {/* Cold Coffee / Iced Drinks Section */}
                <div className="animate-slide-in-right animation-delay-300">
                  <h3 className="font-dancing text-3xl md:text-4xl font-semibold mb-6 text-caramel-orange flex items-center">
                    🧊 Cold Coffee / Iced Drinks
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-coffee-brown/20 pb-2">
                      <span className="font-dancing text-xl md:text-2xl text-coffee-brown">Iced Americano</span>
                      <span className="font-dancing text-xl md:text-2xl font-semibold text-caramel-orange">1,800 RWF</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-coffee-brown/20 pb-2">
                      <span className="font-dancing text-xl md:text-2xl text-coffee-brown">Iced Latte</span>
                      <span className="font-dancing text-xl md:text-2xl font-semibold text-caramel-orange">2,300 RWF</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-coffee-brown/20 pb-2">
                      <span className="font-dancing text-xl md:text-2xl text-coffee-brown">Iced Mocha</span>
                      <span className="font-dancing text-xl md:text-2xl font-semibold text-caramel-orange">2,500 RWF</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-coffee-brown/20 pb-2">
                      <span className="font-dancing text-xl md:text-2xl text-coffee-brown">Cold Brew</span>
                      <span className="font-dancing text-xl md:text-2xl font-semibold text-caramel-orange">2,700 RWF</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-coffee-brown/20 pb-2">
                      <span className="font-dancing text-xl md:text-2xl text-coffee-brown">Affogato</span>
                      <span className="font-dancing text-xl md:text-2xl font-semibold text-caramel-orange">3,000 RWF</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Coffee Bean Elements */}
              <div className="absolute top-4 right-4 w-4 h-5 bg-coffee-brown/20 rounded-full transform rotate-45"></div>
              <div className="absolute bottom-6 left-6 w-3 h-4 bg-caramel-orange/30 rounded-full transform -rotate-30"></div>
              <div className="absolute top-8 left-8 w-2 h-3 bg-amber-400/20 rounded-full transform rotate-60"></div>
            </div>
          </div>
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
