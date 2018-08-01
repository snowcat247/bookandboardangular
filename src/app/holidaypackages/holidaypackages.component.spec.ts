import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaypackagesComponent } from './holidaypackages.component';

describe('HolidaypackagesComponent', () => {
  let component: HolidaypackagesComponent;
  let fixture: ComponentFixture<HolidaypackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidaypackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidaypackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
