import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
  links = [{ label: 'Canales', path: 'canales' }, { label: 'Empleos', path: 'empleos' }, { label: 'Estados', path: 'estados' }]
  constructor() { }

  ngOnInit(): void {
  }

}
