import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagePagamentosComponent } from './page-pagamentos.component';
import { PagamentosRoutingModule } from './page-pagamentos-routing.module';
import { MenuSidebarComponent } from '../menu-sidebar/menu-sidebar.component';

@NgModule({
  declarations: [
    PagePagamentosComponent,
    MenuSidebarComponent
  ],
  imports: [
    CommonModule,
    PagamentosRoutingModule
  ]
})
export class PagePagamentosModule { }
