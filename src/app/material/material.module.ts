import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTabsModule,
    FlexLayoutModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTabsModule,
    FlexLayoutModule

  ]
})
export class MaterialModule { }
