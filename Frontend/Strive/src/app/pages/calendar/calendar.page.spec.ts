import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPage } from './calendar.page';
import { ExpectedConditions } from 'protractor';

describe('CalendarPage', () => {
  let component: CalendarPage;
  let fixture: ComponentFixture<CalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('add should exist', () => {
      expect(component.add()).toBeDefined();
  }); 

  it('popup should exist', () => {
    expect(component.popup()).toBeDefined();
  });

  it('should contain', () => {
    let val = 'event';
    let isChecked = false;
    expect(component.form).toBeDefined();
  });
});
