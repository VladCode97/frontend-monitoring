import { TestBed } from '@angular/core/testing';

import { AdministradorServiceService } from './administrador-service.service';

describe('AdministradorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdministradorServiceService = TestBed.get(AdministradorServiceService);
    expect(service).toBeTruthy();
  });
});
