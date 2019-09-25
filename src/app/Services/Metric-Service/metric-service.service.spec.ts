import { TestBed } from '@angular/core/testing';

import { MetricServiceService } from './metric-service.service';

describe('MetricServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetricServiceService = TestBed.get(MetricServiceService);
    expect(service).toBeTruthy();
  });
});
