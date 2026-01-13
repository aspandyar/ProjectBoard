import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

export interface FormFieldConfig {
  name: string;
  type: 'text' | 'email' | 'number' | 'textarea' | 'select' | 'checkbox' | 'checkbox-group' | 'radio' | 'star-rating' | 'date';
  label: string;
  placeholder?: string;
  value?: any;
  required?: boolean;
  disabled?: boolean;
  validators?: ValidatorConfig[];
  options?: SelectOption[] | RadioOption[];
  rows?: number; // For textarea
  min?: number; // For number, star-rating
  max?: number; // For number, star-rating
  step?: number; // For number
  conditional?: ConditionalConfig; // Show/hide based on other field values
}

export interface ValidatorConfig {
  type: 'required' | 'min' | 'max' | 'minLength' | 'maxLength' | 'pattern' | 'email' | 'custom';
  value?: any;
  message?: string;
  validatorFn?: ValidatorFn; // For custom validators
}

export interface SelectOption {
  label: string;
  value: any;
}

export interface RadioOption {
  label: string;
  value: any;
}

export interface ConditionalConfig {
  field: string; // Field name to watch
  operator: 'equals' | 'notEquals' | 'greaterThan' | 'lessThan' | 'contains';
  value: any;
}

export interface FormGroupConfig {
  name: string;
  label?: string;
  fields: FormFieldConfig[];
  validators?: ValidatorConfig[];
}

export interface FormArrayConfig {
  name: string;
  label?: string;
  groupConfig: FormGroupConfig; // Configuration for each item in the array
  minItems?: number;
  maxItems?: number;
}

export interface DynamicFormConfig {
  groups?: FormGroupConfig[];
  arrays?: FormArrayConfig[];
  fields?: FormFieldConfig[]; // Top-level fields
}

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {
  createFormGroup(config: DynamicFormConfig): FormGroup {
    const formControls: { [key: string]: AbstractControl } = {};

    // Handle top-level fields
    if (config.fields) {
      config.fields.forEach(field => {
        const control = this.createFormControl(field);
        formControls[field.name] = control;
      });
    }

    // Handle nested groups
    if (config.groups) {
      config.groups.forEach(group => {
        const groupControls: { [key: string]: AbstractControl } = {};
        group.fields.forEach(field => {
          const control = this.createFormControl(field);
          groupControls[field.name] = control;
        });
        formControls[group.name] = new FormGroup(groupControls, this.getValidators(group.validators));
      });
    }

    // Handle form arrays
    if (config.arrays) {
      config.arrays.forEach(arrayConfig => {
        formControls[arrayConfig.name] = this.createFormArray(arrayConfig);
      });
    }

    return new FormGroup(formControls);
  }

  /**
   * Creates a FormControl from a field configuration
   */
  private createFormControl(field: FormFieldConfig): FormControl | FormArray {
    // Handle checkbox-group as FormArray
    if (field.type === 'checkbox-group') {
      return this.createCheckboxGroup(field);
    }
    
    const validators = this.getValidators(field.validators);
    const control = new FormControl(
      { value: field.value ?? (field.type === 'checkbox' ? false : null), disabled: field.disabled ?? false },
      validators
    );
    return control;
  }

  /**
   * Creates a FormArray for checkbox-group with FormControls for each option
   */
  private createCheckboxGroup(field: FormFieldConfig): FormArray {
    const options = field.options || [];
    const initialValue = field.value || [];
    
    const formArray = new FormArray(
      options.map(option => {
        const isChecked = Array.isArray(initialValue) && initialValue.includes(option.value);
        return new FormControl(isChecked);
      })
    );

    // Add validators to the FormArray if required
    if (field.required) {
      const validators = this.getValidators(field.validators);
      formArray.setValidators([
        ...validators,
        (control: AbstractControl) => {
          const checkedCount = (control as FormArray).controls.filter(c => c.value === true).length;
          return checkedCount === 0 ? { required: true } : null;
        }
      ]);
    } else {
      const validators = this.getValidators(field.validators);
      if (validators.length > 0) {
        formArray.setValidators(validators);
      }
    }

    return formArray;
  }

  /**
   * Creates a FormArray from an array configuration
   */
  private createFormArray(arrayConfig: FormArrayConfig): FormArray {
    const initialItems = arrayConfig.minItems ?? 0;
    const formArray = new FormArray<FormGroup>([]);

    // Create initial items if minItems is specified
    for (let i = 0; i < initialItems; i++) {
      formArray.push(this.createFormGroupFromConfig(arrayConfig.groupConfig));
    }

    return formArray;
  }

  /**
   * Creates a FormGroup from a FormGroupConfig
   */
  private createFormGroupFromConfig(groupConfig: FormGroupConfig): FormGroup {
    const groupControls: { [key: string]: AbstractControl } = {};
    groupConfig.fields.forEach(field => {
      const control = this.createFormControl(field);
      groupControls[field.name] = control;
    });
    return new FormGroup(groupControls, this.getValidators(groupConfig.validators));
  }

  /**
   * Converts validator configurations to Angular ValidatorFn array
   */
  private getValidators(validatorConfigs?: ValidatorConfig[]): ValidatorFn[] {
    if (!validatorConfigs) return [];

    return validatorConfigs.map(config => {
      switch (config.type) {
        case 'required':
          return Validators.required;
        case 'min':
          return Validators.min(config.value ?? 0);
        case 'max':
          return Validators.max(config.value ?? Infinity);
        case 'minLength':
          return Validators.minLength(config.value ?? 0);
        case 'maxLength':
          return Validators.maxLength(config.value ?? Infinity);
        case 'pattern':
          return Validators.pattern(config.value ?? '');
        case 'email':
          return Validators.email;
        case 'custom':
          return config.validatorFn ?? (() => null);
        default:
          return () => null;
      }
    });
  }

  /**
   * Gets error message for a field based on its validation errors
   */
  getErrorMessage(control: AbstractControl, fieldConfig: FormFieldConfig): string {
    if (!control.errors || !control.touched) return '';

    const errors = control.errors;
    const validatorConfigs = fieldConfig.validators || [];

    // Check for specific validator messages
    for (const validatorConfig of validatorConfigs) {
      if (errors[validatorConfig.type] && validatorConfig.message) {
        return validatorConfig.message;
      }
    }

    // Default error messages
    if (errors['required']) {
      return `${fieldConfig.label} is required`;
    }
    if (errors['min']) {
      return `${fieldConfig.label} must be at least ${errors['min'].min}`;
    }
    if (errors['max']) {
      return `${fieldConfig.label} must be at most ${errors['max'].max}`;
    }
    if (errors['minlength']) {
      return `${fieldConfig.label} must be at least ${errors['minlength'].requiredLength} characters`;
    }
    if (errors['maxlength']) {
      return `${fieldConfig.label} must be at most ${errors['maxlength'].requiredLength} characters`;
    }
    if (errors['email']) {
      return `${fieldConfig.label} must be a valid email address`;
    }
    if (errors['pattern']) {
      return `${fieldConfig.label} format is invalid`;
    }

    return `${fieldConfig.label} is invalid`;
  }

  /**
   * Checks if a field should be displayed based on conditional logic
   */
  shouldShowField(field: FormFieldConfig, formGroup: FormGroup): boolean {
    if (!field.conditional) return true;

    const watchControl = formGroup.get(field.conditional.field);
    if (!watchControl) return true;

    const watchValue = watchControl.value;
    const conditionValue = field.conditional.value;

    switch (field.conditional.operator) {
      case 'equals':
        return watchValue === conditionValue;
      case 'notEquals':
        return watchValue !== conditionValue;
      case 'greaterThan':
        return Number(watchValue) > Number(conditionValue);
      case 'lessThan':
        return Number(watchValue) < Number(conditionValue);
      case 'contains':
        return String(watchValue).includes(String(conditionValue));
      default:
        return true;
    }
  }

  /**
   * Adds a new item to a FormArray
   */
  addFormArrayItem(formArray: FormArray, arrayConfig: FormArrayConfig): void {
    if (arrayConfig.maxItems && formArray.length >= arrayConfig.maxItems) {
      return;
    }
    formArray.push(this.createFormGroupFromConfig(arrayConfig.groupConfig));
  }

  /**
   * Removes an item from a FormArray
   */
  removeFormArrayItem(formArray: FormArray, index: number, arrayConfig: FormArrayConfig): void {
    if (arrayConfig.minItems && formArray.length <= arrayConfig.minItems) {
      return;
    }
    formArray.removeAt(index);
  }

  /**
   * Gets selected values from a checkbox group FormArray
   */
  getCheckboxGroupValues(formArray: FormArray, options: SelectOption[]): any[] {
    if (!formArray || !options) return [];
    
    return formArray.controls
      .map((control, index) => control.value ? options[index].value : null)
      .filter(value => value !== null);
  }
}
