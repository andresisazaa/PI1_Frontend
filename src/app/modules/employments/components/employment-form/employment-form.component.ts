import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobsService } from 'src/app/core/services/jobs.service';
import { Job } from 'src/app/shared/models/job.model';
import { Employment } from 'src/app/shared/models/employment.model';

@Component({
  selector: 'app-employment-form',
  templateUrl: './employment-form.component.html',
  styleUrls: ['./employment-form.component.scss']
})
export class EmploymentFormComponent implements OnInit {
  @Output() submitEmployment: EventEmitter<Employment>;
  employmentForm: FormGroup;
  jobs: Job[] = [];
  constructor(
    private jobsService: JobsService,
    private formBuilder: FormBuilder) {
    this.submitEmployment = new EventEmitter<Employment>();
  }

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

  submit(): void {
    if (this.employmentForm.invalid) {
      return;
    }
    const employment: Employment = this.employmentForm.value;
    this.submitEmployment.emit(employment);
  }
}
