import { TestBed, inject } from '@angular/core/testing';

import { VisiteurService } from './visiteur.service';

describe('VisiteurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisiteurService]
    });
  });

  it('should be created', inject([VisiteurService], (service: VisiteurService) => {
    expect(service).toBeTruthy();
  }));
});
