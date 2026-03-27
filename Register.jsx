
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    Swal.fire('Account Created', 'Please login now', 'success');
    navigate('/login');
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-blue-50 px-4'>
      <div className='max-w-md w-full bg-white rounded-xl shadow-lg p-8'>
        <h2 className='text-2xl font-bold text-center mb-6'>Join AR Services</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium'>Full Name</label>
            <input {...register('name', { required: true })} className='mt-1 block w-full border rounded-md p-2' />
          </div>
          <div>
            <label className='block text-sm font-medium'>Phone Number</label>
            <input {...register('phone', { 
              required: true, 
              pattern: { value: /^[0-9]{11}$/, message: 'Phone must be 11 digits' }
            })} className='mt-1 block w-full border rounded-md p-2' />
            {errors.phone && <span className='text-red-500 text-xs'>{errors.phone.message}</span>}
          </div>
          <div>
            <label className='block text-sm font-medium'>Email</label>
            <input {...register('email', { required: true })} type='email' className='mt-1 block w-full border rounded-md p-2' />
          </div>
          <div>
            <label className='block text-sm font-medium'>Password</label>
            <input {...register('password', { required: true })} type='password' className='mt-1 block w-full border rounded-md p-2' />
          </div>
          <button type='submit' className='w-full bg-secondary text-white py-2 rounded-md'>Create Account</button>
        </form>
      </div>
    </div>
  );
}
