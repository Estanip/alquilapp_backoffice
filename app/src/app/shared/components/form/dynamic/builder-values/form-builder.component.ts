import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from '../../input/form-input.component';
import { FormRadioCheckboxComponent } from '../../radiocheckbox/form-radiocheckbox.component';
import { FormSelectComponent } from '../../select/form-select.component';
import { FormBuilderValues } from './form-builder-values.';

@Component({
  standalone: true,
  selector: 'app-form-builder-value',
  templateUrl: './form-builder.component.html',
  imports: [CommonModule, ReactiveFormsModule, FormInputComponent, FormSelectComponent, FormRadioCheckboxComponent],
})
export class FormBuilderValueComponent {
  @Input() builderValue!: FormBuilderValues<string>;
  @Input() form!: FormGroup;

  get isValid() {
    return this.form.controls[this.builderValue.key].valid;
  }
}
