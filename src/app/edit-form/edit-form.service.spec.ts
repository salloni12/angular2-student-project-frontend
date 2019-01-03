import { TestBed, inject } from '@angular/core/testing';

import { EditFormService } from './edit-form.service';

describe('EditFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditFormService]
    });
  });

  it('should be created', inject([EditFormService], (service: EditFormService) => {
    expect(service).toBeTruthy();
  }));
});
