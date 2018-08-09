import { TestBed, inject } from '@angular/core/testing';

import { E2eIdCollectorService } from './e2e-id-collector.service';

describe('E2eIdCollectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [E2eIdCollectorService]
    });
  });

  it('should be created', inject([E2eIdCollectorService], (service: E2eIdCollectorService) => {
    expect(service).toBeTruthy();
  }));
});
