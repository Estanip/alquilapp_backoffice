import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { RegExp } from '@app/core/constants/regexp';
import { FormButtonComponent } from '@app/shared/components/form/button/form-button.component';
import { FormInputComponent } from '@app/shared/components/form/input/form-input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormInputComponent, FormButtonComponent, MatCardModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._setForm();
  }

  login(): void {
    return;
  }

  private _setForm(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(RegExp.EMAIL)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    });
  }

  private _resetForm(): void {
    this.form.reset();
  }

  _validateFormStatus(): boolean {
    return this.form.status !== 'VALID';
  }
}
