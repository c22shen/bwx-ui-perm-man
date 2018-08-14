import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInfoSelectionComponent } from './admin-info-selection.component';

describe('AdminInfoSelectionComponent', () => {
  let component: AdminInfoSelectionComponent;
  let fixture: ComponentFixture<AdminInfoSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInfoSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInfoSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
