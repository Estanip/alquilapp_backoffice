import { Injectable } from '@angular/core';
import { COURT_NUMBERS, COURT_SCHEDULES, COURT_SURFACES } from '@app/app/modules/dashboard/courts/constants';
import { ICourtTableElement } from '@app/app/modules/dashboard/courts/interfaces';
import { of } from 'rxjs';
import { DropdownForm } from '../components/dropdown';
import { RadioCheckBoxForm } from '../components/radiocheckbox';
import { TextBoxForm } from '../components/textbox';
import { FormBuilderValues } from '../form-builder-values.';

@Injectable()
export class FormBuilderService {
  setCourtFormValues(data: ICourtTableElement) {
    const values: FormBuilderValues<string>[] = [];
    Object.keys(data).forEach((key) => {
      const courtKey = key as keyof ICourtTableElement;

      if (courtKey === '_id')
        values.push(
          new TextBoxForm({
            key: courtKey,
            label: courtKey,
            value: data[courtKey],
            order: 0,
          })
        );

      if (courtKey === 'Number' && !data[courtKey])
        values.push(
          new DropdownForm({
            isRequired: true,
            key: courtKey,
            label: courtKey,
            options: COURT_NUMBERS.map((number) => {
              return {
                key: number,
                value: number.toString(),
              };
            }),
            order: 1,
          })
        );

      if (courtKey === 'To' || courtKey === 'From')
        values.push(
          new DropdownForm({
            isRequired: true,
            key: courtKey,
            label: courtKey,
            options: COURT_SCHEDULES.map((schedule) => {
              return {
                key: schedule.toString(),
                value: `${schedule}:00`,
              };
            }),
            value: data[courtKey]?.split(':')[0],
            order: 2,
          })
        );

      if (courtKey === 'Surface')
        values.push(
          new DropdownForm({
            isRequired: true,
            key: courtKey,
            label: courtKey,
            options: [
              {
                key: COURT_SURFACES.CLAY,
                value: COURT_SURFACES.CLAY,
              },
              {
                key: COURT_SURFACES.HARD,
                value: COURT_SURFACES.HARD,
              },
            ],
            value: data[courtKey],
            order: 3,
          })
        );

      if (key === 'Enabled')
        values.push(
          new RadioCheckBoxForm({
            isRequired: true,
            key: courtKey,
            options: [
              {
                key: 'Enable',
                value: '1',
              },
              {
                key: 'Disable',
                value: '0',
              },
            ],
            value: data[courtKey] ? '1' : ('0' as string),
            order: 4,
          })
        );
    });

    return of(values.sort((a, b) => a.order - b.order));
  }
}
