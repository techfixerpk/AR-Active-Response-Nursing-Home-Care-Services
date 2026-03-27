
import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { CONTACT_NUMBERS } from './constants';

export default function Hero() {
  return (
    <div className='bg-blue-50 py-20 px-4'>
      <div className='max-w-7xl mx-auto text-center'>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
          Professional <br/>
          <span className='text-primary'>
            <Typewriter
              words={['Nursing Care', 'ICU Staffing', 'Doctor Visits', 'Medical Equipment']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <br/> At Your Doorstep
        </motion.h1>
        <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
          Serving Rawalpindi & Islamabad 24/7 with professional healthcare solutions.
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
          <a href={`tel:${CONTACT_NUMBERS[0]}`} className='bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700'>
            Call Now: {CONTACT_NUMBERS[0]}
          </a>
        </div>
      </div>
    </div>
  );
}
