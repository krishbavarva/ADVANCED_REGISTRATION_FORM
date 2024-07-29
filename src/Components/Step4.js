import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
const Step4 = () => {
  const { register, formState: { errors } } = useFormContext();
 const [selectedFile , setSelectedFile] = useState(null)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  return (
    <>
    <input type="file" {...register('photo')} onChange={handleFileChange} />
        {errors.photo && <p>{errors.photo.message}</p>}
        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </>
  );
};

export default Step4;
