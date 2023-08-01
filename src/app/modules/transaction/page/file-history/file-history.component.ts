import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileProcessorDialogComponent } from '../file-processor-dialog/file-processor-dialog.component';
import { ProfileService } from 'src/app/core/service/profile.service';

export interface FileElement {
  name: string;
  date: string;
  status: string;
}

const ELEMENT_DATA: FileElement[] = [
  {name: 'cibc_utp_ipm_lenders_202329071143.xls', date: 'July 29, 2023 18:46:10', status: 'P'},
  {name: 'cibc_utp_ipm_lenders_202329061143.xls', date: 'July 21, 2023 22:16:14', status: 'P'},
  {name: 'cibc_utp_ipm_lenders_202329060143.xls', date: 'July 17, 2023 32:46:17', status: 'F'},
  {name: 'cibc_utp_ipm_lenders_202329057143.xls', date: 'July 12, 2023 51:46:10', status: 'S'},
  {name: 'cibc_utp_ipm_lenders_202329040143.xls', date: 'July 06, 2023 43:38:12', status: 'F'},
  {name: 'cibc_utp_ipm_lenders_202329028143.xls', date: 'June 29, 2023 16:46:10', status: 'S'},
  {name: 'cibc_utp_ipm_lenders_202329022143.xls', date: 'June 25, 2023 17:51:13', status: 'S'},
  {name: 'cibc_utp_ipm_lenders_202329071143.xls', date: 'July 29, 2023 18:46:10', status: 'S'},
  {name: 'cibc_utp_ipm_lenders_202329061143.xls', date: 'July 21, 2023 22:16:14', status: 'S'},
  {name: 'cibc_utp_ipm_lenders_202329060143.xls', date: 'July 17, 2023 32:46:17', status: 'F'}
];

@Component({
  selector: 'app-file-history',
  templateUrl: './file-history.component.html',
  styleUrls: ['./file-history.component.css']
})
export class FileHistoryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'date', 'status'];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialog: MatDialog,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.profileService.profile().subscribe();
  }

  openFileProcessorDialog() {
    this.dialog.open(FileProcessorDialogComponent, {
      restoreFocus: false
    });
  }
}
