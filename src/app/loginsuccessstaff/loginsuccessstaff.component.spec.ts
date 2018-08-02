import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsuccessstaffComponent } from './loginsuccessstaff.component';

describe('LoginsuccessstaffComponent', () => {
  let component: LoginsuccessstaffComponent;
  let fixture: ComponentFixture<LoginsuccessstaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsuccessstaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsuccessstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
