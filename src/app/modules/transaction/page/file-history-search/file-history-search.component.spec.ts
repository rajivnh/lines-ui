import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileHistorySearchComponent } from './file-history-search.component';

describe('FileHistorySearchComponent', () => {
  let component: FileHistorySearchComponent;
  let fixture: ComponentFixture<FileHistorySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileHistorySearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileHistorySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
