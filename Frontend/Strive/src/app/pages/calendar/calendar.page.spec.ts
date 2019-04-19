import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { CalendarPage } from './calendar.page';
import { ExpectedConditions } from 'protractor';
import { Component } from '@angular/compiler/src/core';

describe('CalendarPage', () => {
  let component: CalendarPage;
  let fixture: ComponentFixture<CalendarPage>;
  
  fakeAsync(() => {
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
    component.add();
    fixture.detectChanges();
    expect(component.add()).toBeDefined;
  })

  it('popup should exist', () => {
    component.popup();
    fixture.detectChanges();
    expect(component.popup()).toBeDefined;
  })
});

  it('isChecked should be false', () => {
    let form = component;
    expect(this.form[0].isChecked).toBe(false);
    console.log(form[0]);
  })

  it('Checklist should not be true', () => {
    expect(component.cards[0].checklist).toBe('false');
  })

});