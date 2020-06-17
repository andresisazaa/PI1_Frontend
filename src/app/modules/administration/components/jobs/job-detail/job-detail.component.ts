import { Component, Inject } from '@angular/core';
import { Job } from 'src/app/shared/models/job.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public job: Job) { }
}
