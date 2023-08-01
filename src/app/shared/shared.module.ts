import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../modules/shared/page/header/header.component';
import { MaterialModule } from './material/material.module';
import { SpinnerComponent } from './component/spinner/spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule 
  ],
  exports: [
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SpinnerComponent 
  ]
})
export class SharedModule { }
