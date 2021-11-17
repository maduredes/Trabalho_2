import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagePagamentosComponent } from './page-pagamentos.component';
import { PagamentosRoutingModule } from './page-pagamentos-routing.module';
import { MenuSidebarModule } from '../menu-sidebar/menu-sidebar.module';

@NgModule({
  declarations: [
    PagePagamentosComponent
  ],
  imports: [
    CommonModule,
    PagamentosRoutingModule,
    MenuSidebarModule
  ]
})
export class PagePagamentosModule { }
