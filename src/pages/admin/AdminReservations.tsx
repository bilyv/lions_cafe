import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
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
  Calendar as CalendarIcon,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Plus,
  Edit,
  Trash2,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

/**
 * Admin Reservations Management Component
 * Handles table reservations and availability management
 * Uses local state for data management (no backend)
 */

// Mock reservation data
const initialReservations = [
  {
    id: 'RES-001',
    customerName: 'Alice Johnson',
    customerEmail: 'alice@example.com',
    customerPhone: '+1 234 567 8900',
    partySize: 4,
    date: '2024-01-15',
    time: '19:00',
    tableNumber: 'T-05',
    status: 'confirmed',
    notes: 'Anniversary dinner',
    createdAt: '2024-01-10T10:00:00Z',
  },
  {
    id: 'RES-002',
    customerName: 'Bob Smith',
    customerEmail: 'bob@example.com',
    customerPhone: '+1 234 567 8901',
    partySize: 2,
    date: '2024-01-15',
    time: '18:30',
    tableNumber: 'T-02',
    status: 'confirmed',
    notes: '',
    createdAt: '2024-01-12T14:30:00Z',
  },
  {
    id: 'RES-003',
    customerName: 'Carol Davis',
    customerEmail: 'carol@example.com',
    customerPhone: '+1 234 567 8902',
    partySize: 6,
    date: '2024-01-16',
    time: '20:00',
    tableNumber: 'T-08',
    status: 'pending',
    notes: 'Business dinner',
    createdAt: '2024-01-14T09:15:00Z',
  },
  {
    id: 'RES-004',
    customerName: 'David Wilson',
    customerEmail: 'david@example.com',
    customerPhone: '+1 234 567 8903',
    partySize: 3,
    date: '2024-01-14',
    time: '19:30',
    tableNumber: 'T-03',
    status: 'completed',
    notes: '',
    createdAt: '2024-01-13T16:45:00Z',
  },
];

// Mock table data
const tables = [
  { id: 'T-01', number: 'T-01', capacity: 2, status: 'available' },
  { id: 'T-02', number: 'T-02', capacity: 2, status: 'occupied' },
  { id: 'T-03', number: 'T-03', capacity: 4, status: 'available' },
  { id: 'T-04', number: 'T-04', capacity: 4, status: 'reserved' },
  { id: 'T-05', number: 'T-05', capacity: 4, status: 'reserved' },
  { id: 'T-06', number: 'T-06', capacity: 6, status: 'available' },
  { id: 'T-07', number: 'T-07', capacity: 6, status: 'available' },
  { id: 'T-08', number: 'T-08', capacity: 8, status: 'available' },
];

interface Reservation {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  partySize: number;
  date: string;
  time: string;
  tableNumber: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'no-show';
  notes: string;
  createdAt: string;
}

const AdminReservations: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>(initialReservations);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const { toast } = useToast();

  /**
   * Filter reservations based on search, status, and date
   */
  const filteredReservations = reservations.filter(reservation => {
    const matchesSearch = 
      reservation.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.customerEmail.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || reservation.status === statusFilter;
    
    const reservationDate = new Date(reservation.date);
    const matchesDate = reservationDate.toDateString() === selectedDate.toDateString();
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  /**
   * Update reservation status
   */
  const updateReservationStatus = (reservationId: string, newStatus: Reservation['status']) => {
    setReservations(prev => prev.map(reservation => 
      reservation.id === reservationId ? { ...reservation, status: newStatus } : reservation
    ));
    
    toast({
      title: 'Reservation Updated',
      description: `Reservation ${reservationId} status changed to ${newStatus}`,
    });
  };

  /**
   * Delete reservation
   */
  const deleteReservation = (reservationId: string) => {
    setReservations(prev => prev.filter(reservation => reservation.id !== reservationId));
    toast({
      title: 'Reservation Deleted',
      description: `Reservation ${reservationId} has been deleted`,
    });
  };

  /**
   * Get status badge
   */
  const getStatusBadge = (status: Reservation['status']) => {
    const statusConfig = {
      pending: { variant: 'secondary' as const, icon: Clock, color: 'text-yellow-600' },
      confirmed: { variant: 'default' as const, icon: CheckCircle, color: 'text-green-600' },
      completed: { variant: 'default' as const, icon: CheckCircle, color: 'text-green-600' },
      cancelled: { variant: 'destructive' as const, icon: XCircle, color: 'text-red-600' },
      'no-show': { variant: 'destructive' as const, icon: AlertCircle, color: 'text-red-600' },
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
      <Badge variant={config.variant} className="capitalize">
        <Icon className="h-3 w-3 mr-1" />
        {status.replace('-', ' ')}
      </Badge>
    );
  };

  /**
   * Format date
   */
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  /**
   * Format time
   */
  const formatTime = (timeString: string) => {
    return new Date(`2024-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  /**
   * Reservation statistics
   */
  const reservationStats = {
    total: reservations.length,
    today: reservations.filter(r => r.date === selectedDate.toISOString().split('T')[0]).length,
    pending: reservations.filter(r => r.status === 'pending').length,
    confirmed: reservations.filter(r => r.status === 'confirmed').length,
    totalGuests: reservations
      .filter(r => r.date === selectedDate.toISOString().split('T')[0] && r.status !== 'cancelled')
      .reduce((sum, reservation) => sum + reservation.partySize, 0),
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reservation Management</h1>
          <p className="text-gray-600 mt-1">Manage table reservations and availability</p>
        </div>
        <div className="flex space-x-2">
          <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <CalendarIcon className="h-4 w-4 mr-2" />
                {selectedDate.toLocaleDateString()}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Select Date</DialogTitle>
                <DialogDescription>
                  Choose a date to view reservations
                </DialogDescription>
              </DialogHeader>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  if (date) {
                    setSelectedDate(date);
                    setIsCalendarOpen(false);
                  }
                }}
                className="rounded-md border"
              />
            </DialogContent>
          </Dialog>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Reservation
          </Button>
        </div>
      </div>

      {/* Reservation Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reservations</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reservationStats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Reservations</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{reservationStats.today}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{reservationStats.pending}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Confirmed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{reservationStats.confirmed}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expected Guests</CardTitle>
            <Users className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{reservationStats.totalGuests}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search reservations..."
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
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
            <SelectItem value="no-show">No Show</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Reservations List */}
      <div className="grid gap-4">
        {filteredReservations.length === 0 ? (
          <Card>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center">
                <CalendarIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No reservations found</h3>
                <p className="text-gray-500">
                  {searchTerm || statusFilter !== 'all' 
                    ? 'Try adjusting your search or filters'
                    : `No reservations for ${selectedDate.toLocaleDateString()}`
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          filteredReservations.map((reservation) => (
            <Card key={reservation.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <CardTitle className="text-lg">{reservation.id}</CardTitle>
                      <CardDescription>
                        {reservation.customerName} • {reservation.customerEmail}
                      </CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      {getStatusBadge(reservation.status)}
                      <Badge variant="outline">
                        <Users className="h-3 w-3 mr-1" />
                        {reservation.partySize} guests
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">{formatTime(reservation.time)}</div>
                    <div className="text-sm text-gray-500">Table {reservation.tableNumber}</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Date:</span> {formatDate(reservation.date)}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Phone:</span> {reservation.customerPhone}
                    </div>
                    {reservation.notes && (
                      <div className="text-sm text-gray-500 italic">
                        Note: {reservation.notes}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {reservation.status === 'pending' && (
                      <>
                        <Button
                          size="sm"
                          onClick={() => updateReservationStatus(reservation.id, 'confirmed')}
                        >
                          Confirm
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateReservationStatus(reservation.id, 'cancelled')}
                        >
                          Cancel
                        </Button>
                      </>
                    )}
                    {reservation.status === 'confirmed' && (
                      <>
                        <Button
                          size="sm"
                          onClick={() => updateReservationStatus(reservation.id, 'completed')}
                        >
                          Complete
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateReservationStatus(reservation.id, 'no-show')}
                        >
                          No Show
                        </Button>
                      </>
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
                      onClick={() => deleteReservation(reservation.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Table Status Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Table Status Overview</CardTitle>
          <CardDescription>Current status of all tables</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {tables.map((table) => (
              <div
                key={table.id}
                className={`p-4 rounded-lg border-2 text-center ${
                  table.status === 'available'
                    ? 'border-green-200 bg-green-50'
                    : table.status === 'occupied'
                    ? 'border-red-200 bg-red-50'
                    : 'border-yellow-200 bg-yellow-50'
                }`}
              >
                <div className="font-bold text-lg">{table.number}</div>
                <div className="text-sm text-gray-600">{table.capacity} seats</div>
                <div className={`text-xs font-medium mt-1 ${
                  table.status === 'available'
                    ? 'text-green-600'
                    : table.status === 'occupied'
                    ? 'text-red-600'
                    : 'text-yellow-600'
                }`}>
                  {table.status}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminReservations;
