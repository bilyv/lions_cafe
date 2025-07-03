import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Search,
  Filter,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Package,
  Truck,
  User,
  Calendar,
  DollarSign,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

/**
 * Admin Orders Management Component
 * Handles table-based order tracking, status updates, and order history (QR scan orders)
 * All orders are associated with tables - no online ordering
 * Uses local state for data management (no backend)
 */

// Mock table-based order data (QR scan orders)
// All orders are associated with tables
const initialOrders = [
  {
    id: 'ORD-001',
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    customerPhone: '+1 234 567 8900',
    items: [
      { name: 'Cappuccino', quantity: 2, price: 4.50 },
      { name: 'Croissant', quantity: 1, price: 3.25 },
    ],
    totalAmount: 12.25,
    status: 'pending',
    orderType: 'table-order',
    tableNumber: 'T-05',
    orderTime: '2024-01-15T10:30:00Z',
    estimatedTime: '2024-01-15T10:45:00Z',
    notes: 'Extra hot cappuccino',
  },
  {
    id: 'ORD-002',
    customerName: 'Jane Smith',
    customerEmail: 'jane@example.com',
    customerPhone: '+1 234 567 8901',
    items: [
      { name: 'Latte', quantity: 1, price: 5.00 },
      { name: 'Chocolate Cake', quantity: 1, price: 5.75 },
    ],
    totalAmount: 10.75,
    status: 'preparing',
    orderType: 'table-order',
    tableNumber: 'T-03',
    orderTime: '2024-01-15T10:25:00Z',
    estimatedTime: '2024-01-15T10:40:00Z',
    notes: 'QR scan order from table 3',
  },
  {
    id: 'ORD-003',
    customerName: 'Mike Johnson',
    customerEmail: 'mike@example.com',
    customerPhone: '+1 234 567 8902',
    items: [
      { name: 'Espresso', quantity: 3, price: 3.00 },
      { name: 'Croissant', quantity: 2, price: 3.25 },
    ],
    totalAmount: 15.50,
    status: 'ready',
    orderType: 'table-order',
    tableNumber: 'T-07',
    orderTime: '2024-01-15T10:20:00Z',
    estimatedTime: '2024-01-15T10:35:00Z',
    notes: 'Large group order',
  },
  {
    id: 'ORD-004',
    customerName: 'Sarah Wilson',
    customerEmail: 'sarah@example.com',
    customerPhone: '+1 234 567 8903',
    items: [
      { name: 'Cappuccino', quantity: 1, price: 4.50 },
    ],
    totalAmount: 4.50,
    status: 'completed',
    orderType: 'table-order',
    tableNumber: 'T-02',
    orderTime: '2024-01-15T09:45:00Z',
    estimatedTime: '2024-01-15T10:00:00Z',
    notes: 'Quick order via QR scan',
  },
];

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled';
  orderType: 'table-order'; // Only table-based orders (QR scan)
  tableNumber: string; // Always required for table orders
  orderTime: string;
  estimatedTime: string;
  notes: string;
}

const AdminOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isOrderDetailOpen, setIsOrderDetailOpen] = useState(false);
  const { toast } = useToast();

  /**
   * Filter orders based on search and status
   * All orders are table-based (QR scan orders)
   */
  const filteredOrders = orders.filter(order => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.tableNumber.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  /**
   * Get orders by status for tabs
   */
  const getOrdersByStatus = (status: string) => {
    if (status === 'all') return orders;
    return orders.filter(order => order.status === status);
  };

  /**
   * Update order status
   */
  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
    
    toast({
      title: 'Order Updated',
      description: `Order ${orderId} status changed to ${newStatus}`,
    });
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
   * Format date and time
   */
  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
  };

  /**
   * Get status badge
   */
  const getStatusBadge = (status: Order['status']) => {
    const statusConfig = {
      pending: { variant: 'secondary' as const, icon: Clock, color: 'text-gray-600' },
      preparing: { variant: 'default' as const, icon: Package, color: 'text-blue-600' },
      ready: { variant: 'default' as const, icon: CheckCircle, color: 'text-green-600' },
      completed: { variant: 'default' as const, icon: CheckCircle, color: 'text-green-600' },
      cancelled: { variant: 'destructive' as const, icon: XCircle, color: 'text-red-600' },
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
      <Badge variant={config.variant} className="capitalize">
        <Icon className="h-3 w-3 mr-1" />
        {status}
      </Badge>
    );
  };

  /**
   * Get order type badge for table orders (QR scan)
   */
  const getOrderTypeBadge = (type: Order['orderType']) => {
    return (
      <Badge variant="outline" className="bg-blue-100 text-blue-800">
        <User className="h-3 w-3 mr-1" />
        QR Table Order
      </Badge>
    );
  };

  /**
   * View order details
   */
  const viewOrderDetails = (order: Order) => {
    setSelectedOrder(order);
    setIsOrderDetailOpen(true);
  };

  /**
   * Order statistics
   */
  const orderStats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    preparing: orders.filter(o => o.status === 'preparing').length,
    ready: orders.filter(o => o.status === 'ready').length,
    completed: orders.filter(o => o.status === 'completed').length,
    totalRevenue: orders
      .filter(o => o.status === 'completed')
      .reduce((sum, order) => sum + order.totalAmount, 0),
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Table Order Management</h1>
          <p className="text-gray-600 mt-1">Track and manage QR scan table orders</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Today
          </Button>
          <Button>
            <Filter className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Order Statistics - Responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        <Card className="bg-gradient-to-br from-slate-500 to-slate-600 text-white border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-100">Total Orders</CardTitle>
            <div className="bg-white/20 p-1.5 rounded-lg">
              <Package className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{orderStats.total}</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-amber-100">Pending</CardTitle>
            <div className="bg-white/20 p-1.5 rounded-lg">
              <Clock className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{orderStats.pending}</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-100">Preparing</CardTitle>
            <div className="bg-white/20 p-1.5 rounded-lg">
              <Package className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{orderStats.preparing}</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-100">Ready</CardTitle>
            <div className="bg-white/20 p-1.5 rounded-lg">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{orderStats.ready}</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-emerald-100">Completed</CardTitle>
            <div className="bg-white/20 p-1.5 rounded-lg">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{orderStats.completed}</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-rose-500 to-rose-600 text-white border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-rose-100">Revenue</CardTitle>
            <div className="bg-white/20 p-1.5 rounded-lg">
              <DollarSign className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(orderStats.totalRevenue)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="preparing">Preparing</SelectItem>
            <SelectItem value="ready">Ready</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>

      </div>

      {/* Orders Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All ({orders.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({getOrdersByStatus('pending').length})</TabsTrigger>
          <TabsTrigger value="preparing">Preparing ({getOrdersByStatus('preparing').length})</TabsTrigger>
          <TabsTrigger value="ready">Ready ({getOrdersByStatus('ready').length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({getOrdersByStatus('completed').length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4">
            {filteredOrders.map((order) => {
              const orderDateTime = formatDateTime(order.orderTime);
              const estimatedDateTime = formatDateTime(order.estimatedTime);
              
              return (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div>
                          <CardTitle className="text-lg">{order.id}</CardTitle>
                          <CardDescription>
                            {order.customerName} • {orderDateTime.date} at {orderDateTime.time}
                          </CardDescription>
                        </div>
                        <div className="flex space-x-2">
                          {getStatusBadge(order.status)}
                          {getOrderTypeBadge(order.orderType)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold">{formatCurrency(order.totalAmount)}</div>
                        <div className="text-sm text-gray-500">
                          Table {order.tableNumber}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-sm text-gray-600 mb-2">
                          Items: {order.items.map(item => `${item.quantity}x ${item.name}`).join(', ')}
                        </div>
                        {order.notes && (
                          <div className="text-sm text-gray-500 italic">
                            Note: {order.notes}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {order.status === 'pending' && (
                          <Button
                            size="sm"
                            onClick={() => updateOrderStatus(order.id, 'preparing')}
                          >
                            Start Preparing
                          </Button>
                        )}
                        {order.status === 'preparing' && (
                          <Button
                            size="sm"
                            onClick={() => updateOrderStatus(order.id, 'ready')}
                          >
                            Mark Ready
                          </Button>
                        )}
                        {order.status === 'ready' && (
                          <Button
                            size="sm"
                            onClick={() => updateOrderStatus(order.id, 'completed')}
                          >
                            Complete
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => viewOrderDetails(order)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Other tab contents would be similar but filtered by status */}
        {['pending', 'preparing', 'ready', 'completed'].map(status => (
          <TabsContent key={status} value={status} className="space-y-4">
            <div className="grid gap-4">
              {getOrdersByStatus(status).map((order) => {
                const orderDateTime = formatDateTime(order.orderTime);
                
                return (
                  <Card key={order.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div>
                            <CardTitle className="text-lg">{order.id}</CardTitle>
                            <CardDescription>
                              {order.customerName} • {orderDateTime.date} at {orderDateTime.time}
                            </CardDescription>
                          </div>
                          <div className="flex space-x-2">
                            {getStatusBadge(order.status)}
                            {getOrderTypeBadge(order.orderType)}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">{formatCurrency(order.totalAmount)}</div>
                          <div className="text-sm text-gray-500">
                            Table {order.tableNumber}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="text-sm text-gray-600 mb-2">
                            Items: {order.items.map(item => `${item.quantity}x ${item.name}`).join(', ')}
                          </div>
                          {order.notes && (
                            <div className="text-sm text-gray-500 italic">
                              Note: {order.notes}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => viewOrderDetails(order)}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Order Detail Dialog */}
      <Dialog open={isOrderDetailOpen} onOpenChange={setIsOrderDetailOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Order Details - {selectedOrder?.id}</DialogTitle>
            <DialogDescription>
              Complete order information and customer details
            </DialogDescription>
          </DialogHeader>
          
          {selectedOrder && (
            <div className="space-y-6">
              {/* Customer Information */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Customer Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium">{selectedOrder.customerName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{selectedOrder.customerEmail}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{selectedOrder.customerPhone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Order Type</p>
                    <div className="mt-1">{getOrderTypeBadge(selectedOrder.orderType)}</div>
                  </div>
                </div>
              </div>

              {/* Order Information */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Order Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Order Time</p>
                    <p className="font-medium">
                      {formatDateTime(selectedOrder.orderTime).date} at {formatDateTime(selectedOrder.orderTime).time}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Estimated Time</p>
                    <p className="font-medium">
                      {formatDateTime(selectedOrder.estimatedTime).time}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <div className="mt-1">{getStatusBadge(selectedOrder.status)}</div>
                  </div>
                  {selectedOrder.tableNumber && (
                    <div>
                      <p className="text-sm text-gray-500">Table</p>
                      <p className="font-medium">{selectedOrder.tableNumber}</p>
                    </div>
                  )}
                </div>
                {selectedOrder.notes && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Notes</p>
                    <p className="font-medium">{selectedOrder.notes}</p>
                  </div>
                )}
              </div>

              {/* Order Items */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Order Items</h3>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatCurrency(item.price * item.quantity)}</p>
                        <p className="text-sm text-gray-500">{formatCurrency(item.price)} each</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between items-center p-3 border-t-2 border-gray-200 font-bold">
                    <span>Total</span>
                    <span>{formatCurrency(selectedOrder.totalAmount)}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-2">
                {selectedOrder.status === 'pending' && (
                  <Button onClick={() => {
                    updateOrderStatus(selectedOrder.id, 'preparing');
                    setIsOrderDetailOpen(false);
                  }}>
                    Start Preparing
                  </Button>
                )}
                {selectedOrder.status === 'preparing' && (
                  <Button onClick={() => {
                    updateOrderStatus(selectedOrder.id, 'ready');
                    setIsOrderDetailOpen(false);
                  }}>
                    Mark Ready
                  </Button>
                )}
                {selectedOrder.status === 'ready' && (
                  <Button onClick={() => {
                    updateOrderStatus(selectedOrder.id, 'completed');
                    setIsOrderDetailOpen(false);
                  }}>
                    Complete Order
                  </Button>
                )}
                <Button variant="outline" onClick={() => setIsOrderDetailOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminOrders;
