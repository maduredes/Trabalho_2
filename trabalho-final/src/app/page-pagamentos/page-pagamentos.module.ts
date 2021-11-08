import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePagamentosComponent } from './page-pagamentos.component';
import { PagamentosRoutingModule } from './page-pagamentos-routing.module';

@NgModule({
  declarations: [
    PagePagamentosComponent
  ],
  imports: [
    CommonModule,
    PagamentosRoutingModule
  ]
})
export class PagePagamentosModule { }
