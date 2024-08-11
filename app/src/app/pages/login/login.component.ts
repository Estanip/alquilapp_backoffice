import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { REGEXPS } from '@app/app/core/constants/regexp';
import { RoutesPaths } from '@app/app/core/constants/routes';
import { AuthService } from '@app/app/modules/auth/services';
import { FormButtonComponent } from '@app/app/shared/components/form/button/form-button.component';
import { FormInputComponent } from '@app/app/shared/components/form/input/form-input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormInputComponent, FormButtonComponent, MatCardModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  registerPath: string = RoutesPaths.AUTH.REGISTER;

  constructor(private readonly _formBuilder: FormBuilder, private readonly _authService: AuthService) {}

  ngOnInit(): void {
    this._setForm();
  }

  login(): void {
    this._authService.login(this.form.value.email, this.form.value.password);
  }

  private _setForm(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(REGEXPS.EMAIL)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    });
  }

  _validateFormStatus(): boolean {
    return this.form.status !== 'VALID';
  }
}
