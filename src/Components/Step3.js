import React from 'react';
import { useFormContext } from 'react-hook-form';
const Step3 = () => {
  const { register, formState: { errors } } = useFormContext();
 

  return (
    <>
    <div>
      <h2>Step 3: Address Information</h2>
      <input {...register('address', { required: 'Address is required' })} placeholder="Address" />
      {errors.address && <p>{errors.address.message}</p>}

      <input {...register('city', { required: 'City is required' })} placeholder="City" />
      {errors.city && <p>{errors.city.message}</p>}

      <input {...register('zip', { required: 'ZIP Code is required' })} placeholder="ZIP Code" />
      {errors.zip && <p>{errors.zip.message}</p>}
    </div>
    </>
  );
};

export default Step3;
