
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, HeartPulse, Stethoscope, Settings, LogOut } from 'lucide-react';
import { useAuth } from './AuthContext';

export default function AdminSidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className='w-64 bg-slate-900 text-white min-h-screen p-4 flex flex-col'>
      <div className='text-2xl font-bold text-primary mb-8 px-2'>Admin Panel</div>
      <nav className='flex-grow space-y-2'>
        <Link to='/admin' className='flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg transition'><LayoutDashboard size={20}/> Dashboard</Link>
        <Link to='/admin/services' className='flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg transition'><HeartPulse size={20}/> Services</Link>
        <Link to='/admin/equipments' className='flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg transition'><Stethoscope size={20}/> Equipments</Link>
      </nav>
      <button onClick={() => { logout(); navigate('/login'); }} className='flex items-center gap-3 p-3 text-red-400 hover:bg-red-900/20 rounded-lg transition mt-auto'>
        <LogOut size={20}/> Logout
      </button>
    </div>
  );
}
