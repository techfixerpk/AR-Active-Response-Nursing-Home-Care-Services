
import React, { useState } from 'react';
import { equipments } from './equipments';
import EquipmentCard from './EquipmentCard';

export default function Equipments() {
  const [filter, setFilter] = useState('All');
  
  const filteredItems = filter === 'All' 
    ? equipments 
    : equipments.filter(item => item.type.includes(filter));

  return (
    <div className='bg-gray-50 min-h-screen py-12 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center mb-10 gap-4'>
          <h1 className='text-3xl font-bold'>Medical Equipment Inventory</h1>
          <div className='flex bg-white rounded-lg shadow p-1 border'>
            {['All', 'Rent', 'Sale'].map(tab => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-2 rounded-md transition ${filter === tab ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {filteredItems.map(item => (
            <EquipmentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
