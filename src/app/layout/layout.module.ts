import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarMobileComponent } from './sidebar-mobile/sidebar-mobile.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarMobileComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ]
})
export class LayoutModule { }
