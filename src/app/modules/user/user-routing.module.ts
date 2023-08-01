import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './page/user-info/user-info.component';
import { ManageUserComponent } from './page/manage-user/manage-user.component';

const routes: Routes = [
  {
    path: 'UserInfo',
    component: UserInfoComponent
  },
  {
    path: 'ManageUser',
    component: ManageUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
