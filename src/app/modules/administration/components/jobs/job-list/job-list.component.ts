import { Component, OnInit, ViewChild } from '@angular/core';
import { Job } from 'src/app/shared/models/job.model';
import { JobsService } from 'src/app/core/services/jobs.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
  showModal: boolean;
  jobViewFlag: boolean;
  jobEditFlag: boolean;
  loadingJobs: boolean;
  constructor(private jobsService: JobsService) { }

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
    this.jobsService.getJobById(job.id)
      .subscribe(job => {
        this.job = job;
        this.showModal = true;
        this.jobViewFlag = true;
      });
  }

  editJob(job: Job): void {
    this.jobsService.getJobById(job.id)
      .subscribe(job => {
        this.job = job;
        this.showModal = true;
        this.jobEditFlag = true;
      });
  }

  closeModal(): void {
    this.showModal = false;
    this.jobViewFlag = false;
    this.jobEditFlag = false;
  }
}
