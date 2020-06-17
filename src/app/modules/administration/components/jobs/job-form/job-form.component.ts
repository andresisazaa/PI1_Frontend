import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Job } from 'src/app/shared/models/job.model';
import { JobsService } from 'src/app/core/services/jobs.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {
  jobForm: FormGroup;
  @Input() job: Job;
  constructor(
    private formBuilder: FormBuilder,
    private jobsService: JobsService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Job
  ) {
    this.job = this.data || null;
  }

  ngOnInit(): void {
    this.jobForm = this.createJobForm();
  }

  createJobForm(): FormGroup {
    return this.formBuilder.group({
      name: [this.job ? this.job.name : null, Validators.required],
      description: [this.job ? this.job.description : null]
    });
  }

  submit(): void {
    const job: Job = this.jobForm.value;
    if (this.job === null) {
      this.jobsService.createJob(job)
        .subscribe(createdChannel => {
          this.snackBar.open(`Canal con id ${createdChannel.id} agregado`, null, { duration: 2000 })
        }, error => {
          this.snackBar.open('No se pudo agregar el empleo', null, { duration: 2000 });
        })
    } else {
      job.id = this.job.id;
      this.jobsService.updateJob(job)
        .subscribe(message => {
          this.snackBar.open(message, null, { duration: 2000 })
        }, ({ error }) => {
          this.snackBar.open(error.message, null, { duration: 2000 });
        })
    }
  }
}
