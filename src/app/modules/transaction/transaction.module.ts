import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { FileUploaderComponent } from './page/file-uploader/file-uploader.component';
import { FileHistoryComponent } from './page/file-history/file-history.component';
import { FileHistorySearchComponent } from './page/file-history-search/file-history-search.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DashboardLayoutComponent } from 'src/app/layout/dashboard-layout/dashboard-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FileProcessorDialogComponent } from './page/file-processor-dialog/file-processor-dialog.component';
import { FileDetailsComponent } from './page/file-details/file-details.component';

@NgModule({
  declarations: [
    FileUploaderComponent,
    FileHistoryComponent,
    FileHistorySearchComponent,
    DashboardLayoutComponent,
    FileProcessorDialogComponent,
    FileDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TransactionRoutingModule,
    SharedModule
  ]
})
export class TransactionModule { }
