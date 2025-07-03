import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  DollarSign,
  ShoppingBag,
  Users,
  Calendar,
  TrendingUp,
  TrendingDown,
  Clock,
  Star,
  AlertCircle,
  CheckCircle,
  Coffee,
} from 'lucide-react';

/**
 * Admin Dashboard Component
 * Displays key metrics, charts, and recent activity
 * Uses mock data for demonstration purposes
 */
const AdminDashboard: React.FC = () => {
  /**
   * Get time of day greeting
   */
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 17) return 'afternoon';
    return 'evening';
  };

  // Mock data for dashboard metrics
  const dashboardStats = {
    totalRevenue: 15420.50,
    revenueChange: 12.5,
    totalOrders: 342,
    ordersChange: 8.2,
    totalCustomers: 1250,
    customersChange: 15.3,
    totalReservations: 89,
    reservationsChange: -2.1,
  };

  // Mock data for charts
  const salesData = [
    { name: 'Mon', sales: 2400, orders: 24 },
    { name: 'Tue', sales: 1398, orders: 18 },
    { name: 'Wed', sales: 9800, orders: 45 },
    { name: 'Thu', sales: 3908, orders: 32 },
    { name: 'Fri', sales: 4800, orders: 38 },
    { name: 'Sat', sales: 3800, orders: 28 },
    { name: 'Sun', sales: 4300, orders: 35 },
  ];

  const orderStatusData = [
    { name: 'Completed', value: 65, color: '#10B981' },
    { name: 'Preparing', value: 20, color: '#F59E0B' },
    { name: 'Pending', value: 10, color: '#6B7280' },
    { name: 'Cancelled', value: 5, color: '#EF4444' },
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'John Doe', amount: 45.50, status: 'completed', time: '2 min ago' },
    { id: '#ORD-002', customer: 'Jane Smith', amount: 32.75, status: 'preparing', time: '5 min ago' },
    { id: '#ORD-003', customer: 'Mike Johnson', amount: 67.25, status: 'pending', time: '8 min ago' },
    { id: '#ORD-004', customer: 'Sarah Wilson', amount: 28.90, status: 'completed', time: '12 min ago' },
  ];

  const topMenuItems = [
    { name: 'Cappuccino', orders: 156, revenue: 780.00 },
    { name: 'Croissant', orders: 134, revenue: 536.00 },
    { name: 'Latte', orders: 128, revenue: 640.00 },
    { name: 'Espresso', orders: 98, revenue: 294.00 },
  ];

  /**
   * Format currency values
   */
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  /**
   * Get status badge variant
   */
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="default" className="bg-green-100 text-green-800">Completed</Badge>;
      case 'preparing':
        return <Badge variant="default" className="bg-yellow-100 text-yellow-800">Preparing</Badge>;
      case 'pending':
        return <Badge variant="default" className="bg-gray-100 text-gray-800">Pending</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Animated Welcome Section - Responsive */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 text-white shadow-2xl">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-red-400/20 animate-pulse"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4 lg:mb-6">
            <div className="bg-white/20 p-2 sm:p-3 rounded-full animate-bounce self-start">
              <Coffee className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold animate-fade-in-up">
                Welcome to Lions Cafe
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-amber-100 animate-fade-in-up animation-delay-200">
                Admin Dashboard
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="animate-fade-in-up animation-delay-400">
              <p className="text-amber-100 mb-1 sm:mb-2 text-sm sm:text-base">Good {getTimeOfDay()}, Admin!</p>
              <p className="text-xs sm:text-sm text-amber-200">
                Manage your cafe operations with ease
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 animate-fade-in-up animation-delay-600">
              <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-sm">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Last 7 days
              </Button>
              <Button className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-sm">
                <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                View Reports
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements - Responsive */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/10 rounded-full animate-float animation-delay-1000"></div>
      </div>

      {/* Key Metrics Cards - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 sm:pb-3">
            <CardTitle className="text-xs sm:text-sm font-medium text-emerald-100">Total Revenue</CardTitle>
            <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg">
              <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">{formatCurrency(dashboardStats.totalRevenue)}</div>
            <p className="text-xs sm:text-sm text-emerald-100 flex items-center">
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              +{dashboardStats.revenueChange}% from last week
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 sm:pb-3">
            <CardTitle className="text-xs sm:text-sm font-medium text-blue-100">Total Orders</CardTitle>
            <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg">
              <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">{dashboardStats.totalOrders}</div>
            <p className="text-xs sm:text-sm text-blue-100 flex items-center">
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              +{dashboardStats.ordersChange}% from last week
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 sm:pb-3">
            <CardTitle className="text-xs sm:text-sm font-medium text-purple-100">Total Customers</CardTitle>
            <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">{dashboardStats.totalCustomers}</div>
            <p className="text-xs sm:text-sm text-purple-100 flex items-center">
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              +{dashboardStats.customersChange}% from last week
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 sm:pb-3">
            <CardTitle className="text-xs sm:text-sm font-medium text-orange-100">Reservations</CardTitle>
            <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">{dashboardStats.totalReservations}</div>
            <p className="text-xs sm:text-sm text-orange-100 flex items-center">
              <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              {Math.abs(dashboardStats.reservationsChange)}% from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section - Responsive */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        {/* Sales Chart */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-lg sm:text-xl">Weekly Sales</CardTitle>
            <CardDescription className="text-sm">Sales performance over the last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  fontSize={12}
                  className="sm:text-sm"
                />
                <YAxis
                  fontSize={12}
                  className="sm:text-sm"
                />
                <Tooltip
                  formatter={(value, name) => [
                    name === 'sales' ? formatCurrency(Number(value)) : value,
                    name === 'sales' ? 'Sales' : 'Orders'
                  ]}
                  contentStyle={{
                    fontSize: '14px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb'
                  }}
                />
                <Bar dataKey="sales" fill="#D97706" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Order Status Chart */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-lg sm:text-xl">Order Status Distribution</CardTitle>
            <CardDescription className="text-sm">Current order status breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250} className="sm:h-[300px]">
              <PieChart>
                <Pie
                  data={orderStatusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  className="sm:outerRadius-80"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelStyle={{ fontSize: '12px' }}
                >
                  {orderStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    fontSize: '14px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Section - Responsive */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-lg sm:text-xl">Recent Orders</CardTitle>
            <CardDescription className="text-sm">Latest customer orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 border rounded-lg space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="font-medium text-sm sm:text-base">{order.id}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{order.customer}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:flex-col sm:items-end sm:text-right">
                    <p className="font-medium text-sm sm:text-base">{formatCurrency(order.amount)}</p>
                    <div className="flex items-center space-x-2">
                      {getStatusBadge(order.status)}
                      <span className="text-xs text-gray-500">{order.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Menu Items */}
        <Card>
          <CardHeader>
            <CardTitle>Top Menu Items</CardTitle>
            <CardDescription>Best performing items this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topMenuItems.map((item, index) => (
                <div key={item.name} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.orders} orders</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatCurrency(item.revenue)}</p>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-500 mr-1" />
                      <span className="text-xs text-gray-500">Popular</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
