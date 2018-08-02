import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeraccountswitchComponent } from './customeraccountswitch.component';

describe('CustomeraccountswitchComponent', () => {
  let component: CustomeraccountswitchComponent;
  let fixture: ComponentFixture<CustomeraccountswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeraccountswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeraccountswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
