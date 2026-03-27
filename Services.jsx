
import React from 'react';
import { services } from './services';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <div className='bg-gray-50 min-h-screen py-12 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900'>Medical Solution at Home</h1>
          <p className='mt-4 text-gray-600 text-lg'>Professional nursing care and ICU setups available 24/7 in Rawalpindi & Islamabad.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
