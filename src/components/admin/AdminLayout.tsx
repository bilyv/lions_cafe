import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Coffee,
  LayoutDashboard,
  Menu as MenuIcon,
  ShoppingBag,
  Calendar,
  Users,
  Settings,
  LogOut,
  ChefHat,
  X,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

/**
 * Admin Layout Component
 * Provides the main layout structure for admin pages
 * Includes sidebar navigation, header, and content area
 */
const AdminLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  // Get admin user from localStorage
  const adminSession = JSON.parse(localStorage.getItem('adminSession') || '{}');
  const adminUser = adminSession.user || { name: 'Admin User', email: 'admin@lionscafe.com' };

  /**
   * Navigation items for the sidebar
   */
  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: LayoutDashboard,
      description: 'Overview and analytics',
    },
    {
      name: 'Menu Management',
      href: '/admin/menu',
      icon: ChefHat,
      description: 'Manage menu items and categories',
    },
    {
      name: 'Orders',
      href: '/admin/orders',
      icon: ShoppingBag,
      description: 'Track and manage orders',
    },
    {
      name: 'Reservations',
      href: '/admin/reservations',
      icon: Calendar,
      description: 'Manage table bookings',
    },
    {
      name: 'Workers',
      href: '/admin/workers',
      icon: Users,
      description: 'Staff and worker management',
    },
    {
      name: 'Settings',
      href: '/admin/settings',
      icon: Settings,
      description: 'System configuration',
    },
  ];

  /**
   * Handle user logout
   */
  const handleLogout = () => {
    localStorage.removeItem('adminSession');
    toast({
      title: 'Logged Out',
      description: 'You have been successfully logged out.',
    });
    navigate('/admin/login');
  };

  /**
   * Check if current path matches navigation item
   */
  const isCurrentPath = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  /**
   * Desktop Sidebar Navigation Component (Icon-only)
   */
  const DesktopSidebarNavigation = () => (
    <div className="flex flex-col h-full p-4">
      {/* Logo */}
      <div className="flex items-center justify-center mb-8">
        <div className="bg-amber-100 p-3 rounded-lg">
          <Coffee className="h-6 w-6 text-amber-600" />
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-3">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = isCurrentPath(item.href);

          return (
            <div key={item.name} className="relative group">
              <Button
                variant={isActive ? 'default' : 'ghost'}
                size="icon"
                className={`w-12 h-12 ${
                  isActive
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => navigate(item.href)}
              >
                <Icon className="h-5 w-5" />
              </Button>
              {/* Tooltip */}
              <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {item.name}
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );

  /**
   * Mobile Sidebar Navigation Component (Full width with text)
   */
  const MobileSidebarNavigation = () => (
    <div className="flex flex-col h-full p-4">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-8">
        <div className="bg-amber-100 p-2 rounded-lg">
          <Coffee className="h-6 w-6 text-amber-600" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-800">Lions Cafe</h1>
          <p className="text-xs text-gray-500">Admin Panel</p>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = isCurrentPath(item.href);

          return (
            <Button
              key={item.name}
              variant={isActive ? 'default' : 'ghost'}
              className={`w-full justify-start h-auto p-3 ${
                isActive
                  ? 'bg-amber-600 hover:bg-amber-700 text-white'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => {
                navigate(item.href);
                setSidebarOpen(false);
              }}
            >
              <Icon className="h-5 w-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">{item.name}</div>
                <div className={`text-xs ${isActive ? 'text-amber-100' : 'text-gray-500'}`}>
                  {item.description}
                </div>
              </div>
            </Button>
          );
        })}
      </nav>
    </div>
  );

  /**
   * Mobile Bottom Navigation Component - Responsive
   */
  const MobileBottomNavigation = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-50 shadow-lg" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="flex justify-around items-center py-1.5 sm:py-2 px-1 sm:px-2">
        {navigationItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const isActive = isCurrentPath(item.href);

          return (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center space-y-0.5 sm:space-y-1 h-auto py-1.5 sm:py-2 px-1 sm:px-2 min-w-0 flex-1 ${
                isActive
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-gray-500 hover:text-amber-600 hover:bg-gray-50'
              }`}
              onClick={() => navigate(item.href)}
            >
              <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="text-[10px] sm:text-xs font-medium truncate">
                {item.name.includes(' ') ? item.name.split(' ')[0] : item.name}
              </span>
            </Button>
          );
        })}
        {/* Settings button for mobile */}
        {navigationItems.length > 5 && (
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex flex-col items-center space-y-0.5 sm:space-y-1 h-auto py-1.5 sm:py-2 px-1 sm:px-2 min-w-0 flex-1 text-gray-500 hover:text-amber-600 hover:bg-gray-50"
              >
                <MenuIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="text-[10px] sm:text-xs font-medium">More</span>
              </Button>
            </SheetTrigger>
          </Sheet>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar - Icon only with rounded corners and increased spacing */}
      <div className="hidden lg:flex lg:w-20 lg:flex-col lg:fixed lg:left-8 lg:top-8 lg:bottom-8 bg-white border border-gray-200 rounded-3xl shadow-xl">
        <DesktopSidebarNavigation />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <MobileSidebarNavigation />
        </SheetContent>
      </Sheet>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNavigation />

      {/* Main Content */}
      <div className="flex-1 lg:ml-36 pb-16 lg:pb-0">
        {/* Profile Bar - Fixed position profile dropdown - Responsive */}
        <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-[9999]">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-200 hover:scale-105">
                <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                  <AvatarFallback className="bg-amber-100 text-amber-600 text-sm font-semibold">
                    {adminUser.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{adminUser.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {adminUser.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate('/admin/settings')}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Page Content - Responsive */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 pt-16 sm:pt-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
