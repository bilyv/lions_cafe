import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
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
  DialogFooter,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Users,
  UserCheck,
  UserX,
  Shield,
  Mail,
  Phone,
  Calendar,
  User,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

/**
 * Admin Workers Management Component
 * Handles staff and worker account management
 * Uses local state for data management (no backend)
 */

// Mock worker data
const initialWorkers = [
  {
    id: '1',
    name: 'Mike Johnson',
    email: 'mike@lionscafe.com',
    phone: '+1 234 567 8902',
    role: 'staff',
    status: 'active',
    joinDate: '2023-12-01',
    lastLogin: '2024-01-15T09:00:00Z',
    department: 'Kitchen',
    position: 'Barista',
  },
  {
    id: '2',
    name: 'Sarah Wilson',
    email: 'sarah@lionscafe.com',
    phone: '+1 234 567 8903',
    role: 'manager',
    status: 'active',
    joinDate: '2023-11-15',
    lastLogin: '2024-01-15T08:30:00Z',
    department: 'Management',
    position: 'Store Manager',
  },
  {
    id: '3',
    name: 'Alex Chen',
    email: 'alex@lionscafe.com',
    phone: '+1 234 567 8904',
    role: 'staff',
    status: 'active',
    joinDate: '2024-01-05',
    lastLogin: '2024-01-14T16:45:00Z',
    department: 'Service',
    position: 'Server',
  },
];

interface Worker {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'staff' | 'manager' | 'admin';
  status: 'active' | 'inactive' | 'suspended';
  joinDate: string;
  lastLogin: string;
  department: string;
  position: string;
}

const AdminWorkers: React.FC = () => {
  const [workers, setWorkers] = useState<Worker[]>(initialWorkers);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isAddWorkerOpen, setIsAddWorkerOpen] = useState(false);
  const [newWorker, setNewWorker] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'staff' as Worker['role'],
    department: '',
    position: '',
  });
  const { toast } = useToast();

  /**
   * Filter workers based on search, role, and status
   */
  const filteredWorkers = workers.filter(worker => {
    const matchesSearch = 
      worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      worker.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      worker.phone.includes(searchTerm) ||
      worker.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      worker.position.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = roleFilter === 'all' || worker.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || worker.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  /**
   * Update worker status
   */
  const updateWorkerStatus = (workerId: string, newStatus: Worker['status']) => {
    setWorkers(prev => prev.map(worker => 
      worker.id === workerId ? { ...worker, status: newStatus } : worker
    ));
    
    toast({
      title: 'Worker Updated',
      description: `Worker status changed to ${newStatus}`,
    });
  };

  /**
   * Delete worker
   */
  const deleteWorker = (workerId: string) => {
    setWorkers(prev => prev.filter(worker => worker.id !== workerId));
    toast({
      title: 'Worker Deleted',
      description: 'Worker has been removed from the system',
    });
  };

  /**
   * Add new worker
   */
  const addWorker = () => {
    if (!newWorker.name || !newWorker.email || !newWorker.phone) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    const worker: Worker = {
      id: Date.now().toString(),
      ...newWorker,
      status: 'active',
      joinDate: new Date().toISOString().split('T')[0],
      lastLogin: new Date().toISOString(),
    };

    setWorkers(prev => [...prev, worker]);
    setNewWorker({
      name: '',
      email: '',
      phone: '',
      role: 'staff',
      department: '',
      position: '',
    });
    setIsAddWorkerOpen(false);
    
    toast({
      title: 'Worker Added',
      description: 'New worker has been added successfully',
    });
  };

  /**
   * Format date
   */
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  /**
   * Format last login
   */
  const formatLastLogin = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return formatDate(dateString);
  };

  /**
   * Get role badge
   */
  const getRoleBadge = (role: Worker['role']) => {
    const roleConfig = {
      staff: { variant: 'default' as const, icon: UserCheck },
      manager: { variant: 'default' as const, icon: Shield },
      admin: { variant: 'destructive' as const, icon: Shield },
    };

    const config = roleConfig[role];
    const Icon = config.icon;

    return (
      <Badge variant={config.variant} className="capitalize">
        <Icon className="h-3 w-3 mr-1" />
        {role}
      </Badge>
    );
  };

  /**
   * Get status badge
   */
  const getStatusBadge = (status: Worker['status']) => {
    const statusConfig = {
      active: { variant: 'default' as const, color: 'bg-green-100 text-green-800' },
      inactive: { variant: 'secondary' as const, color: 'bg-gray-100 text-gray-800' },
      suspended: { variant: 'destructive' as const, color: 'bg-red-100 text-red-800' },
    };

    const config = statusConfig[status];

    return (
      <Badge variant={config.variant} className={`capitalize ${config.color}`}>
        {status}
      </Badge>
    );
  };

  /**
   * Worker statistics
   */
  const workerStats = {
    total: workers.length,
    staff: workers.filter(w => w.role === 'staff').length,
    managers: workers.filter(w => w.role === 'manager').length,
    active: workers.filter(w => w.status === 'active').length,
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Workers Management</h1>
          <p className="text-gray-600 mt-1">Manage staff and worker accounts</p>
        </div>
      </div>

      {/* Worker Statistics - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-indigo-100">Total Workers</CardTitle>
            <div className="bg-white/20 p-2 rounded-lg">
              <Users className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{workerStats.total}</div>
            <p className="text-sm text-indigo-100">All team members</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-cyan-100">Staff</CardTitle>
            <div className="bg-white/20 p-2 rounded-lg">
              <UserCheck className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{workerStats.staff}</div>
            <p className="text-sm text-cyan-100">Front-line workers</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-violet-500 to-violet-600 text-white border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-violet-100">Managers</CardTitle>
            <div className="bg-white/20 p-2 rounded-lg">
              <Shield className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{workerStats.managers}</div>
            <p className="text-sm text-violet-100">Leadership team</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-teal-100">Active Workers</CardTitle>
            <div className="bg-white/20 p-2 rounded-lg">
              <UserCheck className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{workerStats.active}</div>
            <p className="text-sm text-teal-100">Currently working</p>
          </CardContent>
        </Card>
      </div>

      {/* Workers Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Workers</TabsTrigger>
          <TabsTrigger value="add">Add Worker</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search workers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Workers List */}
          <div className="grid gap-4">
            {filteredWorkers.map((worker) => (
              <Card key={worker.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-amber-100 text-amber-600">
                          {worker.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{worker.name}</CardTitle>
                        <CardDescription className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Mail className="h-3 w-3 mr-1" />
                            {worker.email}
                          </span>
                          <span className="flex items-center">
                            <Phone className="h-3 w-3 mr-1" />
                            {worker.phone}
                          </span>
                        </CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        {getRoleBadge(worker.role)}
                        {getStatusBadge(worker.status)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          Joined {formatDate(worker.joinDate)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Last login: {formatLastLogin(worker.lastLogin)}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-6">
                      <div>
                        <p className="text-sm text-gray-500">Department</p>
                        <p className="font-medium">{worker.department}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Position</p>
                        <p className="font-medium">{worker.position}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {worker.status === 'active' && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateWorkerStatus(worker.id, 'suspended')}
                        >
                          <UserX className="h-4 w-4 mr-1" />
                          Suspend
                        </Button>
                      )}
                      {worker.status === 'suspended' && (
                        <Button
                          size="sm"
                          onClick={() => updateWorkerStatus(worker.id, 'active')}
                        >
                          <UserCheck className="h-4 w-4 mr-1" />
                          Activate
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteWorker(worker.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="add" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add New Worker</CardTitle>
              <CardDescription>
                Fill in the details below to add a new worker to the system.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter full name"
                    value={newWorker.name}
                    onChange={(e) => setNewWorker(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    value={newWorker.email}
                    onChange={(e) => setNewWorker(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    placeholder="Enter phone number"
                    value={newWorker.phone}
                    onChange={(e) => setNewWorker(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select value={newWorker.role} onValueChange={(value: Worker['role']) => setNewWorker(prev => ({ ...prev, role: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="staff">Staff</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    placeholder="Enter department"
                    value={newWorker.department}
                    onChange={(e) => setNewWorker(prev => ({ ...prev, department: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input
                    id="position"
                    placeholder="Enter position"
                    value={newWorker.position}
                    onChange={(e) => setNewWorker(prev => ({ ...prev, position: e.target.value }))}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setNewWorker({
                    name: '',
                    email: '',
                    phone: '',
                    role: 'staff',
                    department: '',
                    position: '',
                  })}
                >
                  Clear
                </Button>
                <Button onClick={addWorker}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Worker
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminWorkers;
