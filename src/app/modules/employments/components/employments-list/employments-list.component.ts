import { Component, OnInit, ViewChild } from '@angular/core';
import { EmploymentsService } from 'src/app/core/services/employments.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employment } from 'src/app/shared/models/employment.model';

@Component({
  selector: 'app-employments-list',
  templateUrl: './employments-list.component.html',
  styleUrls: ['./employments-list.component.scss']
})
export class EmploymentsListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[] = [];
  employmentsData: MatTableDataSource<Employment>
  employments: Employment[] = [];
  loadingEmployments: boolean;
  constructor(private employmentsService: EmploymentsService) { }

  ngOnInit(): void {
    this.getEmployments();
  }

  getEmployments(): void {
    this.loadingEmployments = true;
    this.employmentsService.getEmployments().subscribe(employments => {
      this.loadingEmployments = false;
      this.employments = employments;
      console.log(employments);

      this.setTableConfig();
    }, error => {
      this.loadingEmployments = false;
      console.log('OCURRIÓ UN ERROR', error);
    });
  }

  setTableConfig(): void {
    this.displayedColumns = ['ID', 'job', 'openingDate', 'closingDate', 'status'];
    this.employmentsData = new MatTableDataSource<Employment>(this.employments);
    this.employmentsData.paginator = this.paginator;
    this.employmentsData.sort = this.sort;
  }

}

