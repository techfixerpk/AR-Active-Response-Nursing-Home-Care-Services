
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

// Public Pages
import Login from './Login';
import Register from './Register';

// Placeholder Components (to be fully detailed in Phase 3)
const Home = () => <div className='p-10'><h1>Welcome to AR Home</h1><a href='/login' className='text-primary'>Login</a></div>;

// Admin Pages
import AdminSidebar from './AdminSidebar';
import AdminDashboard from './Dashboard';

function AdminLayout({ children }) {
  return (
    <div className='flex'>
      <AdminSidebar />
      <div className='flex-1 bg-slate-50 min-h-screen'>
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          {/* Protected Admin Routes */}
          <Route path='/admin' element={
            <ProtectedRoute adminOnly={true}>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
