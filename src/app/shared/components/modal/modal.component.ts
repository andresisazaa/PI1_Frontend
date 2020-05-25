import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  // @ViewChild('modal') modal: ElementRef<HTMLElement>;
  @Input() showModal: boolean;
  @Input() modalTitle: string;
  @Output() onCloseModal: EventEmitter<void>;
  constructor() {
    this.onCloseModal = new EventEmitter<void>();
  }
  openModal(): void {
    this.showModal = true;
    // this.modal.nativeElement.classList.add('show', 'fade', 'animate__fadeInDown',
    //   'animate__animated', 'animate__faster');
  }

  closeModal(): void {
    this.showModal = false;
    // this.modal.nativeElement.classList.remove('show', 'fade', 'animate__fadeInDown',
    //   'animate__animated', 'animate__faster');
    this.onCloseModal.emit();
  }

}
