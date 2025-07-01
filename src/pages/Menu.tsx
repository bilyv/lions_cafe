
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Menu = () => {
  const menuCategories = [
    {
      title: "Coffee & Espresso",
      items: [
        { name: "Classic Espresso", price: "$3.50", description: "Rich, bold shot of our signature blend" },
        { name: "Cappuccino", price: "$4.25", description: "Espresso with steamed milk and foam" },
        { name: "Latte", price: "$4.75", description: "Smooth espresso with steamed milk" },
        { name: "Lion's Special Brew", price: "$5.25", description: "Our signature house blend with caramel notes", badge: "Popular" },
        { name: "Iced Coffee", price: "$4.00", description: "Cold-brewed coffee served over ice" },
      ]
    },
    {
      title: "Specialty Drinks",
      items: [
        { name: "Mocha Delight", price: "$5.50", description: "Rich chocolate and espresso blend" },
        { name: "Vanilla Macchiato", price: "$5.25", description: "Espresso with vanilla syrup and foam art" },
        { name: "Caramel Frappuccino", price: "$5.75", description: "Blended ice coffee with caramel" },
        { name: "Golden Turmeric Latte", price: "$4.95", description: "Healthy blend with turmeric and spices", badge: "New" },
      ]
    },
    {
      title: "Food & Pastries",
      items: [
        { name: "Fresh Croissant", price: "$3.25", description: "Buttery, flaky pastry baked daily" },
        { name: "Avocado Toast", price: "$8.50", description: "Multigrain bread with fresh avocado and seasonings" },
        { name: "Lion's Breakfast Sandwich", price: "$9.75", description: "Eggs, cheese, and bacon on artisan bread", badge: "Popular" },
        { name: "Blueberry Muffin", price: "$3.75", description: "House-made with fresh blueberries" },
        { name: "Caesar Salad", price: "$11.25", description: "Fresh greens with parmesan and our signature dressing" },
      ]
    },
    {
      title: "Tea & Other Beverages",
      items: [
        { name: "Earl Grey Tea", price: "$3.25", description: "Classic bergamot-flavored black tea" },
        { name: "Green Tea", price: "$3.00", description: "Antioxidant-rich green tea" },
        { name: "Hot Chocolate", price: "$4.25", description: "Rich cocoa with whipped cream" },
        { name: "Fresh Orange Juice", price: "$4.50", description: "Freshly squeezed daily" },
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className={`hover:shadow-lg transition-all duration-300 bg-white transform hover:-translate-y-1 animate-slide-in-up`} style={{ animationDelay: `${(categoryIndex * 5 + itemIndex) * 0.05}s`, borderColor: 'hsl(20, 20%, 82%)' }}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg flex items-center gap-2" style={{ color: 'hsl(17, 41%, 31%)' }}>
                            {item.name}
                            {item.badge && (
                              <Badge variant="secondary" className="text-white" style={{ backgroundColor: 'hsl(25, 69%, 45%)' }}>
                                {item.badge}
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="mt-1" style={{ color: 'hsl(0, 0%, 40%)' }}>
                            {item.description}
                          </CardDescription>
                        </div>
                        <div className="ml-4">
                          <span className="text-xl font-bold" style={{ color: 'hsl(25, 69%, 45%)' }}>{item.price}</span>
                        </div>
                      </div>
                    </CardHeader>
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
