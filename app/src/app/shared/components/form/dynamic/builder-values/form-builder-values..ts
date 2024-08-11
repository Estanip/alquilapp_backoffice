import { TFormOptions } from '../../interfaces';

export class FormBuilderValues<T> {
  controlType: string;
  isMultiple: boolean;
  isRequired: boolean;
  key: string;
  label: string;
  options: TFormOptions;
  order: number;
  type: string;
  value: T | undefined;

  constructor(
    options: {
      controlType?: string;
      isMultiple?: boolean;
      isRequired?: boolean;
      key?: string;
      label?: string;
      options?: TFormOptions;
      order?: number;
      type?: string;
      value?: T;
    } = {}
  ) {
    this.controlType = options.controlType || '';
    this.isMultiple = !!options.isMultiple;
    this.isRequired = !!options.isRequired;
    this.key = options.key || '';
    this.label = options.label || '';
    this.options = options.options || [];
    this.order = options.order === undefined ? 1 : options.order;
    this.type = options.type || '';
    this.value = options.value;
  }
}
