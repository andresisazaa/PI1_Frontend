import { Component, OnInit, ViewChild } from '@angular/core';
import { Status } from 'src/app/shared/models/status.model';
import { StatusesService } from 'src/app/core/services/statuses.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
  showModal: boolean;
  status: Status;
  statusViewFlag: boolean;
  statusEditFlag: boolean;
  statusDeleteFlag: boolean;
  constructor(private statusesService: StatusesService) { }

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
    this.displayedColumns = ['ID', 'name', 'actions'];
    this.statusesData = new MatTableDataSource<Status>(this.statuses);
    this.statusesData.paginator = this.paginator;
    this.statusesData.sort = this.sort;
  }


  viewStatusDetails(status: Status): void {
    this.statusesService.getStatusById(status.id)
      .subscribe(status => {
        this.status = status;
        this.showModal = true;
        this.statusViewFlag = true;
      });
  }

  editStatus(status: Status): void {
    this.statusesService.getStatusById(status.id)
      .subscribe(status => {
        this.status = status;
        this.showModal = true;
        this.statusEditFlag = true;
      });
  }

  closeModal(): void {
    this.showModal = false;
    this.statusViewFlag = false;
    this.statusEditFlag = false;
    this.statusDeleteFlag = false;
  }
}
