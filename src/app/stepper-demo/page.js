'use client';

import { useState } from 'react';
import Stepper from '../../components/Stepper/Stepper';
import '../../components/Stepper/Stepper.css';

/**
 * Demo page showcasing the Stepper component library
 * Demonstrates:
 * - Compound Components pattern
 * - Render Props for customization
 * - Context-based state management (no prop drilling)
 * - Full keyboard navigation and ARIA attributes
 */
export default function StepperDemo() {
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
    },
    address: {
      street: '',
      city: '',
      zipCode: '',
    },
    preferences: {
      newsletter: false,
      notifications: true,
    },
  });

  const [completedData, setCompletedData] = useState(null);

  const handleStepChange = (newStep, oldStep) => {
    console.log(`Step changed from ${oldStep} to ${newStep}`);
  };

  const handleComplete = (allStepStates) => {
    console.log('Stepper completed!', allStepStates);
    setCompletedData(allStepStates);
    alert('Form submitted successfully! Check console for data.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Stepper Component Library Demo
          </h1>
          <p className="text-gray-600 mb-8">
            A flexible, accessible multi-step form component using Compound Components and Render Props patterns.
          </p>

          {/* Example 1: Basic Stepper */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Example 1: Basic Multi-Step Form
            </h2>
            <Stepper
              initialStep={0}
              onStepChange={handleStepChange}
              onComplete={handleComplete}
              className="mb-8"
            >
              <Stepper.Steps>
                <Stepper.Step stepId={0} label="Personal Info" description="Enter your details" />
                <Stepper.Step stepId={1} label="Address" description="Where do you live?" />
                <Stepper.Step stepId={2} label="Preferences" description="Your preferences" />
                <Stepper.Step stepId={3} label="Review" description="Review and submit" />
              </Stepper.Steps>

              <Stepper.Content>
                <Stepper.StepContent stepId={0}>
                  {({ updateStepState, setStepValid }) => (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.personalInfo.name}
                          onChange={(e) => {
                            const newData = {
                              ...formData,
                              personalInfo: { ...formData.personalInfo, name: e.target.value },
                            };
                            setFormData(newData);
                            updateStepState({ personalInfo: newData.personalInfo });
                            setStepValid(!!e.target.value);
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={formData.personalInfo.email}
                          onChange={(e) => {
                            const newData = {
                              ...formData,
                              personalInfo: { ...formData.personalInfo, email: e.target.value },
                            };
                            setFormData(newData);
                            updateStepState({ personalInfo: newData.personalInfo });
                            const isValid = !!formData.personalInfo.name && !!e.target.value;
                            setStepValid(isValid);
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.personalInfo.phone}
                          onChange={(e) => {
                            const newData = {
                              ...formData,
                              personalInfo: { ...formData.personalInfo, phone: e.target.value },
                            };
                            setFormData(newData);
                            updateStepState({ personalInfo: newData.personalInfo });
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  )}
                </Stepper.StepContent>

                <Stepper.StepContent stepId={1}>
                  {({ updateStepState, setStepValid }) => (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold mb-4">Address Information</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          value={formData.address.street}
                          onChange={(e) => {
                            const newData = {
                              ...formData,
                              address: { ...formData.address, street: e.target.value },
                            };
                            setFormData(newData);
                            updateStepState({ address: newData.address });
                            setStepValid(!!e.target.value);
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="123 Main St"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          value={formData.address.city}
                          onChange={(e) => {
                            const newData = {
                              ...formData,
                              address: { ...formData.address, city: e.target.value },
                            };
                            setFormData(newData);
                            updateStepState({ address: newData.address });
                            const isValid = !!formData.address.street && !!e.target.value;
                            setStepValid(isValid);
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="New York"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          value={formData.address.zipCode}
                          onChange={(e) => {
                            const newData = {
                              ...formData,
                              address: { ...formData.address, zipCode: e.target.value },
                            };
                            setFormData(newData);
                            updateStepState({ address: newData.address });
                            const isValid =
                              !!formData.address.street &&
                              !!formData.address.city &&
                              !!e.target.value;
                            setStepValid(isValid);
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="10001"
                          required
                        />
                      </div>
                    </div>
                  )}
                </Stepper.StepContent>

                <Stepper.StepContent stepId={2}>
                  {({ updateStepState, setStepValid }) => (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold mb-4">Preferences</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.preferences.newsletter}
                            onChange={(e) => {
                              const newData = {
                                ...formData,
                                preferences: {
                                  ...formData.preferences,
                                  newsletter: e.target.checked,
                                },
                              };
                              setFormData(newData);
                              updateStepState({ preferences: newData.preferences });
                            }}
                            className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="text-sm text-gray-700">
                            Subscribe to newsletter
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.preferences.notifications}
                            onChange={(e) => {
                              const newData = {
                                ...formData,
                                preferences: {
                                  ...formData.preferences,
                                  notifications: e.target.checked,
                                },
                              };
                              setFormData(newData);
                              updateStepState({ preferences: newData.preferences });
                            }}
                            className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="text-sm text-gray-700">
                            Enable email notifications
                          </span>
                        </label>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-gray-600">
                          Preferences are optional. You can proceed without selecting any.
                        </p>
                      </div>
                    </div>
                  )}
                </Stepper.StepContent>

                <Stepper.StepContent stepId={3}>
                  {({ stepState }) => (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold mb-4">Review Your Information</h3>
                      <div className="bg-gray-50 p-4 rounded-md space-y-3">
                        <div>
                          <strong className="text-gray-700">Name:</strong>{' '}
                          <span className="text-gray-600">
                            {formData.personalInfo.name || 'Not provided'}
                          </span>
                        </div>
                        <div>
                          <strong className="text-gray-700">Email:</strong>{' '}
                          <span className="text-gray-600">
                            {formData.personalInfo.email || 'Not provided'}
                          </span>
                        </div>
                        <div>
                          <strong className="text-gray-700">Phone:</strong>{' '}
                          <span className="text-gray-600">
                            {formData.personalInfo.phone || 'Not provided'}
                          </span>
                        </div>
                        <div>
                          <strong className="text-gray-700">Address:</strong>{' '}
                          <span className="text-gray-600">
                            {formData.address.street && formData.address.city
                              ? `${formData.address.street}, ${formData.address.city}, ${formData.address.zipCode}`
                              : 'Not provided'}
                          </span>
                        </div>
                        <div>
                          <strong className="text-gray-700">Newsletter:</strong>{' '}
                          <span className="text-gray-600">
                            {formData.preferences.newsletter ? 'Yes' : 'No'}
                          </span>
                        </div>
                        <div>
                          <strong className="text-gray-700">Notifications:</strong>{' '}
                          <span className="text-gray-600">
                            {formData.preferences.notifications ? 'Enabled' : 'Disabled'}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-4">
                        Please review all information before submitting.
                      </p>
                    </div>
                  )}
                </Stepper.StepContent>
              </Stepper.Content>

              <Stepper.Navigation
                previousLabel="← Previous"
                nextLabel="Next →"
                completeLabel="Submit Form"
              />
            </Stepper>
          </div>

          {/* Keyboard Navigation Instructions */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <h3 className="font-semibold text-blue-900 mb-2">Keyboard Navigation</h3>
            <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
              <li>
                <kbd className="px-2 py-1 bg-blue-100 rounded">Arrow Right/Down</kbd> - Next step
              </li>
              <li>
                <kbd className="px-2 py-1 bg-blue-100 rounded">Arrow Left/Up</kbd> - Previous step
              </li>
              <li>
                <kbd className="px-2 py-1 bg-blue-100 rounded">Home</kbd> - Go to first step
              </li>
              <li>
                <kbd className="px-2 py-1 bg-blue-100 rounded">End</kbd> - Go to last step
              </li>
              <li>
                <kbd className="px-2 py-1 bg-blue-100 rounded">Enter/Space</kbd> - Activate step
                button
              </li>
              <li>
                <kbd className="px-2 py-1 bg-blue-100 rounded">Tab</kbd> - Navigate between
                interactive elements
              </li>
            </ul>
          </div>

          {/* Features Showcase */}
          <div className="mt-8 p-4 bg-gray-50 rounded-md">
            <h3 className="font-semibold text-gray-900 mb-2">Component Features</h3>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>
                <strong>Compound Components:</strong> Flexible API with{' '}
                <code className="bg-gray-200 px-1 rounded">&lt;Stepper.Steps&gt;</code>,{' '}
                <code className="bg-gray-200 px-1 rounded">&lt;Stepper.Step&gt;</code>, etc.
              </li>
              <li>
                <strong>Render Props:</strong> Customize step content with function children
              </li>
              <li>
                <strong>No Prop Drilling:</strong> State managed via Context API
              </li>
              <li>
                <strong>Full A11y:</strong> ARIA attributes, keyboard navigation, screen reader
                support
              </li>
              <li>
                <strong>Step Validation:</strong> Control navigation based on step validity
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
