import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuSidebarComponent } from './menu-sidebar.component';
import { CardFaturaModule } from '../card-fatura/card-fatura.module';
import { CardCadastroModule } from '../card-cadastro/card-cadastro.module';


@NgModule({
  declarations: [
    MenuSidebarComponent,
  ],
  imports: [
    CommonModule,
    CardFaturaModule,
    CardCadastroModule
  ],
  exports: [
    MenuSidebarComponent
  ]
})
export class MenuSidebarModule { }
