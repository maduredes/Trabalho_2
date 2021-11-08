import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pagamentos',
    loadChildren: () => import('./page-pagamentos/page-pagamentos.module').then(m => m.PagePagamentosModule)

  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
