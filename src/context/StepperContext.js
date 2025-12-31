'use client';

import { createContext, useContext, useState, useCallback } from 'react';

/**
 * StepperContext - Manages stepper state without prop drilling
 * Provides:
 * - Current active step
 * - Navigation functions (next, previous, goTo)
 * - Step validation state
 * - Total step count
 */
const StepperContext = createContext(undefined);

export function useStepperContext() {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error('Stepper components must be used within a Stepper provider');
  }
  return context;
}

export function StepperProvider({ children, initialStep = 0, onStepChange, onComplete }) {
  const [activeStep, setActiveStep] = useState(initialStep);
  const [stepStates, setStepStates] = useState({});
  const [stepValidations, setStepValidations] = useState({});
  const [totalSteps, setTotalSteps] = useState(0);

  // Register a step and return its index
  const registerStep = useCallback((stepId) => {
    setTotalSteps((prev) => {
      const newTotal = Math.max(prev, stepId + 1);
      return newTotal;
    });
  }, []);

  // Update step state
  const updateStepState = useCallback((stepId, state) => {
    setStepStates((prev) => ({
      ...prev,
      [stepId]: { ...prev[stepId], ...state },
    }));
  }, []);

  // Update step validation
  const setStepValid = useCallback((stepId, isValid) => {
    setStepValidations((prev) => ({
      ...prev,
      [stepId]: isValid,
    }));
  }, []);

  // Navigate to next step
  const nextStep = useCallback(() => {
    setActiveStep((prev) => {
      const next = prev + 1;
      if (onStepChange) {
        onStepChange(next, prev);
      }
      return next;
    });
  }, [onStepChange]);

  // Navigate to previous step
  const previousStep = useCallback(() => {
    setActiveStep((prev) => {
      if (prev > 0) {
        const next = prev - 1;
        if (onStepChange) {
          onStepChange(next, prev);
        }
        return next;
      }
      return prev;
    });
  }, [onStepChange]);

  // Navigate to specific step
  const goToStep = useCallback((stepIndex) => {
    setActiveStep((prev) => {
      if (stepIndex >= 0 && stepIndex < totalSteps) {
        if (onStepChange) {
          onStepChange(stepIndex, prev);
        }
        return stepIndex;
      }
      return prev;
    });
  }, [totalSteps, onStepChange]);

  // Check if can proceed to next step
  const canGoNext = useCallback(() => {
    return activeStep < totalSteps - 1;
  }, [activeStep, totalSteps]);

  // Check if can go to previous step
  const canGoPrevious = useCallback(() => {
    return activeStep > 0;
  }, [activeStep]);

  // Check if current step is valid
  const isCurrentStepValid = useCallback(() => {
    return stepValidations[activeStep] !== false;
  }, [activeStep, stepValidations]);

  // Complete the stepper
  const complete = useCallback(() => {
    if (onComplete) {
      onComplete(stepStates);
    }
  }, [onComplete, stepStates]);

  const value = {
    activeStep,
    totalSteps,
    stepStates,
    stepValidations,
    registerStep,
    updateStepState,
    setStepValid,
    nextStep,
    previousStep,
    goToStep,
    canGoNext,
    canGoPrevious,
    isCurrentStepValid,
    complete,
  };

  return <StepperContext.Provider value={value}>{children}</StepperContext.Provider>;
}
