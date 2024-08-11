import { FormBuilderValues } from '../form-builder-values.';

export class TextBoxForm extends FormBuilderValues<string> {
  override controlType = 'textbox';
}
