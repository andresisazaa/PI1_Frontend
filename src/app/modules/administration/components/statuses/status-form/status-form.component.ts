import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Status } from 'src/app/shared/models/status.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Job } from 'src/app/shared/models/job.model';
import { StatusesService } from 'src/app/core/services/statuses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.scss']
})
export class StatusFormComponent implements OnInit {
  statusForm: FormGroup;
  status: Status;
  constructor(
    private formBuilder: FormBuilder,
    private statusesService: StatusesService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Job) {
    this.status = this.data;
  }

  ngOnInit(): void {
    this.statusForm = this.createStatusForm();
  }

  createStatusForm(): FormGroup {
    return this.formBuilder.group({
      name: [this.status ? this.status.name : null, Validators.required],
      description: [this.status ? this.status.description : null]
    });
  }

  submit(): void {
    const status: Status = this.statusForm.value;
    if (this.status === null) {
      this.statusesService.createStatus(status)
        .subscribe(createdStatus => {
          this.snackBar.open(`Estadi con id ${createdStatus.id} agregado`, null, { duration: 2000 })
        }, error => {
          this.snackBar.open('No se pudo agregar el estado', null, { duration: 2000 });
        })
    } else {
      status.id = this.status.id;
      this.statusesService.updateStatus(status)
        .subscribe(message => {
          this.snackBar.open(message, null, { duration: 2000 })
        }, ({ error }) => {
          this.snackBar.open(error.message, null, { duration: 2000 });
        })
    }
  }
}
