import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AppComponent } from './containers/app/app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
// import { SidenavComponent } from './components/sidenav/sidenav.component';


export const CORECOMPONENTS = [
  AppComponent,
  LayoutComponent,
  ToolbarComponent,
  // SidenavComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: CORECOMPONENTS,
  exports: CORECOMPONENTS
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [], // services
    };
  }
}
