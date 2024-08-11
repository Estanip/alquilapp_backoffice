import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldAppearances } from '../constants';
import { TFormOptions } from '../interfaces';

@Component({
  selector: 'app-form-select',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.scss',
})
export class FormSelectComponent {
  @Input() formAppearance: MatFormFieldAppearance = MatFormFieldAppearances.OUTLINE;
  @Input() formGroup!: FormGroup;

  @Input() controlName!: string;
  @Input() isRequired!: boolean;
  @Input() isMultiple = false;
  @Input() labelText!: string;
  @Input() options!: TFormOptions;
}
