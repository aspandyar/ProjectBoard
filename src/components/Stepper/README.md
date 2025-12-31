# Stepper Component Library

A flexible, accessible multi-step form component built with React using **Compound Components** and **Render Props** patterns.

## Features

✅ **Compound Components Pattern** - Flexible API with composable sub-components  
✅ **Render Props** - Customize step content with function children  
✅ **Context-based State** - No prop drilling, state managed via Context API  
✅ **Full Accessibility (A11y)** - ARIA attributes, keyboard navigation, screen reader support  
✅ **Step Validation** - Control navigation based on step validity  
✅ **Keyboard Navigation** - Arrow keys, Home, End, Enter, Space, Tab support  

## Installation

The component is already included in the project. Import it like this:

```javascript
import Stepper from '@/components/Stepper';
// or
import Stepper from '../components/Stepper/Stepper';
```

## Basic Usage

```jsx
import Stepper from '@/components/Stepper';
import '@/components/Stepper/Stepper.css';

function MyForm() {
  const handleComplete = (allStepStates) => {
    console.log('Form completed!', allStepStates);
  };

  return (
    <Stepper onComplete={handleComplete}>
      <Stepper.Steps>
        <Stepper.Step stepId={0} label="Step 1" />
        <Stepper.Step stepId={1} label="Step 2" />
        <Stepper.Step stepId={2} label="Step 3" />
      </Stepper.Steps>

      <Stepper.Content>
        <Stepper.StepContent stepId={0}>
          <div>Step 1 Content</div>
        </Stepper.StepContent>
        <Stepper.StepContent stepId={1}>
          <div>Step 2 Content</div>
        </Stepper.StepContent>
        <Stepper.StepContent stepId={2}>
          <div>Step 3 Content</div>
        </Stepper.StepContent>
      </Stepper.Content>

      <Stepper.Navigation />
    </Stepper>
  );
}
```

## Render Props Pattern

Use function children to access step state and control functions:

```jsx
<Stepper.StepContent stepId={0}>
  {({ stepId, stepState, updateStepState, setStepValid }) => {
    return (
      <div>
        <input
          value={stepState.name || ''}
          onChange={(e) => {
            updateStepState({ name: e.target.value });
            setStepValid(!!e.target.value);
          }}
        />
      </div>
    );
  }}
</Stepper.StepContent>
```

## API Reference

### `<Stepper>`

Main container component.

**Props:**
- `initialStep` (number, default: 0) - Starting step index
- `onStepChange` (function) - Callback when step changes: `(newStep, oldStep) => void`
- `onComplete` (function) - Callback when stepper completes: `(allStepStates) => void`
- `className` (string) - Additional CSS classes
- `orientation` ('horizontal' | 'vertical', default: 'horizontal') - Layout direction

### `<Stepper.Steps>`

Container for step indicators.

**Props:**
- `className` (string) - Additional CSS classes

### `<Stepper.Step>`

Individual step indicator.

**Props:**
- `stepId` (number, required) - Unique step identifier
- `label` (string) - Step label text
- `description` (string) - Optional step description
- `renderLabel` (function) - Render prop for custom label: `({ isActive, isCompleted, isValid, stepIndex }) => ReactNode`
- `renderDescription` (function) - Render prop for custom description
- `className` (string) - Additional CSS classes

### `<Stepper.Content>`

Container for step content panels.

**Props:**
- `className` (string) - Additional CSS classes

### `<Stepper.StepContent>`

Individual step content panel (only renders when step is active).

**Props:**
- `stepId` (number, required) - Step identifier
- `render` (function) - Render prop: `({ stepId, stepState, updateStepState, setStepValid }) => ReactNode`
- `children` (ReactNode | function) - Content or render prop function
- `className` (string) - Additional CSS classes

**Render Prop Parameters:**
- `stepId` (number) - Current step ID
- `stepState` (object) - Step-specific state object
- `updateStepState` (function) - Update step state: `(state) => void`
- `setStepValid` (function) - Set step validation: `(isValid) => void`

### `<Stepper.Navigation>`

Navigation buttons (Previous/Next/Complete).

**Props:**
- `showPrevious` (boolean, default: true) - Show previous button
- `showNext` (boolean, default: true) - Show next button
- `previousLabel` (string, default: 'Previous') - Previous button text
- `nextLabel` (string, default: 'Next') - Next button text
- `completeLabel` (string, default: 'Complete') - Complete button text
- `renderPrevious` (function) - Custom previous button render: `({ onClick, disabled, isFirstStep }) => ReactNode`
- `renderNext` (function) - Custom next button render: `({ onClick, disabled, isLastStep }) => ReactNode`
- `renderComplete` (function) - Custom complete button render: `({ onClick, disabled }) => ReactNode`
- `className` (string) - Additional CSS classes

## Keyboard Navigation

The stepper supports full keyboard navigation:

- **Arrow Right/Down** - Navigate to next step
- **Arrow Left/Up** - Navigate to previous step
- **Home** - Jump to first step
- **End** - Jump to last step
- **Enter/Space** - Activate step button (when focused)
- **Tab** - Navigate between interactive elements

## Accessibility Features

- ✅ ARIA labels and roles (`role="group"`, `role="list"`, `aria-current`, etc.)
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Screen reader announcements (`aria-live="polite"`)
- ✅ Semantic HTML structure
- ✅ Proper tab order

## Advanced Example

```jsx
<Stepper
  initialStep={0}
  onStepChange={(newStep, oldStep) => console.log(`Step ${oldStep} → ${newStep}`)}
  onComplete={(allStates) => submitForm(allStates)}
>
  <Stepper.Steps>
    <Stepper.Step 
      stepId={0} 
      label="Personal Info"
      renderLabel={({ isActive, stepIndex }) => (
        <span className={isActive ? 'font-bold' : ''}>
          Step {stepIndex + 1}: Personal Info
        </span>
      )}
    />
    <Stepper.Step stepId={1} label="Address" />
    <Stepper.Step stepId={2} label="Review" />
  </Stepper.Steps>

  <Stepper.Content>
    <Stepper.StepContent stepId={0}>
      {({ updateStepState, setStepValid }) => (
        <PersonalInfoForm 
          onUpdate={updateStepState}
          onValidate={setStepValid}
        />
      )}
    </Stepper.StepContent>
    {/* ... more steps */}
  </Stepper.Content>

  <Stepper.Navigation
    renderNext={({ onClick, disabled }) => (
      <button 
        onClick={onClick} 
        disabled={disabled}
        className="custom-next-button"
      >
        Continue →
      </button>
    )}
  />
</Stepper>
```

## Architecture

The component uses:

1. **Compound Components Pattern** - Main component with sub-components attached as properties
2. **Context API** - `StepperContext` manages state without prop drilling
3. **Render Props** - Function children for flexible content customization
4. **Controlled Components** - State managed internally, callbacks for external control

## See Also

- Demo page: `/stepper-demo`
- Context implementation: `src/context/StepperContext.js`
- Component implementation: `src/components/Stepper/Stepper.js`
