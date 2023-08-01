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
    {value: 'CIBC', viewValue: 'CIBC'},
    {value: 'CITI', viewValue: 'Citi Bank'},
    {value: 'BMO', viewValue: 'Bank of Montreal'}
  ];

  permissions: Permission[] = [
    {value: 'UPLOAD', viewValue: 'Upload'},
    {value: 'READ', viewValue: 'Read'},
    {value: 'DELETE', viewValue: 'Delete'},
    {value: 'TRANSACTION', viewValue: 'Transaction'}
  ];  
}
