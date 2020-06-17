import { Component, OnInit } from '@angular/core';
import { EmploymentsService } from 'src/app/core/services/employments.service';
import { Employment } from 'src/app/shared/models/employment.model';

@Component({
  selector: 'app-new-employment',
  templateUrl: './new-employment.component.html',
  styleUrls: ['./new-employment.component.scss']
})
export class NewEmploymentComponent implements OnInit {

  constructor(private employmentsService: EmploymentsService) { }

  ngOnInit(): void {
  }
  createEmployment(employment: Employment) {
    this.employmentsService.createEmployment(employment)
      .subscribe(emp => { }, error => { });
  }
}
