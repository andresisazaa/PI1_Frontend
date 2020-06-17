import { Component, OnInit, ViewChild } from '@angular/core';
import { Candidate } from '../../../../shared/models/candidate.model';
import { CandidatesService } from 'src/app/core/services/candidates.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { NewCandidateComponent } from '../new-candidate/new-candidate.component';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  candidateData: MatTableDataSource<Candidate>;
  displayedColumns: string[] = [];
  candidates = [];
  loadingCandidates: boolean;
  constructor(
    private candidatesService: CandidatesService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getCandidates();
  }

  getCandidates(): void {
    this.loadingCandidates = true;
    this.candidatesService.getCandidates()
      .subscribe(candidates => {
        this.loadingCandidates = false;
        this.candidates = candidates;
        this.setTableConfig();
      }, error => {
        this.loadingCandidates = false;
      });
  }

  setTableConfig(): void {
    this.displayedColumns = ['id', 'name', 'email', 'phoneNumber', 'attractionChannel', 'CVUrl'];
    this.candidateData = new MatTableDataSource<Candidate>(this.candidates);
    this.candidateData.paginator = this.paginator;
    this.candidateData.sort = this.sort;
  }

  openCandidateModal() {
    this.dialog.open(NewCandidateComponent);
  }

}
