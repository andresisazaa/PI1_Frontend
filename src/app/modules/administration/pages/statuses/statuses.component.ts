import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.scss']
})
export class StatusesComponent implements OnInit {
  showFormModal: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.showFormModal = false;
  }

}
