
import React from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { APP_NAME } from './constants';

export default function Navbar() {
  return (
    <nav className='bg-white shadow-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex-shrink-0 flex items-center'>
            <span className='text-primary font-bold text-xl'>{APP_NAME.split(' ')[0]} (Active Response)</span>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <a href='#' className='text-gray-700 hover:text-primary px-3 py-2 font-medium'>Home</a>
              <a href='#' className='text-gray-700 hover:text-primary px-3 py-2 font-medium'>Services</a>
              <a href='#' className='text-gray-700 hover:text-primary px-3 py-2 font-medium'>Equipments</a>
              <button className='bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2'>
                <Phone size={18} /> Emergency
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
