
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
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        {/* Header */}
        <div className="bg-amber-900 text-amber-50 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
            <p className="text-xl text-amber-200">
              Discover our carefully crafted beverages and delicious food options
            </p>
          </div>
        </div>

        {/* Menu Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="hover:shadow-lg transition-shadow bg-white border-amber-200">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-amber-900 text-lg flex items-center gap-2">
                            {item.name}
                            {item.badge && (
                              <Badge variant="secondary" className="bg-amber-200 text-amber-800">
                                {item.badge}
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="text-amber-700 mt-1">
                            {item.description}
                          </CardDescription>
                        </div>
                        <div className="ml-4">
                          <span className="text-xl font-bold text-amber-900">{item.price}</span>
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
        <div className="bg-amber-100 py-12">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              Can't decide? Ask our baristas!
            </h3>
            <p className="text-amber-700 mb-6">
              Our friendly staff is always happy to recommend the perfect drink or meal for you.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
