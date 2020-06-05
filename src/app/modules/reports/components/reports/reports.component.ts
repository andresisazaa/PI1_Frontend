import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  title = "Reportes"

  myData = [
    ['Proceso finaliza antes de entrevista', 30],
    ['Rechazado por entrevista técnica', 30],
    ['Por contactar', 30],
    ['Contactado', 40],
    ['Se le envió prueba', 20],
    ['Prueba por calificar', 15],
    ['Por entrevistar', 20],
    ['Preseleccionado', 10],
    ['Seleccionado', 10],
  ];

  myData2 = [
    ['Java Developer', 50],
    ['Node.js Developer', 10],
    ['.NET Developer', 40],
    ['Angular Developer', 20],
    ['React.js Developer', 30],
    ['AWS Architect', 10],
    ['Ruby on Rails Developer', 20]
  ];
  constructor() { }

  ngOnInit() {
  }

}
