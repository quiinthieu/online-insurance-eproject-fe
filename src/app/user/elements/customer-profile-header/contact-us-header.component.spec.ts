import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileHeaderComponent } from './customer-profile-header.component';

describe('ContactUsHeaderComponent', () => {
  let component: CustomerProfileHeaderComponent;
  let fixture: ComponentFixture<CustomerProfileHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProfileHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
