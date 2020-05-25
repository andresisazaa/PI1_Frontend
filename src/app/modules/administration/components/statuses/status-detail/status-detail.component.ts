import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/shared/models/status.model';
import { StatusesService } from 'src/app/core/services/statuses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.scss']
})
export class StatusDetailComponent implements OnInit {
  status: Status;
  constructor(private statusesService: StatusesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getJobDetails(): void {
    this.route.params.subscribe(({ id }) => {
      this.statusesService.getStatusById(id)
        .subscribe((status: Status) => {
          this.status = status;
        });
    });
  }
}
