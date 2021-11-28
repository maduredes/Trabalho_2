import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-transferencias',
  templateUrl: './card-transferencias.component.html',
  styleUrls: ['./card-transferencias.component.scss']
})
export class CardTransferenciasComponent implements OnInit {

  public lista = [];

  constructor() { }

  ngOnInit(): void {
    const simularLimite = localStorage.getItem("simularLimite");
    if (simularLimite) {
      this.lista = JSON.parse(simularLimite);
    }
  }

}
