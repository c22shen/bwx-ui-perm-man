import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../node_modules/@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { AppComponent } from './containers/app/app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
// import { SidenavComponent } from './components/sidenav/sidenav.component';


export const COMPONENTS = [
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
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [], // services
    };
  }
}
