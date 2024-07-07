import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RegExp } from '@app/core/constants/regexp';
import { RoutesPaths } from '@app/core/constants/routes';
import { FormButtonComponent } from '@app/shared/components/form/button/form-button.component';
import { FormInputComponent } from '@app/shared/components/form/input/form-input.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormInputComponent,
    FormButtonComponent,
    MatCardModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  loginPath: string = RoutesPaths.AUTH.LOGIN;

  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._setForm();
  }
  register(): void {
    console.log('Registrado!');
  }

  private _setForm(): void {
    this.form = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      surname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      role: ['', [Validators.required, roleValidator]],
      email: ['', [Validators.required, Validators.pattern(RegExp.EMAIL)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    });
  }

  _validateFormStatus(): boolean {
    return this.form.status !== 'VALID';
  }
}

function roleValidator(control: AbstractControl): ValidationErrors | null {
  const allowedRoles = ['admin', 'administrador', 'user', 'usuario'];
  const enteredRole = control.value.toLowerCase();

  if (!allowedRoles.includes(enteredRole)) {
    return { roleInvalid: true };
  }
  return null;
}
