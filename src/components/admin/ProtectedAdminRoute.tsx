import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

/**
 * Protected Admin Route Component
 * Checks for admin authentication before allowing access to admin pages
 * Redirects to login if not authenticated
 */
interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

const ProtectedAdminRoute: React.FC<ProtectedAdminRouteProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    /**
     * Check admin authentication status
     * In a real app, this would validate the token with the backend
     */
    const checkAuthentication = () => {
      try {
        const adminSession = localStorage.getItem('adminSession');
        
        if (adminSession) {
          const session = JSON.parse(adminSession);
          
          // Check if session exists and has required properties
          if (session.isAuthenticated && session.user) {
            // Optional: Check if session is not expired
            const loginTime = new Date(session.loginTime);
            const currentTime = new Date();
            const sessionDuration = currentTime.getTime() - loginTime.getTime();
            const maxSessionDuration = 24 * 60 * 60 * 1000; // 24 hours
            
            if (sessionDuration < maxSessionDuration) {
              setIsAuthenticated(true);
            } else {
              // Session expired, remove it
              localStorage.removeItem('adminSession');
              setIsAuthenticated(false);
            }
          } else {
            setIsAuthenticated(false);
          }
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking admin authentication:', error);
        // If there's an error parsing the session, remove it
        localStorage.removeItem('adminSession');
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    // Small delay to prevent flash of loading screen
    const timer = setTimeout(checkAuthentication, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-amber-600 mx-auto mb-4" />
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return (
      <Navigate 
        to="/admin/login" 
        state={{ from: location }} 
        replace 
      />
    );
  }

  // Render protected content if authenticated
  return <>{children}</>;
};

export default ProtectedAdminRoute;
