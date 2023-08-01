import { Component, HostListener } from '@angular/core';
import { GlobalConstants } from '../../../core/constants/global-constants';
import { SpinnerService } from 'src/app/core/service/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  top!: string;
  left!: string;

  constructor(private readonly spinner: SpinnerService) {}

  public get isLoading() {
    return this.spinner.isLoading;
  }

  @HostListener('window:load',['$event']) onPageLoad(event: Event) {
    this.top = ((window.innerHeight/2)-80) + 'px';
    this.left = ((window.innerWidth/2)-40) + 'px';
  }
}
