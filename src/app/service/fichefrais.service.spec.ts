import { TestBed, inject } from '@angular/core/testing';

import { FichefraisService } from './fichefrais.service';

describe('FichefraisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FichefraisService]
    });
  });

  it('should be created', inject([FichefraisService], (service: FichefraisService) => {
    expect(service).toBeTruthy();
  }));
});
