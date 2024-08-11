import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { TFormOptions } from '../interfaces';

@Component({
  selector: 'app-form-checkbox',
  standalone: true,
  imports: [CommonModule, MatRadioModule, MatCheckboxModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './form-radiocheckbox.component.html',
  styleUrl: './form-radiocheckbox.component.scss',
})
export class FormRadioCheckboxComponent {
  @Input() controlName!: string;
  @Input() formGroup!: FormGroup;
  @Input() labelText!: string;
  @Input() options!: TFormOptions;
}
