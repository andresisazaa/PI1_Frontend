import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from "@angular/router";
import { LoadingComponent } from './components/loading/loading.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    NotFoundComponent,
    ErrorMessageComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    ErrorMessageComponent
  ],
})
export class SharedModule { }
