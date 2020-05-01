import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [SidebarComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, FooterComponent, HeaderComponent],
})
export class SharedModule {}
