import { Component, OnInit } from '@angular/core';
import { EmploymentsService } from 'src/app/core/services/employments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit {
  employment: any;
  constructor(private employmentsService: EmploymentsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.employmentsService.getEmploymentById(id).subscribe(employment => {
        this.employment = employment;
      });
    })
  }



}
