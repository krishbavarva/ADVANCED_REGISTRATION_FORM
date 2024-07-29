import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step2 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2>Step 2: Account Information</h2>
      <input {...register('email', {
        required: 'Email is required',
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
          message: "Invalid email address"
        }
      })} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="password" {...register('password', {
        required: 'Password is required',
        minLength: {
          value: 8,
          message: 'Password must be at least 8 characters'
        }
      })} placeholder="Password" />
      {errors.password && <p>{errors.password.message}</p>}
    </div>
  );
};

export default Step2;
