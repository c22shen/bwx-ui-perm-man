
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MaterialContainerComponent } from './material-container.component';

describe('MaterialContainerComponent', () => {
  let component: MaterialContainerComponent;
  let fixture: ComponentFixture<MaterialContainerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [MaterialContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
