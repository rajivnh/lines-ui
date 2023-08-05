import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../modules/shared/page/header/header.component';
import { MaterialModule } from './material/material.module';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { FileProcessorDialogWrapperComponent } from '../modules/transaction/page/file-processor-dialog/file-processor-dialog-wrapper-component';
import { AutosizeModule} from 'ngx-autosize';

@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    FileProcessorDialogWrapperComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    AutosizeModule 
  ],
  exports: [
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AutosizeModule,
    SpinnerComponent,
    FileProcessorDialogWrapperComponent
  ]
})
export class SharedModule { }
