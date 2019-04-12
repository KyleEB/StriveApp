import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { CalendarPage } from './calendar.page';
import { ExpectedConditions } from 'protractor';

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

  it('form should exist', () => {
    expect(component.form).toBeDefined;
  })

  it('should have task listed', () => {
    let form = [
      { val: 'Hello', isChecked: true },
      { val: 'Bye', isChecked: true },
      { val: 'Later', isChecked: true }
    ];
    expect(component.form).toBe(this.form);
  })
});
});