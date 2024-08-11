import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ICourt, ICourtTableElement } from '@app/app/modules/dashboard/courts/interfaces';
import { CourtService } from '@app/app/modules/dashboard/courts/services';
import { AlertDialogComponent } from '@app/app/shared/components/dialog/alert/alert.component';
import { FormBuilderValues } from '@app/app/shared/components/form/dynamic/builder-values/form-builder-values.';
import { FormBuilderService } from '@app/app/shared/components/form/dynamic/builder-values/services/builder.service';
import { DynamicFormComponent } from '@app/app/shared/components/form/dynamic/dynamic-form.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-court-edit',
  standalone: true,
  imports: [CommonModule, DynamicFormComponent, AsyncPipe],
  providers: [FormBuilderService],
  templateUrl: './court-edit.component.html',
  styleUrl: './court-edit.component.scss',
})
export class CourtEditComponent {
  private _isEditing: boolean;
  formBuilderValues$: Observable<FormBuilderValues<string>[]>;

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: ICourtTableElement,
    private _courtService: CourtService,
    private _dialog: MatDialog,
    private _dialogRef: MatDialogRef<CourtEditComponent>,
    private _formBuilderService: FormBuilderService
  ) {
    this._dialogRef.updateSize('auto', 'auto');
    this._isEditing = !!this._data._id;
    this.formBuilderValues$ = this._formBuilderService.setCourtFormValues(this._data);
  }

  closeModal() {
    this._dialogRef.close();
  }

  add(form: FormGroup) {
    if (form.valid) {
      const court = this._setCourtData(form.value);
      delete court['_id'];

      this._courtService.create(court).subscribe({
        next: (response) => {
          if (response.success) this._dialogRef.close();
        },
        error: (err: Error) => {
          if (err.message === 'Court must be unique')
            this._dialog.open(AlertDialogComponent, {
              data: { message: 'Ya existe una cancha creda con ese número', buttonText: 'Cerrar' },
            });
        },
      });
    }
  }

  edit(form: FormGroup) {
    if (form.valid) {
      const court = this._setCourtData(form.value);
      const courtId = court._id;
      delete court['court_number'];
      delete court['_id'];

      this._courtService.edit(court, courtId as string).subscribe({
        next: (response) => {
          if (response.success) this._dialogRef.close();
        },
        error: (err) => console.log(err),
      });
    }
  }

  submit(form: FormGroup) {
    if (this._isEditing) this.edit(form);
    else if (!this._isEditing) this.add(form);
  }

  private _setCourtData(data: ICourtTableElement): ICourt {
    return {
      _id: data._id as string,
      available_from: `${data.From}:00`,
      available_until: `${data.To}:00`,
      is_enabled: data.Enabled === '1' ? true : false,
      surface_type: data.Surface,
      court_number: data.Number,
    };
  }
}
