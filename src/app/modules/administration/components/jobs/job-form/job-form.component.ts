import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Job } from 'src/app/shared/models/job.model';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {
  jobForm: FormGroup;
  @Input() job: Job;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.jobForm = this.createJobForm();
  }

  createJobForm(): FormGroup {
    return this.formBuilder.group({
      name: [this.job ? this.job.name : null, Validators.required],
      description: [this.job ? this.job.description : null]
    });
  }

  get name(): AbstractControl {
    return this.jobForm.get('name');
  }

  get description(): AbstractControl {
    return this.jobForm.get('description');
  }

  submit(): void {
    console.log(this.jobForm.value);
  }
}
