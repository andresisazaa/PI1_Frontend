import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../../services/candidates.service';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
  // candidates: Candidate[] = [];
  candidates: Candidate[] = [
    {
      id: 1,
      name: 'Andrés Felipe Isaza Arboleda',
      email: 'andres.isazaa@udea.edu.co',
      phoneNumber: '3128098715',
      aspiratedJob: 'Node.js Developer',
      attractionChannel: 'LinkedIn',
      CVUrl: 'https://www.youtube.com'
    },
    {
      id: 2,
      name: 'Santiago Gaviria Zapata',
      email: 'santiago.gaviriaz@udea.edu.co',
      phoneNumber: '3128098715',
      aspiratedJob: 'Node.js Developer',
      attractionChannel: 'LinkedIn',
      CVUrl: 'https://www.facebook.com'
    }];

  constructor(private candidatesService: CandidatesService) { }

  ngOnInit() {
    this.candidates = this.candidatesService.candidates;
    console.log(this.candidates);
    
    // this.candidatesService.getCandidates()
    //   .subscribe(candidates => {
    //     this.candidates = candidates;
    //   }, error => {
    //     console.error(error);
    //     console.log('No se pudieron obtener los candidatos');
    //   });
  }

}
