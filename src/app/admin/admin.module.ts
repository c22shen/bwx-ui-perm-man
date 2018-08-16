import { MaterialTableComponent } from './components/material-table/material-table.component';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AdminRoutingModule } from './admin-routing.module';
import { PermissionManagementComponent } from './containers/permission-management/permission-management.component';
import { AdminFilterSelectionComponent } from './components/admin-filter-selection/admin-filter-selection.component';
import { AdminFilterDisplayComponent } from './components/admin-filter-display/admin-filter-display.component';
import { AdminInfoSelectionComponent } from './components/admin-info-selection/admin-info-selection.component';
import { AdminInfoDisplayComponent } from './components/admin-info-display/admin-info-display.component';

import { reducers } from './reducers';

export const ADMMINCOMPONENTS = [
  AdminFilterSelectionComponent,
  AdminFilterDisplayComponent,
  AdminInfoSelectionComponent,
  AdminInfoDisplayComponent,
  MaterialTableComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,

    StoreModule.forFeature('admin', reducers),
  ],
  declarations: [
    PermissionManagementComponent,
    ...ADMMINCOMPONENTS
  ]
})
export class AdminModule { }
