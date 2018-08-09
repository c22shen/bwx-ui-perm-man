import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromGroup from '../group.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('group', fromGroup.reducer)
  ],
  declarations: []
})
export class PermissionManagementModule { }
