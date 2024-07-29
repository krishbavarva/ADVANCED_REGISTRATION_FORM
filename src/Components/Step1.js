import React from 'react';
import { useFormContext } from 'react-hook-form';

const Step1 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <input {...register('firstName', { required: 'First name is required' })} placeholder="First Name" />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <input {...register('lastName', { required: 'Last name is required' })} placeholder="Last Name" />
      {errors.lastName && <p>{errors.lastName.message}</p>}
    </div>
  );
};

export default Step1;
