
import React, { useState } from 'react';
import FormHeader from './FormHeader';
import PersonalDataForm from './PersonalDataForm';
import FanProfileForm from './FanProfileForm';
import ConnectionsForm from './ConnectionsForm';
import SuccessForm from './SuccessForm';

const FanForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Complete the form
      setCurrentStep(totalSteps + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="furia-card p-6 md:p-8 max-w-3xl mx-auto">
      {currentStep <= totalSteps && (
        <FormHeader currentStep={currentStep} totalSteps={totalSteps} />
      )}
      
      {currentStep === 1 && (
        <PersonalDataForm onNext={handleNext} />
      )}
      
      {currentStep === 2 && (
        <FanProfileForm onNext={handleNext} onPrev={handlePrev} />
      )}
      
      {currentStep === 3 && (
        <ConnectionsForm onNext={handleNext} onPrev={handlePrev} />
      )}
      
      {currentStep > totalSteps && (
        <SuccessForm onReset={handleReset} />
      )}
    </div>
  );
};

export default FanForm;
