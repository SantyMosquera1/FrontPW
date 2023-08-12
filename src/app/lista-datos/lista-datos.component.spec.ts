import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDatosComponent } from './lista-datos.component';

describe('ListaDatosComponent', () => {
  let component: ListaDatosComponent;
  let fixture: ComponentFixture<ListaDatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDatosComponent]
    });
    fixture = TestBed.createComponent(ListaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
