import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePagamentosComponent } from './page-pagamentos.component';

const routes: Routes = [
  {
    path: '',
    component: PagePagamentosComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentosRoutingModule { }
