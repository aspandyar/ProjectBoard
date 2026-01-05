'use client';

import React, { useRef, useEffect, useId } from 'react';
import { StepperProvider, useStepperContext } from '../../context/StepperContext';


function StepperKeyboardHandler({ children, orientation = 'horizontal', className = '' }) {
  const { activeStep, nextStep, previousStep, goToStep, totalSteps } = useStepperContext();
  const stepperRef = useRef(null);

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Only handle keyboard events when stepper is focused
      if (!stepperRef.current?.contains(document.activeElement)) {
        return;
      }

      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          event.preventDefault();
          if (activeStep < totalSteps - 1) {
            nextStep();
          }
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          event.preventDefault();
          if (activeStep > 0) {
            previousStep();
          }
          break;
        case 'Home':
          event.preventDefault();
          goToStep(0);
          break;
        case 'End':
          event.preventDefault();
          goToStep(totalSteps - 1);
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeStep, totalSteps, nextStep, previousStep, goToStep]);

  return (
    <div
      ref={stepperRef}
      role="group"
      aria-label="Stepper"
      className={`stepper stepper-${orientation} ${className}`}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

function StepperComponent({ 
  children, 
  initialStep = 0, 
  onStepChange, 
  onComplete,
  className = '',
  orientation = 'horizontal' // 'horizontal' | 'vertical'
}) {
  return (
    <StepperProvider 
      initialStep={initialStep} 
      onStepChange={onStepChange}
      onComplete={onComplete}
    >
      <StepperKeyboardHandler orientation={orientation} className={className}>
        {children}
      </StepperKeyboardHandler>
    </StepperProvider>
  );
}

// Internal component that uses context (must be inside StepperProvider)
function StepperSteps({ children, className = '' }) {
  const { activeStep, totalSteps, registerStep } = useStepperContext();
  const stepperId = useId();

  // Register all steps
  useEffect(() => {
    React.Children.forEach(children, (child, index) => {
      if (child && child.props.stepId !== undefined) {
        registerStep(child.props.stepId);
      }
    });
  }, [children, registerStep]);

  return (
    <ol
      role="list"
      aria-label="Steps"
      className={`stepper-steps ${className}`}
    >
      {children}
    </ol>
  );
}

function StepperStep({ 
  stepId, 
  children, 
  label,
  description,
  className = '',
  renderLabel,
  renderDescription
}) {
  const { activeStep, goToStep, stepValidations, registerStep } = useStepperContext();
  const stepRef = useRef(null);
  const isActive = activeStep === stepId;
  const isCompleted = activeStep > stepId;
  const isValid = stepValidations[stepId] !== false;
  const stepIndex = stepId;

  useEffect(() => {
    registerStep(stepId);
  }, [stepId, registerStep]);

  const handleClick = () => {
    goToStep(stepId);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      goToStep(stepId);
    }
  };

  // Render props support
  const stepLabel = renderLabel 
    ? renderLabel({ isActive, isCompleted, isValid, stepIndex })
    : label || children;

  const stepDescription = renderDescription
    ? renderDescription({ isActive, isCompleted, isValid, stepIndex })
    : description;

  return (
    <li
      ref={stepRef}
      role="listitem"
      className={`stepper-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${!isValid ? 'invalid' : ''} ${className}`}
    >
      <button
        type="button"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-current={isActive ? 'step' : undefined}
        aria-label={`Step ${stepIndex + 1}: ${stepLabel}`}
        aria-disabled={false}
        tabIndex={isActive || isCompleted ? 0 : -1}
        className="stepper-step-button"
      >
        <span className="stepper-step-indicator" aria-hidden="true">
          {isCompleted ? (
            <svg className="stepper-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <span className="stepper-step-number">{stepIndex + 1}</span>
          )}
        </span>
        <span className="stepper-step-label">{stepLabel}</span>
        {stepDescription && (
          <span className="stepper-step-description">{stepDescription}</span>
        )}
      </button>
    </li>
  );
}

function StepperContent({ children, className = '' }) {
  return (
    <div 
      role="region"
      aria-live="polite"
      aria-atomic="true"
      className={`stepper-content ${className}`}
    >
      {children}
    </div>
  );
}

function StepperStepContent({ 
  stepId, 
  children, 
  className = '',
  render
}) {
  const { activeStep, stepStates, updateStepState, setStepValid } = useStepperContext();
  const isActive = activeStep === stepId;

  if (!isActive) {
    return null;
  }

  // Render prop support for custom content
  if (render) {
    return (
      <div
        role="tabpanel"
        id={`step-content-${stepId}`}
        aria-labelledby={`step-${stepId}`}
        className={`stepper-step-content ${className}`}
      >
        {render({
          stepId,
          stepState: stepStates[stepId] || {},
          updateStepState: (state) => updateStepState(stepId, state),
          setStepValid: (isValid) => setStepValid(stepId, isValid),
        })}
      </div>
    );
  }

  // Default children rendering
  if (typeof children === 'function') {
    return (
      <div
        role="tabpanel"
        id={`step-content-${stepId}`}
        aria-labelledby={`step-${stepId}`}
        className={`stepper-step-content ${className}`}
      >
        {children({
          stepId,
          stepState: stepStates[stepId] || {},
          updateStepState: (state) => updateStepState(stepId, state),
          setStepValid: (isValid) => setStepValid(stepId, isValid),
        })}
      </div>
    );
  }

  return (
    <div
      role="tabpanel"
      id={`step-content-${stepId}`}
      aria-labelledby={`step-${stepId}`}
      className={`stepper-step-content ${className}`}
    >
      {children}
    </div>
  );
}

function StepperNavigation({ 
  className = '',
  renderPrevious,
  renderNext,
  renderComplete,
  showPrevious = true,
  showNext = true,
  previousLabel = 'Previous',
  nextLabel = 'Next',
  completeLabel = 'Complete'
}) {
  const {
    activeStep,
    totalSteps,
    nextStep,
    previousStep,
    canGoNext,
    canGoPrevious,
    isCurrentStepValid,
    complete,
  } = useStepperContext();

  const isLastStep = activeStep === totalSteps - 1;
  const isFirstStep = activeStep === 0;

  const handlePrevious = () => {
    previousStep();
  };

  const handleNext = () => {
    if (canGoNext()) {
      nextStep();
    }
  };

  const handleComplete = () => {
    if (isCurrentStepValid()) {
      complete();
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="Stepper navigation"
      className={`stepper-navigation ${className}`}
    >
      {showPrevious && !isFirstStep && (
        <div className="stepper-nav-button-wrapper">
          {renderPrevious ? (
            renderPrevious({
              onClick: handlePrevious,
              disabled: !canGoPrevious(),
              isFirstStep,
            })
          ) : (
            <button
              type="button"
              onClick={handlePrevious}
              disabled={!canGoPrevious()}
              aria-label="Go to previous step"
              className="stepper-nav-button stepper-nav-button-previous"
            >
              {previousLabel}
            </button>
          )}
        </div>
      )}

      {showNext && !isLastStep && (
        <div className="stepper-nav-button-wrapper">
          {renderNext ? (
            renderNext({
              onClick: handleNext,
              disabled: !canGoNext() || !isCurrentStepValid(),
              isLastStep,
            })
          ) : (
            <button
              type="button"
              onClick={handleNext}
              disabled={!canGoNext() || !isCurrentStepValid()}
              aria-label="Go to next step"
              className="stepper-nav-button stepper-nav-button-next"
            >
              {nextLabel}
            </button>
          )}
        </div>
      )}

      {isLastStep && (
        <div className="stepper-nav-button-wrapper">
          {renderComplete ? (
            renderComplete({
              onClick: handleComplete,
              disabled: !isCurrentStepValid(),
            })
          ) : (
            <button
              type="button"
              onClick={handleComplete}
              disabled={!isCurrentStepValid()}
              aria-label="Complete stepper"
              className="stepper-nav-button stepper-nav-button-complete"
            >
              {completeLabel}
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

// Compound component pattern - attach sub-components
StepperComponent.Steps = StepperSteps;
StepperComponent.Step = StepperStep;
StepperComponent.Content = StepperContent;
StepperComponent.StepContent = StepperStepContent;
StepperComponent.Navigation = StepperNavigation;

export default StepperComponent;
