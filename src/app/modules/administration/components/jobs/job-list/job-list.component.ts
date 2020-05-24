import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/shared/models/job.model';
import { JobsService } from 'src/app/core/services/jobs.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  loadingJobs: boolean;
  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void {
    this.loadingJobs = true;
    this.jobsService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
      this.loadingJobs = false;
    });
  }

}
