import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFilterDisplayComponent } from './admin-filter-display.component';

describe('AdminFilterDisplayComponent', () => {
  let component: AdminFilterDisplayComponent;
  let fixture: ComponentFixture<AdminFilterDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFilterDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFilterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
