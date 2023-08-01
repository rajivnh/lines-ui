import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AdminDashboardLayoutComponent } from 'src/app/layout/admin/admin-dashboard-layout/admin-dashboard-layout.component';
import { ManageUserComponent } from './page/manage-user/manage-user.component';
import { UserInfoComponent } from './page/user-info/user-info.component';
import { UserSearchComponent } from './page/user-search/user-search.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AdminDashboardLayoutComponent,
    ManageUserComponent,
    UserInfoComponent,
    UserSearchComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ]
})
export class UserModule { }
