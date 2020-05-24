import { Component, OnInit } from '@angular/core';
import { EmploymentsService } from 'src/app/core/services/employments.service';

@Component({
  selector: 'app-employments-list',
  templateUrl: './employments-list.component.html',
  styleUrls: ['./employments-list.component.scss']
})
export class EmploymentsListComponent implements OnInit {
  employments = [];
  loadingEmployments: boolean;
  constructor(private employmentsService: EmploymentsService) { }

  ngOnInit(): void {
    this.getEmployments();
  }

  getEmployments(): void {
    this.loadingEmployments = true;
    this.employmentsService.getEmployments().subscribe(employments => {
      this.loadingEmployments = false;
      this.employments = employments;
    });
  }

}
