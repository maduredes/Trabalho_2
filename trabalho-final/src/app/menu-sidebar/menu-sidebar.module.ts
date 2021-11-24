import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuSidebarComponent } from './menu-sidebar.component';
import { CardFaturaModule } from '../card-fatura/card-fatura.module';
import { CardCadastroModule } from '../card-cadastro/card-cadastro.module';
import { CardTransferenciasModule } from '../card-transferencias/card-transferencias.module';


@NgModule({
  declarations: [
    MenuSidebarComponent,
  ],
  imports: [
    CommonModule,
    CardFaturaModule,
    CardCadastroModule,
    CardTransferenciasModule
  ],
  exports: [
    MenuSidebarComponent
  ]
})
export class MenuSidebarModule { }
