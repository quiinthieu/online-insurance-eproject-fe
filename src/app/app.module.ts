import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InlineSVGModule } from 'ng-inline-svg';
import { ClipboardModule } from 'ngx-clipboard';
import { environment } from 'src/environments/environment';
import { AuthService } from './admin/modules/auth';
import { FakeAPIService } from './admin/_fake';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CredentialService } from './services/credential.service';
import { HttpObservablesService } from './services/http-method/http-observables.service';
import { InsuranceTypeService } from "./services/insurance-type.service";
import { MessageService } from "./services/message.service";
import { PolicyService } from './services/policy.service';
import { SubscriptionService } from "./services/subscription.service";
import { PreloaderComponent } from './user/elements/preloader/preloader.component';
import { ToastModule } from 'primeng/toast';
import { MessageService as MessageToastService } from 'primeng/api';

function appInitializer(authService: AuthService) {
  return () => {
    return new Promise((resolve) => {
      authService.getUserByToken().subscribe().add(resolve);
    });
  };
}

@NgModule({
  declarations: [AppComponent, PreloaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    ClipboardModule,
    // #fake-start#
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
        passThruUnknownUrl: true,
        dataEncapsulation: false,
      })
      : [],
    // #fake-end#
    InlineSVGModule.forRoot(),
    NgbModule,
    ToastModule
  ],
  providers: [
    HttpObservablesService,
    InsuranceTypeService,
    CredentialService,
    MessageService,
    MessageToastService,
    PolicyService,
    SubscriptionService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [AuthService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
