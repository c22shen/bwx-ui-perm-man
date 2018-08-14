import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { PermissionManagementComponent } from './containers/permission-management/permission-management.component';

// export const COMPONENTS = [
//   AdminFilterSelectionComponent,
//   AdminFilterValuesComponent,
//   AdminInfoSelectionComponent,
//   AdminInfoValuesComponent
// ];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule
  ],
  declarations: [PermissionManagementComponent]
})
export class AdminModule { }
