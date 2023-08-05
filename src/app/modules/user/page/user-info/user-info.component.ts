import { Component } from '@angular/core';

interface Client {
  value: string;
  viewValue: string;
}

interface Permission {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  clients: Client[] = [
    {value: 'IT_SUPPORT', viewValue: 'IT Support'},
    {value: 'CIBC', viewValue: 'CIBC'},
    {value: 'CITI', viewValue: 'Citi Bank'},
    {value: 'BMO', viewValue: 'Bank of Montreal'}
  ];

  permissions: Permission[] = [
    {value: 'UPLOAD', viewValue: 'Upload'},
    {value: 'DELETE', viewValue: 'Delete'},
    {value: 'ADD_COMMENT', viewValue: 'Add Comment'},
    {value: 'READ_COMMENT', viewValue: 'Read Comment'}
  ];  
}
