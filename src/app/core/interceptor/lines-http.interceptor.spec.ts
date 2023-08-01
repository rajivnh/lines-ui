import { TestBed } from '@angular/core/testing';

import { LinesHttpInterceptor } from './lines-http.interceptor';

describe('LinesHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LinesHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LinesHttpInterceptor = TestBed.inject(LinesHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
