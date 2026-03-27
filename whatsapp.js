
import { CONTACT_NUMBERS } from './constants';
import { toast } from 'react-toastify';

export const sendWhatsAppMessage = (message) => {
  toast.info('Redirecting to WhatsApp...', { position: 'bottom-center', autoClose: 2000 });
  const phoneNumber = CONTACT_NUMBERS[0].replace(/-/g, '');
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  setTimeout(() => {
    window.open(url, '_blank');
  }, 1000);
};
