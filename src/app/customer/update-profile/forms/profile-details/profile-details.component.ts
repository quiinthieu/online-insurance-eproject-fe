import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Customer } from 'src/app/entities/customer.entity';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
})
export class ProfileDetailsComponent implements OnInit {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];

  updateProfile: FormGroup;
  customer : Customer;
  customerId: number;

  constructor(private cdr: ChangeDetectorRef,
    private customerService : CustomerService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private datePipe: DatePipe
    ) {
    const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);
  }

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

  saveSettings() {
    this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);
    let customerUpdate : Customer = this.updateProfile.value;
    this.customerService.updateProfile(this.customerId,customerUpdate).then(
        res => {
            this.toastr.success("Succeed")
            this.loadProfile();
        },
        error => {
            console.log(error);
            this.toastr.error("Failed")
        }
    );
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
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
          birthday: this.datePipe.transform(this.customer.birthday,'dd/MM/yyyy'),
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
      },
      error => {
        console.log(error);
      }
    );
  }
}
