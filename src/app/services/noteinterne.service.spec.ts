import { TestBed } from '@angular/core/testing';

import { NoteinterneService } from './noteinterne.service';

describe('NoteinterneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteinterneService = TestBed.get(NoteinterneService);
    expect(service).toBeTruthy();
  });
});
