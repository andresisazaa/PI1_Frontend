import { Component, Inject } from '@angular/core';
import { Status } from 'src/app/shared/models/status.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.scss']
})
export class StatusDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public status: Status) { }
}
