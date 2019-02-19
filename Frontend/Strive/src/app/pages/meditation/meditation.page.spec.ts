import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditationPage } from './meditation.page';

describe('MeditationPage', () => {
  let component: MeditationPage;
  let fixture: ComponentFixture<MeditationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeditationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
