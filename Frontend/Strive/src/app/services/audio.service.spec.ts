import { TestBed } from '@angular/core/testing';

import { AudioService } from './audio.service';
import { assertNotNull } from '@angular/compiler/src/output/output_ast';

describe('AudioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioService = TestBed.get(AudioService);
    expect(service).toBeTruthy();
  });
});

describe('The preload function', function() {
  it('should increase sounds.length by 1', ()=> {
    let service: AudioService = TestBed.get(AudioService);
    let song:string = '../../../assets/meditation/forest.wav';
    const done = service.preload('forestSounds',song);
    expect(service.sounds.length).toBe(1);
  })

  it('should increase length of songs array for each preload', ()=> {
    let service: AudioService = TestBed.get(AudioService);
    let song:string = '../../../assets/meditation/forest.wav';
    const done1 = service.preload('oceanSounds','../../../assets/meditation/beach.jpg');
    const done2 = service.preload('forestSounds',song);
    expect(service.sounds.length).toBe(2);
  })

  it('should allow play to work', ()=> {
    let service: AudioService = TestBed.get(AudioService);
    const done1 = service.preload('oceanSounds','../../../assets/meditation/beach.jpg');
    expect(service.play('oceanSounds')).toBeTruthy();
  })
})
