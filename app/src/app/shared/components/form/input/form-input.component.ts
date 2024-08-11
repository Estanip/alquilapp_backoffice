import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldAppearances } from '../constants';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, FormsModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
})
export class FormInputComponent {
  @Input() formAppearance: MatFormFieldAppearance = MatFormFieldAppearances.OUTLINE;
  @Input() formGroup!: FormGroup;

  @Input() class!: string;
  @Input() controlName!: string;
  @Input() isRequired = true;
  @Input() labelText!: string;
  @Input() name!: string;
  @Input() placeholderText!: string;
  @Input() type!: string;
}
