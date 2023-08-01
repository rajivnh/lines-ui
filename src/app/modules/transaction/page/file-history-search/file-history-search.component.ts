import { Component } from '@angular/core';

interface FileStatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-file-history-search',
  templateUrl: './file-history-search.component.html',
  styleUrls: ['./file-history-search.component.css']
})
export class FileHistorySearchComponent {
  fileStatus: FileStatus[] = [
    {value: 'S', viewValue: 'Processed'},
    {value: 'P', viewValue: 'Pending'},
    {value: 'F', viewValue: 'Failed'}
  ];
}
