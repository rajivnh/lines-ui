import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SlideInOutAnimation } from 'src/app/core/constants/slide-in-out-animation';


@Component({
  selector: 'app-file-processor-dialog',
  templateUrl: './file-processor-dialog.component.html',
  styleUrls: ['./file-processor-dialog.component.css'],
  animations: [ SlideInOutAnimation ]
})
export class FileProcessorDialogComponent {
  isContinue: boolean = true;

  isMessageState: string = "out";
  isValidationState: string = "out";
  isProcessState: string = "out";
  isProcessedState: string = "out";
  isProcessingState: string = "out";

  message: string = '';

  constructor(public dialogRef: MatDialogRef<FileProcessorDialogComponent>) {}

  onContinueClick() {
    this.isContinue = false;
    this.isValidationState = "in";

    this.message = "File is getting validated for acceptance. <br>Please wait...";
    this.isMessageState = "in";
    
    setTimeout(() => {
      this.isMessageState = "out";
      this.isValidationState = "out";
      this.isProcessingState = "in";

      this.message = "File validation completed, transactions getting committed. <br>Please wait...";
     
      setTimeout(() => {
        this.isMessageState = "in";
      }, 300);

      setTimeout(() => {
        this.isMessageState = "out";
        this.isProcessingState = "out";
        this.isProcessedState = "in";

        this.message = "File has been processed successfully.";

        setTimeout(() => {
          this.isMessageState = "in";
        }, 300);
      }, 9000);
    }, 7000)
  }
}
