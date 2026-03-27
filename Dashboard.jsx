
import React from 'react';
import { services } from './services';
import { equipments } from './equipments';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Services', count: services.length, color: 'bg-blue-500' },
    { label: 'Total Equipments', count: equipments.length, color: 'bg-green-500' },
    { label: 'New Inquiries', count: 12, color: 'bg-amber-500' }
  ];

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-8'>Dashboard Summary</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {stats.map((stat, i) => (
          <div key={i} className={`${stat.color} text-white p-6 rounded-xl shadow-lg`}>
            <p className='text-lg opacity-80'>{stat.label}</p>
            <h2 className='text-4xl font-bold mt-2'>{stat.count}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
