import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayPackageFormComponent } from './holiday-package-form.component';

describe('HolidayPackageFormComponent', () => {
  let component: HolidayPackageFormComponent;
  let fixture: ComponentFixture<HolidayPackageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayPackageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayPackageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
