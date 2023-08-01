import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { AdminDashboardLayoutComponent } from './layout/admin/admin-dashboard-layout/admin-dashboard-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Auth/Login',
    pathMatch: 'full'
  },
  {
    path: 'Auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'Transaction',
    loadChildren: () =>
      import('./modules/transaction/transaction.module').then(m => m.TransactionModule)
  },
  {
    path: 'My/Dashboard',
    component: DashboardLayoutComponent
  },
  {
    path: 'Admin/Dashboard',
    component: AdminDashboardLayoutComponent
  },
  {
    path: 'User',
    loadChildren: () =>
      import('./modules/user/user.module').then(m => m.UserModule)
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
