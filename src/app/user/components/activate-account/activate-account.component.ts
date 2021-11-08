import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActivateAccountComponent implements OnInit {

  isDisabled = true;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // let query = params['query'];
      // if (query === 'a') {
      //   this.router.navigate([''])
      // }
    });
  }

  showResponse(event) {
    if (event) {
      this.isDisabled = false;
    }
  }

  onResend() {
    console.log("a")
    this.isDisabled = true;
    window.grecaptcha.reset()
  }

}
