import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NgbDropdownModule,
  NgbProgressbarModule,
  NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { CredentialService } from '../services/credential.service';
import { AdminRoutingModule } from './admin-routing.module';
import { TranslationModule } from './modules/i18n';
import { Routing } from './pages/routing';
import { AsideMenuComponent } from './_metronic/layout/components/aside/aside-menu/aside-menu.component';
import { AsideComponent } from './_metronic/layout/components/aside/aside.component';
import { ContentComponent } from './_metronic/layout/components/content/content.component';
import { FooterComponent } from './_metronic/layout/components/footer/footer.component';
import { HeaderMenuComponent } from './_metronic/layout/components/header/header-menu/header-menu.component';
import { HeaderComponent } from './_metronic/layout/components/header/header.component';
import { PageTitleComponent } from './_metronic/layout/components/header/page-title/page-title.component';
import { ScriptsInitComponent } from './_metronic/layout/components/scripts-init/scripts-init.component';
import { ToolbarComponent } from './_metronic/layout/components/toolbar/toolbar.component';
import { TopbarComponent } from './_metronic/layout/components/topbar/topbar.component';
import { LayoutComponent } from './_metronic/layout/layout.component';
import { DrawersModule, DropdownMenusModule, ExtrasModule, ModalsModule } from './_metronic/partials';
import { AgentComponent } from './components/agent/agent.component';
import { BranchComponent } from './components/branch/branch.component';


@NgModule({
  declarations: [
    LayoutComponent,
    AsideComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ScriptsInitComponent,
    ToolbarComponent,
    AsideMenuComponent,
    TopbarComponent,
    PageTitleComponent,
    HeaderMenuComponent,
    AgentComponent,
    BranchComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TranslationModule,
    InlineSVGModule,
    NgbDropdownModule,
    NgbProgressbarModule,
    ExtrasModule,
    ModalsModule,
    DrawersModule,
    DropdownMenusModule,
    NgbTooltipModule,
    TranslateModule,
  ],
  providers: [
  ],
  exports: [RouterModule],
})
export class AdminModule { }
