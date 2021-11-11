import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './_metronic/layout/layout.component';
import {AgentComponent} from "./components/agent/agent.component";
import {BranchComponent} from "./components/branch/branch.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
          },
          {
            path: 'dashboard',
            loadChildren: () =>
              import('./pages/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
              ),
          },
          {
            path: 'builder',
            loadChildren: () =>
              import('./pages/builder/builder.module').then(
                (m) => m.BuilderModule
              ),
          },
          {
            path: 'crafted/pages/profile',
            loadChildren: () =>
              import('./modules/profile/profile.module').then(
                (m) => m.ProfileModule
              ),
          },
          {
            path: 'crafted/account',
            loadChildren: () =>
              import('./modules/account/account.module').then(
                (m) => m.AccountModule
              ),
          },
          {
            path: 'crafted/pages/wizards',
            loadChildren: () =>
              import('./modules/wizards/wizards.module').then(
                (m) => m.WizardsModule
              ),
          },
          {
            path: 'crafted/widgets',
            loadChildren: () =>
              import('./modules/widgets-examples/widgets-examples.module').then(
                (m) => m.WidgetsExamplesModule
              ),
          },
          {
            path: 'apps/chat',
            loadChildren: () =>
              import('./modules/apps/chat/chat.module').then(
                (m) => m.ChatModule
              ),
          },
          {
            path: 'agent',
            component: AgentComponent
          },
          {
            path: 'branch',
            component: BranchComponent
          }

        ],
      },
    ],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/errors/errors.module').then(
        (m) => m.ErrorsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
