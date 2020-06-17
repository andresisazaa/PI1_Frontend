import { Component, OnInit, ViewChild } from '@angular/core';
import { EmploymentsService } from 'src/app/core/services/employments.service';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[] = [];
  employmentData: MatTableDataSource<any>
  employment: any;
  constructor(private employmentsService: EmploymentsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.employmentsService.getEmploymentById(id)
        .subscribe(employment => {
          this.employment = employment;
          this.setTableConfig();
        });
    })
  }


  setTableConfig(): void {
    this.displayedColumns = ['name', 'firstContactDate', 'attractionChannel', 'currentSalary',
      'salaryExpectation', 'availability', 'alternativeJob', 'status', 'thankYouLetter'];
    this.employmentData = new MatTableDataSource<any>(this.employment);
    this.employmentData.paginator = this.paginator;
    this.employmentData.sort = this.sort;
  }


}
