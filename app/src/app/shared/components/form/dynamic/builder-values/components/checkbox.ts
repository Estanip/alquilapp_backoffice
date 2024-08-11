import { FormBuilderValues } from '../form-builder-values.';

export class CheckBoxForm extends FormBuilderValues<string> {
  override controlType = 'checkbox';
}
