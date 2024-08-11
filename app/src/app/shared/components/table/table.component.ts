import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TModuleElement } from '@app/app/modules/interfaces';
import { SpinnerComponent } from '../loading/spinner/spinner.component';
import { TTAbleData } from './interfaces';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    SpinnerComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements AfterViewInit, OnInit {
  @Input() allowAdd = true;
  @Input() allowFilter = true;
  @Input() columns!: string[];
  @Input() data!: TTAbleData<TModuleElement>;
  @Input() deleteable!: boolean;
  @Input() editable!: boolean;

  @Input() paginatorActive = true;
  @Input() paginatorPageSize = 5;
  @Input() paginatorPageIndex = 0;
  @Input() paginatorPageSizeOptions: number[] = [5, 10, 25, 100];
  @Input() paginatorShowFirstLastButtons = true;
  @Input() paginatorTotalItems!: number;

  @Output() getItemId = new EventEmitter<string>();
  @Output() addItem = new EventEmitter();

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<TModuleElement>;
  displayedColumns!: string[];
  loading = true;
  sortedData!: TTAbleData<TModuleElement>;

  ngOnInit(): void {
    if (this.data) {
      this.dataSource = new MatTableDataSource(this.data);
      this.sortedData = this.data.slice();
    }
    if (this.columns) this.displayedColumns = this.columns;
    if (this.editable) this.displayedColumns = [...this.displayedColumns, 'Edit'];
    if (this.deleteable) this.displayedColumns = [...this.displayedColumns, 'Delete'];

    this.loading = false;
  }

  ngAfterViewInit(): void {
    if (this.paginatorActive && this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  paginatorPageEvent(event: PageEvent) {
    this.paginatorPageIndex = event.pageIndex;
  }
}
