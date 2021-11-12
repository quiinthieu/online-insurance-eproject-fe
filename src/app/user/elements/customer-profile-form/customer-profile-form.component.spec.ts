import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileFormComponent } from './customer-profile-form.component';

describe('ContactUsFormComponent', () => {
  let component: CustomerProfileFormComponent;
  let fixture: ComponentFixture<CustomerProfileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProfileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
