import { Component } from '@angular/core';

export interface UserInfo {
  id: string;
  name: string;
  email: string;
  client: string;
  date: string;
  permissions: string;
  status: string;
}

const USER_DATA: UserInfo[] = [
  {id: '4F0DF86F78235D440437B392FEC61EE6', name: 'John Sena', email: 'john.sena@cibc.com', client: 'CIBC', date: 'April 17, 2023 18:46:10', permissions: '["UPLOAD", "READ", "DELETE", "TRANSACTION"]', status: 'A'},
  {id: '6DC1476BF1ACCDA3E54D083512B6B541', name: 'Jennifer Lawrence', email: 'jennifer.lawrence@bmo.com', client: 'Bank of Montreal', date: 'July 29, 2023 22:15:28', permissions: '["UPLOAD", "READ", "DELETE", "TRANSACTION"]', status: 'A'}
];

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent {
  displayedColumns: string[] = ['name', 'email', 'client', 'date', 'status'];
  dataSource = USER_DATA;
}
