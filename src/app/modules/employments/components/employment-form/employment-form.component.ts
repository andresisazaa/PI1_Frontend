import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { JobsService } from 'src/app/core/services/jobs.service';
import { Job } from 'src/app/shared/models/job.model';

@Component({
  selector: 'app-employment-form',
  templateUrl: './employment-form.component.html',
  styleUrls: ['./employment-form.component.scss']
})
export class EmploymentFormComponent implements OnInit {
  jobs: Job[] = [];
  employmentForm: FormGroup;
  constructor(private jobsService: JobsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getJobs();
    this.employmentForm = this.createEmploymentForm();
  }

  getJobs(): void {
    this.jobsService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }

  createEmploymentForm(): FormGroup {
    return this.formBuilder.group({
      job: [null, Validators.required],
      openingDate: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

  get job(): AbstractControl {
    return this.employmentForm.get('job');
  }

  get openingDate(): AbstractControl {
    return this.employmentForm.get('openingDate');
  }

  get description(): AbstractControl {
    return this.employmentForm.get('description');
  }

  submit(): void {
    console.log(this.employmentForm.value);
  }

}
