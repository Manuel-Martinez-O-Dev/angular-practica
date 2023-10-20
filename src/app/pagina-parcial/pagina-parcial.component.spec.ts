import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaParcialComponent } from './pagina-parcial.component';

describe('PaginaParcialComponent', () => {
  let component: PaginaParcialComponent;
  let fixture: ComponentFixture<PaginaParcialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaParcialComponent]
    });
    fixture = TestBed.createComponent(PaginaParcialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
