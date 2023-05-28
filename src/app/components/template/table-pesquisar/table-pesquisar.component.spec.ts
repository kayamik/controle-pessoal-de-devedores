import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePesquisarComponent } from './table-pesquisar.component';

describe('TablePesquisarComponent', () => {
  let component: TablePesquisarComponent;
  let fixture: ComponentFixture<TablePesquisarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePesquisarComponent]
    });
    fixture = TestBed.createComponent(TablePesquisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
