import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePagamentosComponent } from './page-pagamentos.component';

describe('PagePagamentosComponent', () => {
  let component: PagePagamentosComponent;
  let fixture: ComponentFixture<PagePagamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePagamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePagamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
