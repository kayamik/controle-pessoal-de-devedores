import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastrarComponent } from './form-cadastrar.component';

describe('FormCadastrarComponent', () => {
  let component: FormCadastrarComponent;
  let fixture: ComponentFixture<FormCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCadastrarComponent]
    });
    fixture = TestBed.createComponent(FormCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
