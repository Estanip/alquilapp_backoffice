import { FormBuilderValues } from '../form-builder-values.';

export class DropdownForm extends FormBuilderValues<string> {
  override controlType = 'dropdown';
}
