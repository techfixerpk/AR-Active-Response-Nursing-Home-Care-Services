
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Swal from 'sweetalert2';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Mock login logic
    const userData = { ...data, isAdmin: data.email === 'malikawaisbabar143@gmail.com' };
    login(userData);
    
    Swal.fire({
      title: 'Success!',
      text: userData.isAdmin ? 'Welcome Admin Awais Babar' : 'Login Successful',
      icon: 'success',
      timer: 1500
    });

    if (userData.isAdmin) navigate('/admin');
    else navigate('/');
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-blue-50 px-4'>
      <div className='max-w-md w-full bg-white rounded-xl shadow-lg p-8'>
        <h2 className='text-3xl font-bold text-center text-primary mb-2'>AR (Active Response)</h2>
        <p className='text-center text-gray-500 mb-8'>Nursing Home Care Services</p>
        
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Email Address</label>
            <input {...register('email')} type='email' required className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2' />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Password</label>
            <input {...register('password')} type='password' required className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2' />
          </div>
          <button type='submit' className='w-full bg-primary text-white py-2 rounded-md hover:bg-blue-700 transition'>Login</button>
        </form>
        
        <p className='mt-4 text-center text-sm'>
          Don't have an account? <Link to='/register' className='text-primary'>Register</Link>
        </p>
        <div className='mt-8 pt-6 border-t border-gray-100 text-center'>
           <p className='text-xs text-gray-400 font-semibold'>Founder: Awais Babar</p>
        </div>
      </div>
    </div>
  );
}
