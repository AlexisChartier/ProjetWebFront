import { TestBed } from '@angular/core/testing';

import { ContenuCommandeService } from './contenu-commande.service';

describe('ContenuCommandeService', () => {
  let service: ContenuCommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContenuCommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
