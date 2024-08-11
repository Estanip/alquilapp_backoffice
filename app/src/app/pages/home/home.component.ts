import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RoutesPaths } from '@app/app/core/constants/routes';
import { CourtEditComponent } from '@app/app/modules/dashboard/courts/components/edition/court-edit.component';
import { COURT_TABLE_COLUMNS } from '@app/app/modules/dashboard/courts/constants';
import { ICourt, ICourtTableElement } from '@app/app/modules/dashboard/courts/interfaces';
import { CourtService } from '@app/app/modules/dashboard/courts/services';
import { TModuleElement } from '@app/app/modules/interfaces';
import { MenuComponent } from '@app/app/shared/components/menu/menu.component';
import { TTAbleData } from '@app/app/shared/components/table/interfaces';
import { TableComponent } from '@app/app/shared/components/table/table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TableComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  tableHidden = true;
  tableData!: TTAbleData<TModuleElement>;
  tableColumns!: string[];

  constructor(
    private readonly _router: Router,
    private readonly _courtService: CourtService,
    private readonly _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._renderTable(this._router.url);
  }

  createItem() {
    if (this._router.url === `/${RoutesPaths.DASHBOARD.COURTS}`) {
      this._dialog
        .open(CourtEditComponent, { data: this._setEmptyCourt() })
        .afterClosed()
        .subscribe(() => {
          this._cleanTable();
          this._renderTable(this._router.url);
        });
    }
  }

  editItem(_id: string) {
    if (this._router.url === `/${RoutesPaths.DASHBOARD.COURTS}`) {
      if (_id)
        this._courtService.getById(_id).subscribe({
          next: (response) => {
            const formData = this._setCourtFormData(response.data as ICourt);
            this._dialog
              .open(CourtEditComponent, { data: formData })
              .afterClosed()
              .subscribe(() => {
                this._cleanTable();
                this._renderTable(this._router.url);
              });
          },
          error: (err) => err,
        });
    }
    /*     this._dialog.open(AlertDialogComponent, {
      data: { message, buttonText: 'Cerrar' },
    }); */
  }
  private _cleanTable() {
    this.tableHidden = true;
    this.tableData = [];
  }

  private _renderTable(url: string) {
    if (url === `/${RoutesPaths.DASHBOARD.COURTS}`) {
      this._courtService.getAll().subscribe({
        next: (response) => {
          this.tableData = this._setCourtTableData(response?.data as ICourt[]);
          this.tableColumns = COURT_TABLE_COLUMNS;
          this.tableHidden = false;
        },
        error: (err) => err,
      });
    } /*  else if (url === `/${RoutesPaths.DASHBOARD.USERS}`) {
      this.tableHidden = false;

      this.tableData = USER_TABLE_DATA;
      this.tableColumns = USER_TABLE_COLUMNS;
    } */
  }

  private _setCourtFormData(court: ICourt) {
    return {
      _id: court._id,
      From: court.available_from,
      To: court.available_until,
      Number: court.court_number,
      Enabled: court.is_enabled,
      Surface: court.surface_type,
    };
  }

  private _setCourtTableData(courtList: ICourt[]): ICourtTableElement[] {
    return courtList.map((court) => {
      return {
        _id: court._id,
        From: court.available_from,
        To: court.available_until,
        Number: court.court_number as number,
        Enabled: court.is_enabled,
        Surface: court.surface_type,
      };
    });
  }

  private _setEmptyCourt() {
    return {
      From: undefined,
      To: undefined,
      Number: undefined,
      Enabled: undefined,
      Surface: undefined,
    };
  }
}
