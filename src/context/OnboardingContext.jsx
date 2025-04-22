import React, { createContext, useContext, useState } from 'react';

const OnboardingContext = createContext();

export const OnboardingProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    role: '',
    work: [],
    workOther: '',
    country: '',
    selectedTools: [],
    goals: []
  });
  const [errors, setErrors] = useState({});

  const validateStep = (step) => {
    const newErrors = {};
    
    switch(step) {
      case 1:
        if (!formData.role) {
          newErrors.role = 'Please select a role';
        }
        if (formData.work.length === 0) {
          newErrors.work = 'Please select at least one option';
        }
        break;
      case 2:
        if (!formData.country) {
          newErrors.country = 'Please select your country';
        }
        break;
      case 4:
        if (formData.goals.length === 0) {
          newErrors.goals = 'Please select at least one goal';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  return (
    <OnboardingContext.Provider 
      value={{
        currentStep,
        formData,
        errors,
        setFormData,
        nextStep,
        prevStep,
        validateStep
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => useContext(OnboardingContext);