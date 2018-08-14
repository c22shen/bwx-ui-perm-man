import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFilterSelectionComponent } from './admin-filter-selection.component';

describe('AdminFilterSelectionComponent', () => {
  let component: AdminFilterSelectionComponent;
  let fixture: ComponentFixture<AdminFilterSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFilterSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFilterSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
