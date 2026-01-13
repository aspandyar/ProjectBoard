import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => StarRatingComponent),
      multi: true
    }
  ]
})
export class StarRatingComponent implements ControlValueAccessor, Validator, OnInit {
  @Input() maxStars: number = 5;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() showLabels: boolean = true;

  value: number | null = null;
  hoveredStar: number | null = null;
  touched: boolean = false;

  // ControlValueAccessor implementation
  private onChange = (value: number | null) => {};
  private onTouched = () => {};

  ngOnInit(): void {
    // Component initialization
  }

  // ControlValueAccessor: Write value from form control
  writeValue(value: number | null): void {
    this.value = value;
  }

  // ControlValueAccessor: Register change callback
  registerOnChange(fn: (value: number | null) => void): void {
    this.onChange = fn;
  }

  // ControlValueAccessor: Register touched callback
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // ControlValueAccessor: Handle disabled state
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Validator: Custom validation logic
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (this.required && (value === null || value === undefined || value === 0)) {
      return { required: true };
    }
    return null;
  }

  // Handle star click
  onStarClick(rating: number): void {
    if (this.disabled) return;

    this.markAsTouched();
    this.value = rating;
    this.onChange(this.value);
  }

  // Handle star hover
  onStarHover(rating: number): void {
    if (this.disabled) return;
    this.hoveredStar = rating;
  }

  // Handle mouse leave
  onMouseLeave(): void {
    this.hoveredStar = null;
  }

  // Get star state for styling
  getStarState(index: number): 'filled' | 'hovered' | 'empty' {
    if (this.disabled) {
      return this.value !== null && index <= this.value ? 'filled' : 'empty';
    }

    const displayValue = this.hoveredStar !== null ? this.hoveredStar : this.value;
    
    if (displayValue !== null && index <= displayValue) {
      return 'filled';
    }
    if (this.hoveredStar !== null && index <= this.hoveredStar) {
      return 'hovered';
    }
    return 'empty';
  }

  // Mark as touched
  private markAsTouched(): void {
    if (!this.touched) {
      this.touched = true;
      this.onTouched();
    }
  }

  // Get array of star indices
  get stars(): number[] {
    return Array.from({ length: this.maxStars }, (_, i) => i + 1);
  }
}
