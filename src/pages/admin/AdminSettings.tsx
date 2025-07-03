import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Settings,
  Store,
  Clock,
  Bell,
  Shield,
  Palette,
  Database,
  Mail,
  Save,
  RefreshCw,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

/**
 * Admin Settings Component
 * Handles restaurant configuration, system preferences, and settings
 * Uses local state for data management (no backend)
 */

const AdminSettings: React.FC = () => {
  const { toast } = useToast();

  // Restaurant settings state
  const [restaurantSettings, setRestaurantSettings] = useState({
    name: 'Lions Cafe',
    description: 'Premium coffee experience with exceptional service',
    address: '123 Coffee Street, City, State 12345',
    phone: '+1 (555) 123-4567',
    email: 'info@lionscafe.com',
    website: 'https://lionscafe.com',
    timezone: 'America/New_York',
    currency: 'USD',
  });

  // Operating hours state
  const [operatingHours, setOperatingHours] = useState({
    monday: { open: '07:00', close: '22:00', closed: false },
    tuesday: { open: '07:00', close: '22:00', closed: false },
    wednesday: { open: '07:00', close: '22:00', closed: false },
    thursday: { open: '07:00', close: '22:00', closed: false },
    friday: { open: '07:00', close: '23:00', closed: false },
    saturday: { open: '08:00', close: '23:00', closed: false },
    sunday: { open: '08:00', close: '21:00', closed: false },
  });

  // Notification settings state
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    orderNotifications: true,
    reservationNotifications: true,
    lowStockAlerts: true,
    dailyReports: true,
    weeklyReports: true,
    monthlyReports: false,
  });

  // System settings state
  const [systemSettings, setSystemSettings] = useState({
    autoBackup: true,
    backupFrequency: 'daily',
    sessionTimeout: '30',
    maxLoginAttempts: '5',
    enableTwoFactor: false,
    maintenanceMode: false,
    debugMode: false,
  });

  // Theme settings state
  const [themeSettings, setThemeSettings] = useState({
    primaryColor: '#D97706',
    secondaryColor: '#F59E0B',
    theme: 'light',
    compactMode: false,
    showAnimations: true,
  });

  /**
   * Handle restaurant settings change
   */
  const handleRestaurantSettingsChange = (field: string, value: string) => {
    setRestaurantSettings(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  /**
   * Handle operating hours change
   */
  const handleOperatingHoursChange = (day: string, field: string, value: string | boolean) => {
    setOperatingHours(prev => ({
      ...prev,
      [day]: {
        ...prev[day as keyof typeof prev],
        [field]: value,
      },
    }));
  };

  /**
   * Handle notification settings change
   */
  const handleNotificationSettingsChange = (field: string, value: boolean) => {
    setNotificationSettings(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  /**
   * Handle system settings change
   */
  const handleSystemSettingsChange = (field: string, value: string | boolean) => {
    setSystemSettings(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  /**
   * Handle theme settings change
   */
  const handleThemeSettingsChange = (field: string, value: string | boolean) => {
    setThemeSettings(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  /**
   * Save settings
   */
  const saveSettings = (settingsType: string) => {
    // In a real app, this would save to backend
    toast({
      title: 'Settings Saved',
      description: `${settingsType} settings have been saved successfully.`,
    });
  };

  /**
   * Reset settings to default
   */
  const resetSettings = (settingsType: string) => {
    toast({
      title: 'Settings Reset',
      description: `${settingsType} settings have been reset to default values.`,
    });
  };

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage your restaurant configuration and preferences</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset All
          </Button>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save All
          </Button>
        </div>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="restaurant" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="restaurant">
            <Store className="h-4 w-4 mr-2" />
            Restaurant
          </TabsTrigger>
          <TabsTrigger value="hours">
            <Clock className="h-4 w-4 mr-2" />
            Hours
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="system">
            <Shield className="h-4 w-4 mr-2" />
            System
          </TabsTrigger>
          <TabsTrigger value="appearance">
            <Palette className="h-4 w-4 mr-2" />
            Appearance
          </TabsTrigger>
        </TabsList>

        {/* Restaurant Settings */}
        <TabsContent value="restaurant" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Restaurant Information</CardTitle>
              <CardDescription>
                Basic information about your restaurant
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="restaurant-name">Restaurant Name</Label>
                  <Input
                    id="restaurant-name"
                    value={restaurantSettings.name}
                    onChange={(e) => handleRestaurantSettingsChange('name', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="restaurant-phone">Phone Number</Label>
                  <Input
                    id="restaurant-phone"
                    value={restaurantSettings.phone}
                    onChange={(e) => handleRestaurantSettingsChange('phone', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="restaurant-description">Description</Label>
                <Textarea
                  id="restaurant-description"
                  value={restaurantSettings.description}
                  onChange={(e) => handleRestaurantSettingsChange('description', e.target.value)}
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="restaurant-address">Address</Label>
                <Textarea
                  id="restaurant-address"
                  value={restaurantSettings.address}
                  onChange={(e) => handleRestaurantSettingsChange('address', e.target.value)}
                  rows={2}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="restaurant-email">Email</Label>
                  <Input
                    id="restaurant-email"
                    type="email"
                    value={restaurantSettings.email}
                    onChange={(e) => handleRestaurantSettingsChange('email', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="restaurant-website">Website</Label>
                  <Input
                    id="restaurant-website"
                    value={restaurantSettings.website}
                    onChange={(e) => handleRestaurantSettingsChange('website', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select value={restaurantSettings.timezone} onValueChange={(value) => handleRestaurantSettingsChange('timezone', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/New_York">Eastern Time</SelectItem>
                      <SelectItem value="America/Chicago">Central Time</SelectItem>
                      <SelectItem value="America/Denver">Mountain Time</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select value={restaurantSettings.currency} onValueChange={(value) => handleRestaurantSettingsChange('currency', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD ($)</SelectItem>
                      <SelectItem value="EUR">EUR (€)</SelectItem>
                      <SelectItem value="GBP">GBP (£)</SelectItem>
                      <SelectItem value="CAD">CAD (C$)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => resetSettings('Restaurant')}>
                  Reset
                </Button>
                <Button onClick={() => saveSettings('Restaurant')}>
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Operating Hours */}
        <TabsContent value="hours" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Operating Hours</CardTitle>
              <CardDescription>
                Set your restaurant's operating hours for each day of the week
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {days.map((day) => (
                <div key={day} className="flex items-center space-x-4">
                  <div className="w-24">
                    <Label className="capitalize font-medium">{day}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={!operatingHours[day as keyof typeof operatingHours].closed}
                      onCheckedChange={(checked) => handleOperatingHoursChange(day, 'closed', !checked)}
                    />
                    <span className="text-sm text-gray-500">Open</span>
                  </div>
                  {!operatingHours[day as keyof typeof operatingHours].closed && (
                    <>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor={`${day}-open`} className="text-sm">From:</Label>
                        <Input
                          id={`${day}-open`}
                          type="time"
                          value={operatingHours[day as keyof typeof operatingHours].open}
                          onChange={(e) => handleOperatingHoursChange(day, 'open', e.target.value)}
                          className="w-32"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor={`${day}-close`} className="text-sm">To:</Label>
                        <Input
                          id={`${day}-close`}
                          type="time"
                          value={operatingHours[day as keyof typeof operatingHours].close}
                          onChange={(e) => handleOperatingHoursChange(day, 'close', e.target.value)}
                          className="w-32"
                        />
                      </div>
                    </>
                  )}
                  {operatingHours[day as keyof typeof operatingHours].closed && (
                    <span className="text-sm text-gray-500 italic">Closed</span>
                  )}
                </div>
              ))}
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => resetSettings('Operating Hours')}>
                  Reset
                </Button>
                <Button onClick={() => saveSettings('Operating Hours')}>
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Configure how and when you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-gray-500">Receive notifications via email</p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={notificationSettings.emailNotifications}
                    onCheckedChange={(checked) => handleNotificationSettingsChange('emailNotifications', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="order-notifications">Order Notifications</Label>
                    <p className="text-sm text-gray-500">Get notified about new orders</p>
                  </div>
                  <Switch
                    id="order-notifications"
                    checked={notificationSettings.orderNotifications}
                    onCheckedChange={(checked) => handleNotificationSettingsChange('orderNotifications', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="reservation-notifications">Reservation Notifications</Label>
                    <p className="text-sm text-gray-500">Get notified about new reservations</p>
                  </div>
                  <Switch
                    id="reservation-notifications"
                    checked={notificationSettings.reservationNotifications}
                    onCheckedChange={(checked) => handleNotificationSettingsChange('reservationNotifications', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="low-stock-alerts">Low Stock Alerts</Label>
                    <p className="text-sm text-gray-500">Get alerted when inventory is low</p>
                  </div>
                  <Switch
                    id="low-stock-alerts"
                    checked={notificationSettings.lowStockAlerts}
                    onCheckedChange={(checked) => handleNotificationSettingsChange('lowStockAlerts', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="daily-reports">Daily Reports</Label>
                    <p className="text-sm text-gray-500">Receive daily sales and activity reports</p>
                  </div>
                  <Switch
                    id="daily-reports"
                    checked={notificationSettings.dailyReports}
                    onCheckedChange={(checked) => handleNotificationSettingsChange('dailyReports', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="weekly-reports">Weekly Reports</Label>
                    <p className="text-sm text-gray-500">Receive weekly summary reports</p>
                  </div>
                  <Switch
                    id="weekly-reports"
                    checked={notificationSettings.weeklyReports}
                    onCheckedChange={(checked) => handleNotificationSettingsChange('weeklyReports', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="monthly-reports">Monthly Reports</Label>
                    <p className="text-sm text-gray-500">Receive monthly analytics reports</p>
                  </div>
                  <Switch
                    id="monthly-reports"
                    checked={notificationSettings.monthlyReports}
                    onCheckedChange={(checked) => handleNotificationSettingsChange('monthlyReports', checked)}
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => resetSettings('Notification')}>
                  Reset
                </Button>
                <Button onClick={() => saveSettings('Notification')}>
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* System Settings */}
        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Configuration</CardTitle>
              <CardDescription>
                Configure system security and maintenance settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="auto-backup">Automatic Backup</Label>
                    <p className="text-sm text-gray-500">Enable automatic data backups</p>
                  </div>
                  <Switch
                    id="auto-backup"
                    checked={systemSettings.autoBackup}
                    onCheckedChange={(checked) => handleSystemSettingsChange('autoBackup', checked)}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="backup-frequency">Backup Frequency</Label>
                    <Select value={systemSettings.backupFrequency} onValueChange={(value) => handleSystemSettingsChange('backupFrequency', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                    <Input
                      id="session-timeout"
                      type="number"
                      value={systemSettings.sessionTimeout}
                      onChange={(e) => handleSystemSettingsChange('sessionTimeout', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="max-login-attempts">Max Login Attempts</Label>
                  <Input
                    id="max-login-attempts"
                    type="number"
                    value={systemSettings.maxLoginAttempts}
                    onChange={(e) => handleSystemSettingsChange('maxLoginAttempts', e.target.value)}
                    className="w-32"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-500">Enable 2FA for enhanced security</p>
                  </div>
                  <Switch
                    id="two-factor"
                    checked={systemSettings.enableTwoFactor}
                    onCheckedChange={(checked) => handleSystemSettingsChange('enableTwoFactor', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                    <p className="text-sm text-gray-500">Put the system in maintenance mode</p>
                  </div>
                  <Switch
                    id="maintenance-mode"
                    checked={systemSettings.maintenanceMode}
                    onCheckedChange={(checked) => handleSystemSettingsChange('maintenanceMode', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="debug-mode">Debug Mode</Label>
                    <p className="text-sm text-gray-500">Enable debug logging (development only)</p>
                  </div>
                  <Switch
                    id="debug-mode"
                    checked={systemSettings.debugMode}
                    onCheckedChange={(checked) => handleSystemSettingsChange('debugMode', checked)}
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => resetSettings('System')}>
                  Reset
                </Button>
                <Button onClick={() => saveSettings('System')}>
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance & Theme</CardTitle>
              <CardDescription>
                Customize the look and feel of your admin panel
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="primary-color">Primary Color</Label>
                    <Input
                      id="primary-color"
                      type="color"
                      value={themeSettings.primaryColor}
                      onChange={(e) => handleThemeSettingsChange('primaryColor', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="secondary-color">Secondary Color</Label>
                    <Input
                      id="secondary-color"
                      type="color"
                      value={themeSettings.secondaryColor}
                      onChange={(e) => handleThemeSettingsChange('secondaryColor', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="theme">Theme</Label>
                  <Select value={themeSettings.theme} onValueChange={(value) => handleThemeSettingsChange('theme', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="auto">Auto (System)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="compact-mode">Compact Mode</Label>
                    <p className="text-sm text-gray-500">Use a more compact interface layout</p>
                  </div>
                  <Switch
                    id="compact-mode"
                    checked={themeSettings.compactMode}
                    onCheckedChange={(checked) => handleThemeSettingsChange('compactMode', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="show-animations">Show Animations</Label>
                    <p className="text-sm text-gray-500">Enable interface animations and transitions</p>
                  </div>
                  <Switch
                    id="show-animations"
                    checked={themeSettings.showAnimations}
                    onCheckedChange={(checked) => handleThemeSettingsChange('showAnimations', checked)}
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => resetSettings('Appearance')}>
                  Reset
                </Button>
                <Button onClick={() => saveSettings('Appearance')}>
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;
