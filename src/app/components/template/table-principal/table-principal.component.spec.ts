import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrincipalComponent } from './table-principal.component';

describe('TablePrincipalComponent', () => {
  let component: TablePrincipalComponent;
  let fixture: ComponentFixture<TablePrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePrincipalComponent]
    });
    fixture = TestBed.createComponent(TablePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
