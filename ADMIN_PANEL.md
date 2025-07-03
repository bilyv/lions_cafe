# Lions Cafe Admin Panel

A comprehensive admin panel for managing Lions Cafe Web Oasis restaurant operations. This frontend-only implementation uses mock data and local state management for demonstration purposes.

## 🚀 Features

### 🔐 Authentication & Security
- **Secure Login**: Admin authentication with demo credentials
- **Protected Routes**: Route protection with session management
- **Session Management**: Local storage-based session handling
- **Role-based Access**: Different access levels for admin users

### 📊 Dashboard & Analytics
- **Real-time Metrics**: Revenue, orders, customers, and reservations
- **Interactive Charts**: Sales trends and order status distribution
- **Recent Activity**: Latest orders and top-performing menu items
- **Performance Indicators**: Key business metrics with trend analysis

### 🍽️ Menu Management
- **CRUD Operations**: Create, read, update, delete menu items
- **Category Management**: Organize items by categories (Coffee, Food, Desserts)
- **Availability Control**: Toggle item availability in real-time
- **Featured Items**: Mark items as featured for promotion
- **Rich Details**: Pricing, descriptions, preparation time, allergens

### 📦 Order Management
- **Order Tracking**: Real-time order status updates
- **Status Management**: Pending → Preparing → Ready → Completed
- **Order Details**: Complete customer and item information
- **Filtering & Search**: Find orders by status, type, or customer
- **Order Types**: Dine-in, takeaway, and delivery support

### 📅 Reservation Management
- **Table Bookings**: Manage customer reservations
- **Calendar View**: Date-based reservation viewing
- **Status Updates**: Confirm, complete, or cancel reservations
- **Table Overview**: Visual table status management
- **Guest Management**: Track party sizes and special requests

### 👥 User Management
- **Customer Accounts**: View and manage customer profiles
- **Staff Management**: Handle staff and manager accounts
- **User Analytics**: Order history and spending patterns
- **Account Status**: Activate, suspend, or manage user accounts
- **Role Assignment**: Customer, staff, manager, admin roles

### ⚙️ Settings & Configuration
- **Restaurant Info**: Basic restaurant details and contact information
- **Operating Hours**: Set daily operating schedules
- **Notifications**: Configure alert preferences
- **System Settings**: Security and maintenance options
- **Appearance**: Theme and UI customization

## 🎯 Access Information

### Demo Credentials
- **URL**: `/admin/login`
- **Email**: `admin@lionscafe.com`
- **Password**: `admin123`

### Navigation Structure
```
/admin/
├── dashboard     # Main dashboard with analytics
├── menu         # Menu item and category management
├── orders       # Order tracking and management
├── reservations # Table reservation management
├── users        # Customer and staff management
└── settings     # System configuration
```

## 🛠️ Technical Implementation

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **React Router** for navigation and protected routes
- **Tailwind CSS** for responsive styling
- **Shadcn/ui** components for consistent UI
- **Recharts** for data visualization
- **Lucide React** for icons

### State Management
- **Local State**: React useState for component state
- **Session Storage**: localStorage for authentication
- **Mock Data**: Realistic sample data for demonstration
- **Real-time Updates**: Simulated real-time data changes

### Key Components
- `AdminLayout`: Main layout with sidebar navigation
- `ProtectedAdminRoute`: Authentication guard component
- `AdminLogin`: Secure login interface
- Individual page components for each admin function

## 📱 Responsive Design

The admin panel is fully responsive and works on:
- **Desktop**: Full-featured interface with sidebar navigation
- **Tablet**: Collapsible sidebar with touch-friendly controls
- **Mobile**: Mobile-optimized layout with drawer navigation

## 🔧 Features in Detail

### Dashboard Analytics
- Revenue tracking with percentage changes
- Order volume and status distribution
- Customer growth metrics
- Interactive charts for sales trends
- Recent order activity feed
- Top-performing menu items

### Menu Management
- Visual menu item cards with images
- Category-based organization
- Bulk operations (availability, featured status)
- Advanced filtering and search
- Nutritional information support
- Allergen management

### Order Processing
- Real-time order status updates
- Customer communication details
- Order timeline tracking
- Payment status monitoring
- Special instructions handling
- Table assignment for dine-in orders

### Reservation System
- Calendar-based date selection
- Table capacity management
- Guest information tracking
- Special request handling
- No-show and cancellation management
- Visual table status overview

### User Administration
- Comprehensive user profiles
- Order history and analytics
- Account status management
- Role-based permissions
- Customer lifetime value tracking
- Staff performance metrics

### System Configuration
- Restaurant branding and information
- Operating hours management
- Notification preferences
- Security settings
- Backup and maintenance options
- Theme customization

## 🚀 Getting Started

1. **Access the Admin Panel**:
   ```
   Navigate to: http://localhost:5173/admin/login
   ```

2. **Login with Demo Credentials**:
   - Email: `admin@lionscafe.com`
   - Password: `admin123`

3. **Explore Features**:
   - Start with the Dashboard for an overview
   - Navigate through different sections using the sidebar
   - Try creating, editing, and managing different entities

## 🎨 UI/UX Features

- **Clean Design**: Modern, professional interface
- **Intuitive Navigation**: Clear sidebar with descriptive icons
- **Responsive Layout**: Works on all device sizes
- **Interactive Elements**: Hover effects and smooth transitions
- **Data Visualization**: Charts and graphs for analytics
- **Toast Notifications**: User feedback for actions
- **Loading States**: Smooth loading experiences
- **Error Handling**: Graceful error management

## 🔮 Future Enhancements

When integrating with a backend, consider adding:
- Real-time WebSocket connections for live updates
- Advanced reporting and analytics
- Inventory management
- Staff scheduling
- Customer loyalty programs
- Integration with payment processors
- Email notification system
- Advanced user permissions
- Audit logging
- Data export capabilities

## 📝 Notes

- This is a **frontend-only** implementation using mock data
- All data is stored in local state and localStorage
- No actual backend integration is included
- Perfect for demonstrations and prototyping
- Ready for backend integration when needed

## 🤝 Contributing

The admin panel is designed to be easily extensible. To add new features:
1. Create new page components in `src/pages/admin/`
2. Add routes in `App.tsx`
3. Update navigation in `AdminLayout.tsx`
4. Follow existing patterns for consistency

---

**Lions Cafe Admin Panel** - Comprehensive restaurant management made simple! 🦁☕
