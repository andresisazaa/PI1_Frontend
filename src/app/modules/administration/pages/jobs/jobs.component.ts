import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  showFormModal: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.showFormModal = false;
  }
}
