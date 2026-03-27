
import React from 'react';
import * as Icons from 'lucide-react';
import { sendWhatsAppMessage } from './whatsapp';

export default function ServiceCard({ service }) {
  const Icon = Icons[service.icon] || Icons.Activity;
  
  return (
    <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:border-primary border-2 border-transparent transition-all group'>
      <div className='w-12 h-12 bg-blue-100 text-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors'>
        <Icon size={24} />
      </div>
      <h3 className='text-lg font-bold mb-2'>{service.title}</h3>
      <button 
        onClick={() => sendWhatsAppMessage(`I want to book: ${service.title}`)}
        className='mt-4 w-full bg-slate-100 text-primary py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors'>
        Book Now
      </button>
    </div>
  );
}
