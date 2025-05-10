import { TestBed } from '@angular/core/testing';

import { ZHorariasService } from './z-horarias.service';

describe('ZHorariasService', () => {
  let service: ZHorariasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZHorariasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
