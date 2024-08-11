import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFormGroupValue } from '@app/app/shared/components/form/interfaces';
import { FormBuilderValues } from '../form-builder-values.';

@Injectable({
  providedIn: 'root',
})
export class FormControlService {
  toFormGroup(builderValues: FormBuilderValues<string>[]) {
    const formGroupValue: IFormGroupValue = {};

    builderValues.forEach((value) => {
      formGroupValue[value.key] = value.isRequired
        ? new FormControl(value.value || '', Validators.required)
        : new FormControl(value.value || '');
    });

    return new FormGroup(formGroupValue);
  }
}
