
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { sendWhatsAppMessage } from './whatsapp';

export default function EquipmentCard({ item }) {
  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform'>
      <div className='h-40 bg-gray-200 flex items-center justify-center'>
        <span className='text-gray-400'>Image Placeholder</span>
      </div>
      <div className='p-4'>
        <div className='flex justify-between items-start mb-2'>
          <h3 className='font-bold text-lg'>{item.name}</h3>
          <span className='text-xs bg-blue-100 text-primary px-2 py-1 rounded-full'>{item.type}</span>
        </div>
        <p className='text-primary font-semibold mb-4'>{item.price}</p>
        <button 
          onClick={() => sendWhatsAppMessage(`Inquiry for: ${item.name} (${item.type})`)}
          className='w-full flex items-center justify-center gap-2 bg-secondary text-white py-2 rounded-lg hover:bg-green-600 transition'>
          <ShoppingCart size={18} /> Check Availability
        </button>
      </div>
    </div>
  );
}
