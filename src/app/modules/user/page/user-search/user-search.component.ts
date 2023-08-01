import { Component } from '@angular/core';

interface UserStatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  userStatus: UserStatus[] = [
    {value: 'A', viewValue: 'Active'},
    {value: 'I', viewValue: 'Inactive'}
  ];
}
