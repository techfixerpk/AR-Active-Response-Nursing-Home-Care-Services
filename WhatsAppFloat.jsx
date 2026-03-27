
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_NUMBERS } from './constants';

export default function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${CONTACT_NUMBERS[0].replace(/-/g, '')}`;
  return (
    <a 
      href={whatsappUrl}
      target='_blank' 
      rel='noopener noreferrer'
      className='fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center'>
      <MessageCircle size={32} />
    </a>
  );
}
