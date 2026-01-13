import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { DynamicFormService, DynamicFormConfig, FormFieldConfig, FormGroupConfig, FormArrayConfig } from '../../services/dynamic-form.service';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, StarRatingComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  @Input() config!: DynamicFormConfig;
  @Input() formGroup!: FormGroup;
  @Output() formSubmit = new EventEmitter<any>();

  form: FormGroup = new FormGroup({});
  private subscriptions: Subscription[] = [];

  constructor(private dynamicFormService: DynamicFormService) {}

  ngOnInit(): void {
    if (this.config && !this.formGroup) {
      this.form = this.dynamicFormService.createFormGroup(this.config);
    } else if (this.formGroup) {
      this.form = this.formGroup;
    }

    // Subscribe to form value changes for conditional field logic
    this.subscriptions.push(
      this.form.valueChanges.subscribe(() => {
        // Trigger change detection for conditional fields
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  get topLevelFields(): FormFieldConfig[] {
    return this.config?.fields || [];
  }

  get groups(): FormGroupConfig[] {
    return this.config?.groups || [];
  }

  get arrays(): FormArrayConfig[] {
    return this.config?.arrays || [];
  }

  getControl(fieldName: string): AbstractControl | null {
    return this.form.get(fieldName);
  }

  getGroupControl(groupName: string): FormGroup | null {
    const control = this.form.get(groupName);
    return control instanceof FormGroup ? control : null;
  }

  getArrayControl(arrayName: string): any {
    return this.form.get(arrayName);
  }

  getCheckboxGroupControl(fieldName: string, groupName?: string): any {
    if (groupName) {
      const groupControl = this.getGroupControl(groupName);
      return groupControl ? groupControl.get(fieldName) : null;
    }
    return this.form.get(fieldName);
  }

  isCheckboxSelected(field: FormFieldConfig, optionIndex: number, groupName?: string): boolean {
    const control = this.getCheckboxGroupControl(field.name, groupName);
    if (!control || !(control instanceof FormArray)) return false;
    const checkboxControl = control.at(optionIndex);
    return checkboxControl ? checkboxControl.value : false;
  }

  onCheckboxGroupChange(field: FormFieldConfig, optionIndex: number, event: Event, groupName?: string): void {
    const control = this.getCheckboxGroupControl(field.name, groupName);
    if (!control || !(control instanceof FormArray)) return;
    
    const checkboxControl = control.at(optionIndex);
    if (checkboxControl) {
      checkboxControl.setValue((event.target as HTMLInputElement).checked);
      checkboxControl.markAsTouched();
    }
  }

  shouldShowField(field: FormFieldConfig): boolean {
    return this.dynamicFormService.shouldShowField(field, this.form);
  }

  getErrorMessage(field: FormFieldConfig, groupName?: string): string {
    let control: AbstractControl | null = null;
    if (groupName) {
      const groupControl = this.getGroupControl(groupName);
      control = groupControl ? groupControl.get(field.name) : null;
    } else {
      control = this.getControl(field.name);
    }
    if (!control) return '';
    return this.dynamicFormService.getErrorMessage(control, field);
  }

  getGroupErrorMessage(group: FormGroupConfig): string {
    const groupControl = this.getGroupControl(group.name);
    if (!groupControl || !groupControl.errors || !groupControl.touched) return '';
    return 'This group has validation errors';
  }

  addArrayItem(arrayName: string): void {
    const arrayConfig = this.arrays.find(a => a.name === arrayName);
    if (arrayConfig) {
      const formArray = this.getArrayControl(arrayName);
      if (formArray) {
        this.dynamicFormService.addFormArrayItem(formArray, arrayConfig);
      }
    }
  }

  removeArrayItem(arrayName: string, index: number): void {
    const arrayConfig = this.arrays.find(a => a.name === arrayName);
    if (arrayConfig) {
      const formArray = this.getArrayControl(arrayName);
      if (formArray) {
        this.dynamicFormService.removeFormArrayItem(formArray, index, arrayConfig);
      }
    }
  }

  getControlStateClasses(control: AbstractControl | null): string {
    if (!control) return '';
    
    const classes: string[] = [];
    if (control.touched) classes.push('ng-touched');
    if (control.dirty) classes.push('ng-dirty');
    if (control.valid) classes.push('ng-valid');
    if (control.invalid) classes.push('ng-invalid');
    if (control.pending) classes.push('ng-pending');
    
    return classes.join(' ');
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formValue = this.transformFormValue(this.form.value);
      this.formSubmit.emit(formValue);
    } else {
      this.form.markAllAsTouched();
    }
  }

  /**
   * Transforms form values, converting checkbox group FormArrays to arrays of selected values
   */
  private transformFormValue(value: any): any {
    const transformed = { ...value };
    
    // Process top-level fields
    if (this.config?.fields) {
      this.config.fields.forEach(field => {
        if (field.type === 'checkbox-group' && transformed[field.name] && Array.isArray(transformed[field.name])) {
          transformed[field.name] = this.dynamicFormService.getCheckboxGroupValues(
            this.getCheckboxGroupControl(field.name) as FormArray,
            field.options || []
          );
        }
      });
    }
    
    // Process nested groups
    if (this.config?.groups) {
      this.config.groups.forEach(group => {
        if (transformed[group.name]) {
          group.fields.forEach(field => {
            if (field.type === 'checkbox-group' && transformed[group.name][field.name] && Array.isArray(transformed[group.name][field.name])) {
              const groupControl = this.getGroupControl(group.name);
              const checkboxArray = groupControl?.get(field.name) as FormArray;
              if (checkboxArray) {
                transformed[group.name][field.name] = this.dynamicFormService.getCheckboxGroupValues(
                  checkboxArray,
                  field.options || []
                );
              }
            }
          });
        }
      });
    }
    
    return transformed;
  }
}
