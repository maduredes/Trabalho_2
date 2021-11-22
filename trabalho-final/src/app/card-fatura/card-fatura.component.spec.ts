import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFaturaComponent } from './card-fatura.component';

describe('CardFaturaComponent', () => {
  let component: CardFaturaComponent;
  let fixture: ComponentFixture<CardFaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
