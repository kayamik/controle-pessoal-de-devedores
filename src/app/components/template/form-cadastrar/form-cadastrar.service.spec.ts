import { TestBed } from '@angular/core/testing';

import { FormCadastrarService } from './form-cadastrar.service';

describe('FormCadastrarService', () => {
  let service: FormCadastrarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormCadastrarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
