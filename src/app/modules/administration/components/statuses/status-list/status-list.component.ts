import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/shared/models/status.model';
import { StatusesService } from 'src/app/core/services/statuses.service';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss']
})
export class StatusListComponent implements OnInit {
  statuses: Status[] = [];
  loadingStatuses: boolean;
  loadedStatusesSuccess: boolean;
  errorMessage: string;
  constructor(private statusesService: StatusesService) { }

  ngOnInit(): void {
    this.getStatuses();
  }

  getStatuses(): void {
    this.loadingStatuses = true;
    this.loadedStatusesSuccess = false;
    this.statusesService.getStatuses().subscribe(statuses => {
      this.loadingStatuses = false;
      this.loadedStatusesSuccess = true;
      this.statuses = statuses;
    }, error => {
      this.loadingStatuses = false;
      this.loadedStatusesSuccess = false;
      this.errorMessage = error.error.message;
    });
  }

}
