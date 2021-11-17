import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCadastroComponent } from './card-cadastro.component';

describe('CardCadastroComponent', () => {
  let component: CardCadastroComponent;
  let fixture: ComponentFixture<CardCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
