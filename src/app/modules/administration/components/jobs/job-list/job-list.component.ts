import { Component, OnInit, ViewChild } from '@angular/core';
import { Job } from 'src/app/shared/models/job.model';
import { JobsService } from 'src/app/core/services/jobs.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { JobDetailComponent } from '../job-detail/job-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { JobFormComponent } from '../job-form/job-form.component';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  jobsData: MatTableDataSource<Job>
  displayedColumns: string[] = [];
  jobs: Job[] = [];
  job: Job;
  loadingJobs: boolean;
  constructor(
    private jobsService: JobsService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void {
    this.loadingJobs = true;
    this.jobsService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
      this.setTableConfig();
      this.loadingJobs = false;
    });
  }

  setTableConfig(): void {
    this.displayedColumns = ['ID', 'name', 'actions'];
    this.jobsData = new MatTableDataSource<Job>(this.jobs);
    this.jobsData.paginator = this.paginator;
    this.jobsData.sort = this.sort;
  }

  viewJobDetails(job: Job): void {
    this.dialog.open(JobDetailComponent, { data: job });
  }

  editJob(job: Job): void {
    this.dialog.open(JobFormComponent, { data: job });
  }
}
