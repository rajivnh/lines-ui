import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileProcessorDialogComponent } from './file-processor-dialog.component';

describe('FileProcessorDialogComponent', () => {
  let component: FileProcessorDialogComponent;
  let fixture: ComponentFixture<FileProcessorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileProcessorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileProcessorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
