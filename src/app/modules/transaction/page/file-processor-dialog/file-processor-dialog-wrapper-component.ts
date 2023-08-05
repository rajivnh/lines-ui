import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router, ActivatedRoute } from "@angular/router";
import { FileUploaderComponent } from "../file-uploader/file-uploader.component";
import { FileProcessorDialogComponent } from "./file-processor-dialog.component";

@Component({
  template: `
    <ng-template>
      <router-outlet></router-outlet>
    </ng-template>
    `
})
export class FileProcessorDialogWrapperComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.openDialog();
  }

  private openDialog() {
    const dialog = this.dialog.open(FileProcessorDialogComponent, { disableClose: true });

    dialog.afterClosed().subscribe(result => {
      this.router.navigate(["../"], {
        relativeTo: this.route
      });
    });
  }
}
