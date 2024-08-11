import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormButtonComponent } from '../button/form-button.component';
import { FormBuilderValues } from './builder-values/form-builder-values.';
import { FormBuilderValueComponent } from './builder-values/form-builder.component';
import { FormControlService } from './builder-values/services/form-control.service';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormBuilderValueComponent, FormButtonComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit {
  @Output() closeButtonOnClick = new EventEmitter();
  @Output() confirmButtonOnClick = new EventEmitter();

  @Input() builderValues: FormBuilderValues<string>[] | null = [];
  form!: FormGroup;

  constructor(private _formControlService: FormControlService) {}

  ngOnInit() {
    this.form = this._formControlService.toFormGroup(this.builderValues as FormBuilderValues<string>[]);
  }
}
