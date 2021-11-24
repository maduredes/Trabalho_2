import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardCadastroComponent } from './card-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CardCadastroComponent
  ]
})
export class CardCadastroModule { }
