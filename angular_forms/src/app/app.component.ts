import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormService, DynamicFormConfig } from './services/dynamic-form.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, StarRatingComponent, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Assignment 3 - CVA & Dynamic Forms';

  // Example form with star rating
  exampleForm: FormGroup;
  exampleFormValue: any = null;

  // Dynamic form configuration
  dynamicFormConfig: DynamicFormConfig;

  constructor(private dynamicFormService: DynamicFormService) {
    // Create example form with star rating
    this.exampleForm = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      rating: new FormControl(null, [Validators.required, Validators.min(1)]),
      review: new FormControl('', [Validators.required, Validators.minLength(10)])
    });

    // Create dynamic form configuration
    this.dynamicFormConfig = this.createDynamicFormConfig();
  }

  onSubmitExampleForm(): void {
    if (this.exampleForm.valid) {
      this.exampleFormValue = this.exampleForm.value;
      console.log('Form submitted:', this.exampleFormValue);
    } else {
      this.exampleForm.markAllAsTouched();
    }
  }

  onDynamicFormSubmit(formValue: any): void {
    console.log('Dynamic form submitted:', formValue);
    alert('Form submitted successfully! Check console for values.');
  }

  private createDynamicFormConfig(): DynamicFormConfig {
    return {
      fields: [
        {
          name: 'firstName',
          type: 'text',
          label: 'First Name',
          placeholder: 'Enter your first name',
          required: true,
          validators: [
            { type: 'required', message: 'First name is required' },
            { type: 'minLength', value: 2, message: 'First name must be at least 2 characters' }
          ]
        },
        {
          name: 'lastName',
          type: 'text',
          label: 'Last Name',
          placeholder: 'Enter your last name',
          required: true,
          validators: [
            { type: 'required', message: 'Last name is required' }
          ]
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email Address',
          placeholder: 'Enter your email',
          required: true,
          validators: [
            { type: 'required', message: 'Email is required' },
            { type: 'email', message: 'Please enter a valid email address' }
          ]
        },
        {
          name: 'age',
          type: 'number',
          label: 'Age',
          placeholder: 'Enter your age',
          min: 18,
          max: 120,
          required: true,
          validators: [
            { type: 'required', message: 'Age is required' },
            { type: 'min', value: 18, message: 'You must be at least 18 years old' },
            { type: 'max', value: 120, message: 'Please enter a valid age' }
          ]
        },
        {
          name: 'country',
          type: 'select',
          label: 'Country',
          placeholder: 'Select your country',
          required: true,
          options: [
            { label: 'United States', value: 'us' },
            { label: 'Canada', value: 'ca' },
            { label: 'United Kingdom', value: 'uk' },
            { label: 'Australia', value: 'au' },
            { label: 'Germany', value: 'de' }
          ],
          validators: [
            { type: 'required', message: 'Please select a country' }
          ]
        },
        {
          name: 'newsletter',
          type: 'checkbox',
          label: 'Subscribe to newsletter',
          value: false
        },
        {
          name: 'interests',
          type: 'checkbox-group',
          label: 'Interests (Select all that apply)',
          required: true,
          options: [
            { label: 'Technology', value: 'technology' },
            { label: 'Sports', value: 'sports' },
            { label: 'Music', value: 'music' },
            { label: 'Travel', value: 'travel' },
            { label: 'Reading', value: 'reading' }
          ],
          validators: [
            { type: 'required', message: 'Please select at least one interest' }
          ]
        },
        {
          name: 'productRating',
          type: 'star-rating',
          label: 'Product Rating',
          max: 5,
          required: true,
          validators: [
            { type: 'required', message: 'Please rate the product' },
            { type: 'min', value: 1, message: 'Please select at least 1 star' }
          ]
        },
        {
          name: 'serviceRating',
          type: 'star-rating',
          label: 'Service Rating',
          max: 5,
          conditional: {
            field: 'newsletter',
            operator: 'equals',
            value: true
          }
        },
        {
          name: 'feedback',
          type: 'textarea',
          label: 'Feedback',
          placeholder: 'Enter your feedback (minimum 20 characters)',
          rows: 5,
          required: true,
          validators: [
            { type: 'required', message: 'Feedback is required' },
            { type: 'minLength', value: 20, message: 'Feedback must be at least 20 characters' }
          ]
        }
      ],
      groups: [
        {
          name: 'address',
          label: 'Shipping Address',
          fields: [
            {
              name: 'street',
              type: 'text',
              label: 'Street Address',
              placeholder: 'Enter street address',
              required: true,
              validators: [
                { type: 'required', message: 'Street address is required' }
              ]
            },
            {
              name: 'city',
              type: 'text',
              label: 'City',
              placeholder: 'Enter city',
              required: true,
              validators: [
                { type: 'required', message: 'City is required' }
              ]
            },
            {
              name: 'zipCode',
              type: 'text',
              label: 'ZIP Code',
              placeholder: 'Enter ZIP code',
              required: true,
              validators: [
                { type: 'required', message: 'ZIP code is required' },
                { type: 'pattern', value: '^[0-9]{5}(-[0-9]{4})?$', message: 'Invalid ZIP code format' }
              ]
            }
          ]
        }
      ],
      arrays: [
        {
          name: 'references',
          label: 'References',
          minItems: 0,
          maxItems: 3,
          groupConfig: {
            name: 'reference',
            fields: [
              {
                name: 'name',
                type: 'text',
                label: 'Reference Name',
                placeholder: 'Enter reference name',
                required: true,
                validators: [
                  { type: 'required', message: 'Reference name is required' }
                ]
              },
              {
                name: 'email',
                type: 'email',
                label: 'Reference Email',
                placeholder: 'Enter reference email',
                required: true,
                validators: [
                  { type: 'required', message: 'Reference email is required' },
                  { type: 'email', message: 'Please enter a valid email address' }
                ]
              },
              {
                name: 'rating',
                type: 'star-rating',
                label: 'Reference Rating',
                max: 5,
                required: false
              }
            ]
          }
        }
      ]
    };
  }
}
