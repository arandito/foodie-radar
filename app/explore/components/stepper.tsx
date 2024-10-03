import React from 'react';
import { Check } from 'lucide-react';

interface StepperProps {
  currentStep: number;
  totalSteps: number;
}

export default function Stepper({ currentStep, totalSteps }: StepperProps) {
  return (
    <div className="relative w-full px-4 md:w-2/3 md:px-12">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step, index) => (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center relative">
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center
                  ${currentStep >= step ? 'bg-gradient-to-br from-pink-600 to-amber-400 text-white' : 'text-white bg-black/15 dark:bg-white/20'}`}
              >
                {currentStep > step ? <Check className="text-white" /> : step}
              </div>
              <span className={`absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-base ${currentStep < step ? " text-black/40 dark:text-white/50 ": "text-foreground"}`}>
                {step === 1 ? "Cravings" : step === 2 ? "Location" : "Restaurants"}
              </span>
            </div>
            {index < totalSteps - 1 && (
              <div 
                className={`h-1 flex-grow mx-2
                  ${currentStep > step ? 'bg-gradient-to-r from-pink-600 to-amber-400' : 'bg-black/15 dark:bg-white/20'}`} 
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}