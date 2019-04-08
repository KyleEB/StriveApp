import { TestBed } from '@angular/core/testing';

import { AudioService } from './audio.service';
import { assertNotNull } from '@angular/compiler/src/output/output_ast';

describe('AudioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioService = TestBed.get(AudioService);
    expect(service).toBeTruthy();
  });

  it('should preload', () => {
    const service: AudioService = TestBed.get(AudioService);
    expect(service.preload).toHaveBeenCalled;
  });

  it('should play', () => {
    const service: AudioService = TestBed.get(AudioService);
    expect(service.play).toHaveBeenCalled;
  });
  
});
