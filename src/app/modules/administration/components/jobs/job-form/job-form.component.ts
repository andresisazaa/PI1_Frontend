import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {
  jobForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.jobForm = this.createJobForm();
  }

  createJobForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, Validators.required],
      description: [null]
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
