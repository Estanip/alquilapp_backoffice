import { FormControl } from '@angular/forms';

interface IFormOption {
  key: string | number;
  value: string | number | boolean | undefined;
}

export type TFormOptions = IFormOption[];
export interface IFormGroupValue {
  [key: string]: FormControl<null | string>;
}
