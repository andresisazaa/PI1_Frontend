import { Component, OnInit, ViewChild } from '@angular/core';
import { Status } from 'src/app/shared/models/status.model';
import { StatusesService } from 'src/app/core/services/statuses.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { StatusDetailComponent } from '../status-detail/status-detail.component';
import { StatusFormComponent } from '../status-form/status-form.component';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss']
})
export class StatusListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  statusesData: MatTableDataSource<Status>
  displayedColumns: string[] = [];
  statuses: Status[] = [];
  loadingStatuses: boolean;
  status: Status;
  constructor(private statusesService: StatusesService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getStatuses();
  }

  getStatuses(): void {
    this.loadingStatuses = true;
    this.statusesService.getStatuses().subscribe(statuses => {
      this.statuses = statuses;
      this.setTableConfig();
      this.loadingStatuses = false;
    });
  }

  setTableConfig(): void {
    this.displayedColumns = ['id', 'name', 'actions'];
    this.statusesData = new MatTableDataSource<Status>(this.statuses);
    this.statusesData.paginator = this.paginator;
    this.statusesData.sort = this.sort;
  }

  viewStatusDetails(status: Status): void {
    this.dialog.open(StatusDetailComponent, { data: status });
  }

  editStatus(status: Status): void {
    this.dialog.open(StatusFormComponent, { data: status });
  }
}
