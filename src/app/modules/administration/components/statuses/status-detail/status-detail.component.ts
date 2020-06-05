import { Component, Input } from '@angular/core';
import { Status } from 'src/app/shared/models/status.model';

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.scss']
})
export class StatusDetailComponent {
  @Input() status: Status;
}
