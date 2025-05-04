
import React from 'react';

interface FormHeaderProps {
  currentStep: number;
  totalSteps: number;
}

const FormHeader: React.FC<FormHeaderProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-3xl md:text-4xl text-furia-white">
          <span className="text-furia-orange">#</span>KNOW YOUR FAN
        </h2>
        <span className="text-furia-orange font-bebas text-lg">
          {currentStep}/{totalSteps}
        </span>
      </div>
      
      <div className="w-full bg-furia-gray/20 h-2 rounded-full overflow-hidden">
        <div 
          className="bg-furia-orange h-full transition-all duration-500 ease-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default FormHeader;
