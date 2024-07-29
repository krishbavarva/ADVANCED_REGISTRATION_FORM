import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import StarRating from './Components/StarRating';

import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
import Stepp4 from './Components/Stepp4';
import Step4 from './Components/Step4';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  zip: yup.string().required('ZIP Code is required'),
  photo: yup.mixed(), 
  rating: yup.number().min(1).max(5).required('Rating is required'),
});

const StarRatingForm = ({ control }) => (
  <div>
    <Controller
      name="rating"
      control={control}
      render={({ field }) => <StarRating {...field} />}
    />
  </div>
);

const MultiStepForm = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleNext = () => {
    setStep((prev) => prev + 1);
    navigate(`/step${step + 1}`);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
    navigate(`/step${step - 1}`);
  };

  const handleLast = () => {
    setStep(5);
    navigate('/stepp4');
  };

  const onSubmit = (data) => {
    setFormData(data);
    console.log(data);
    alert('Form submitted!');
    handleLast();
  };

  const handleRating = () => {
    setStep(6);
    navigate('/rating');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Routes>
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4 />} />
          <Route path="/stepp4" element={<Stepp4 data={formData} />} />
          <Route path="/rating" element={<StarRatingForm control={methods.control} />} />
        </Routes>

        <div>
          {step > 1 && step < 4 && <button type="button" onClick={handlePrev}>Previous</button>}
          {step < 4 && <button type="button" onClick={handleNext}>Next</button>}
          {step === 4 && <button type="button" onClick={handleRating}>Rate Us</button>}
          {step === 5 && <button type="submit">Final Submit</button>}
        </div>
      </form>
    </FormProvider>
  );
};

const App = () => (
  <Router>
    <MultiStepForm />
  </Router>
);

export default App;
