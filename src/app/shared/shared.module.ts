import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedRoutingModule } from './shared.routes';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [NavbarComponent, FooterComponent]
})
export class SharedModule { }
