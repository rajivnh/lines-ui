import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploaderComponent } from './page/file-uploader/file-uploader.component';
import { FileHistoryComponent } from './page/file-history/file-history.component';
import { FileHistorySearchComponent } from './page/file-history-search/file-history-search.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'FileUploader',
        component: FileUploaderComponent
      },
      {
        path: 'FileHistory',
        component: FileHistoryComponent
      },
      {
        path: 'FileHistorySearch',
        component: FileHistorySearchComponent
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
