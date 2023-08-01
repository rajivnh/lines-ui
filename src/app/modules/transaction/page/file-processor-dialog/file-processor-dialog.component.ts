import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-file-processor-dialog',
  templateUrl: './file-processor-dialog.component.html',
  styleUrls: ['./file-processor-dialog.component.css']
})
export class FileProcessorDialogComponent {
  isValidate: boolean = false;
  isContinue: boolean = true;
  isValidationDone: boolean = false;
  isProcessing: boolean = false;
  isProcessDone: boolean = false;
  isProcessed: boolean = false;

  message: string = '';

  constructor(public dialogRef: MatDialogRef<FileProcessorDialogComponent>) {}

  onContinueClick() {
    this.isContinue = false;
    this.isValidate = true;

    this.message = "File is getting validated for acceptance. Please wait...";

    setTimeout(() => {
      this.isValidationDone = true;
      this.isValidate = false;
      this.isProcessing = true;

      this.message = "File validation completed, transactions getting committed. Please wait...";

      setTimeout(() => {
        this.isProcessing = false;
        this.isProcessDone = true;
        this.isProcessed = true;

        this.message = "File has been processed successfully.";
      }, 9000);
    }, 7000)
  }
}
