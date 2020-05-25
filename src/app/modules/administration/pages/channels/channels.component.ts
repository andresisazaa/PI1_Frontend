import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  showFormModal: boolean;
  constructor() { }
  ngOnInit(): void { }

  closeModal() {
    this.showFormModal = false;
  }
}
