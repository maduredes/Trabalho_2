import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTransferenciasComponent } from './card-transferencias.component';

describe('CardTranferenciasComponent', () => {
  let component: CardTransferenciasComponent;
  let fixture: ComponentFixture<CardTransferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTransferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTransferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
