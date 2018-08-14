import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInfoDisplayComponent } from './admin-info-display.component';

describe('AdminInfoDisplayComponent', () => {
  let component: AdminInfoDisplayComponent;
  let fixture: ComponentFixture<AdminInfoDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInfoDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInfoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
