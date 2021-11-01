import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './admin/modules/auth/services/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./admin/modules/auth/auth.module').then((m) => m.AuthModule),
  },
  // {
  //   path: 'error',
  //   loadChildren: () =>
  //     import('./admin/modules/errors/errors.module').then(
  //       (m) => m.ErrorsModule
  //     ),
  // },
  // {
  //   path: 'admin',
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./admin/_metronic/layout/layout.module').then(
  //       (m) => m.LayoutModule
  //     ),
  // },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  {
    path: '',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },

  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
