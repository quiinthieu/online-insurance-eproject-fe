import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/entities/customer.entity';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
    selector: 'customer-profile-form',
    templateUrl: './customer-profile-form.component.html',
    styleUrls: ['./customer-profile-form.component.css']
})
export class CustomerProfileFormComponent implements OnInit {

  updateProfile: FormGroup;
  customer : Customer;
  customerId: number;
  constructor(
    private customerService : CustomerService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }
  ngOnInit(): void {
    this.customerId =0;
    this.customer = new Customer();
    this.loadProfile();
    this.updateProfile = this.formBuilder.group({
        name: '',
        birthday: '',
        gender: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        occupation: '',
        credentialId: '',
        citizenId: ''
      });
  }

  loadProfile() {
    const credential = JSON.parse(localStorage.getItem("credential"));
    console.log("Credential id: "+credential.id);
    this.customerService.detailsbycredentialid(credential.id).then(
      res => {
        console.log(res);
        this.customer = res;
        console.log(this.customer);
        this.updateProfile = this.formBuilder.group({
          name: this.customer.name,
          birthday: this.customer.birthday,
          gender: this.customer.gender,
          street: this.customer.street,
          city: this.customer.city,
          state: this.customer.state,
          zipCode: this.customer.zipCode,
          occupation: this.customer.occupation,
          credentialId: this.customer.credentialId,
          citizenId: this.customer.citizenId
        });
        this.customerId = res.id;
        this.toastr.success("Welcome back");
      },
      error => {
        console.log(error);
      }
    );


  }

  saveProfile() {
    let customerUpdate : Customer = this.updateProfile.value;
    this.customerService.updateProfile(this.customerId,customerUpdate).then(
        res => {
            this.toastr.success("Succeed")
        },
        error => {
            console.log(error);
            this.toastr.error("Failed")
        }
    );
  }
    
}
