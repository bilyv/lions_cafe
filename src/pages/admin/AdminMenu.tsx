import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import {
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  Eye,
  EyeOff,
  Star,
  Coffee,
  Utensils,
  Cookie,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

/**
 * Admin Menu Management Component
 * Handles CRUD operations for menu items and categories
 * Uses local state for data management (no backend)
 */

// Mock data for categories
const initialCategories = [
  { id: '1', name: 'Coffee', description: 'Premium coffee beverages', icon: Coffee, itemCount: 12 },
  { id: '2', name: 'Food', description: 'Fresh food items', icon: Utensils, itemCount: 8 },
  { id: '3', name: 'Desserts', description: 'Sweet treats and desserts', icon: Cookie, itemCount: 6 },
];

// Mock data for menu items
const initialMenuItems = [
  {
    id: '1',
    name: 'Cappuccino',
    description: 'Rich espresso with steamed milk and foam',
    price: 4.50,
    category: 'Coffee',
    categoryId: '1',
    image: '/placeholder.svg',
    isAvailable: true,
    isFeatured: true,
    preparationTime: 5,
  },
  {
    id: '2',
    name: 'Croissant',
    description: 'Buttery, flaky pastry perfect for breakfast',
    price: 3.25,
    category: 'Food',
    categoryId: '2',
    image: '/placeholder.svg',
    isAvailable: true,
    isFeatured: false,
    preparationTime: 2,
  },
  {
    id: '3',
    name: 'Chocolate Cake',
    description: 'Decadent chocolate cake with rich frosting',
    price: 5.75,
    category: 'Desserts',
    categoryId: '3',
    image: '/placeholder.svg',
    isAvailable: false,
    isFeatured: true,
    preparationTime: 3,
  },
];

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  categoryId: string;
  image: string;
  isAvailable: boolean;
  isFeatured: boolean;
  preparationTime: number;
}

interface Category {
  id: string;
  name: string;
  description: string;
  icon: any;
  itemCount: number;
}

const AdminMenu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isAddItemDialogOpen, setIsAddItemDialogOpen] = useState(false);
  const [isEditItemDialogOpen, setIsEditItemDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const { toast } = useToast();

  // Form state for adding/editing items
  const [itemForm, setItemForm] = useState({
    name: '',
    description: '',
    price: '',
    categoryId: '',
    isAvailable: true,
    isFeatured: false,
    preparationTime: '',
  });

  /**
   * Filter menu items based on search and category
   */
  const filteredMenuItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.categoryId === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  /**
   * Handle form input changes
   */
  const handleFormChange = (field: string, value: any) => {
    setItemForm(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  /**
   * Reset form to initial state
   */
  const resetForm = () => {
    setItemForm({
      name: '',
      description: '',
      price: '',
      categoryId: '',
      isAvailable: true,
      isFeatured: false,
      preparationTime: '',
    });
  };

  /**
   * Handle adding new menu item
   */
  const handleAddItem = () => {
    if (!itemForm.name || !itemForm.price || !itemForm.categoryId) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    const category = categories.find(cat => cat.id === itemForm.categoryId);
    const newItem: MenuItem = {
      id: Date.now().toString(),
      name: itemForm.name,
      description: itemForm.description,
      price: parseFloat(itemForm.price),
      category: category?.name || '',
      categoryId: itemForm.categoryId,
      image: '/placeholder.svg',
      isAvailable: itemForm.isAvailable,
      isFeatured: itemForm.isFeatured,
      preparationTime: parseInt(itemForm.preparationTime) || 5,
    };

    setMenuItems(prev => [...prev, newItem]);
    setIsAddItemDialogOpen(false);
    resetForm();
    
    toast({
      title: 'Success',
      description: 'Menu item added successfully.',
    });
  };

  /**
   * Handle editing menu item
   */
  const handleEditItem = (item: MenuItem) => {
    setEditingItem(item);
    setItemForm({
      name: item.name,
      description: item.description,
      price: item.price.toString(),
      categoryId: item.categoryId,
      isAvailable: item.isAvailable,
      isFeatured: item.isFeatured,
      preparationTime: item.preparationTime.toString(),
    });
    setIsEditItemDialogOpen(true);
  };

  /**
   * Handle updating menu item
   */
  const handleUpdateItem = () => {
    if (!editingItem || !itemForm.name || !itemForm.price || !itemForm.categoryId) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    const category = categories.find(cat => cat.id === itemForm.categoryId);
    const updatedItem: MenuItem = {
      ...editingItem,
      name: itemForm.name,
      description: itemForm.description,
      price: parseFloat(itemForm.price),
      category: category?.name || '',
      categoryId: itemForm.categoryId,
      isAvailable: itemForm.isAvailable,
      isFeatured: itemForm.isFeatured,
      preparationTime: parseInt(itemForm.preparationTime) || 5,
    };

    setMenuItems(prev => prev.map(item => 
      item.id === editingItem.id ? updatedItem : item
    ));
    setIsEditItemDialogOpen(false);
    setEditingItem(null);
    resetForm();
    
    toast({
      title: 'Success',
      description: 'Menu item updated successfully.',
    });
  };

  /**
   * Handle deleting menu item
   */
  const handleDeleteItem = (itemId: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== itemId));
    toast({
      title: 'Success',
      description: 'Menu item deleted successfully.',
    });
  };

  /**
   * Toggle item availability
   */
  const toggleAvailability = (itemId: string) => {
    setMenuItems(prev => prev.map(item => 
      item.id === itemId ? { ...item, isAvailable: !item.isAvailable } : item
    ));
  };

  /**
   * Toggle featured status
   */
  const toggleFeatured = (itemId: string) => {
    setMenuItems(prev => prev.map(item => 
      item.id === itemId ? { ...item, isFeatured: !item.isFeatured } : item
    ));
  };

  /**
   * Format currency
   */
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  /**
   * Item Form Component
   */
  const ItemForm = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            value={itemForm.name}
            onChange={(e) => handleFormChange('name', e.target.value)}
            placeholder="Enter item name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Price *</Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            value={itemForm.price}
            onChange={(e) => handleFormChange('price', e.target.value)}
            placeholder="0.00"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={itemForm.description}
          onChange={(e) => handleFormChange('description', e.target.value)}
          placeholder="Enter item description"
          rows={3}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="category">Category *</Label>
          <Select value={itemForm.categoryId} onValueChange={(value) => handleFormChange('categoryId', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="prepTime">Preparation Time (minutes)</Label>
          <Input
            id="prepTime"
            type="number"
            value={itemForm.preparationTime}
            onChange={(e) => handleFormChange('preparationTime', e.target.value)}
            placeholder="5"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <Switch
            id="available"
            checked={itemForm.isAvailable}
            onCheckedChange={(checked) => handleFormChange('isAvailable', checked)}
          />
          <Label htmlFor="available">Available</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="featured"
            checked={itemForm.isFeatured}
            onCheckedChange={(checked) => handleFormChange('isFeatured', checked)}
          />
          <Label htmlFor="featured">Featured</Label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Menu Management</h1>
          <p className="text-gray-600 mt-1">Manage your menu items and categories</p>
        </div>
        <Dialog open={isAddItemDialogOpen} onOpenChange={setIsAddItemDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="h-4 w-4 mr-2" />
              Add Menu Item
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Menu Item</DialogTitle>
              <DialogDescription>
                Create a new menu item for your restaurant.
              </DialogDescription>
            </DialogHeader>
            <ItemForm />
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddItemDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddItem}>Add Item</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Categories Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.id}>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <Icon className="h-5 w-5 text-amber-600 mr-2" />
                <div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{category.itemCount}</div>
                <p className="text-xs text-muted-foreground">menu items</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMenuItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="aspect-video bg-gray-100 relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex space-x-1">
                {item.isFeatured && (
                  <Badge variant="default" className="bg-yellow-500">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                )}
                <Badge variant={item.isAvailable ? 'default' : 'secondary'}>
                  {item.isAvailable ? 'Available' : 'Unavailable'}
                </Badge>
              </div>
            </div>
            
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">{formatCurrency(item.price)}</div>
                  <div className="text-xs text-gray-500">{item.preparationTime} min</div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="flex items-center justify-between">
                <Badge variant="outline">{item.category}</Badge>
                <div className="flex space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleAvailability(item.id)}
                  >
                    {item.isAvailable ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleFeatured(item.id)}
                  >
                    <Star className={`h-4 w-4 ${item.isFeatured ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEditItem(item)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Item Dialog */}
      <Dialog open={isEditItemDialogOpen} onOpenChange={setIsEditItemDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Menu Item</DialogTitle>
            <DialogDescription>
              Update the menu item details.
            </DialogDescription>
          </DialogHeader>
          <ItemForm />
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditItemDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateItem}>Update Item</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminMenu;
