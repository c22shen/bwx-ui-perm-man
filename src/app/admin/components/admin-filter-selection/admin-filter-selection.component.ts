import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-filter-selection',
  templateUrl: './admin-filter-selection.component.html',
  styleUrls: ['./admin-filter-selection.component.css']
})
export class AdminFilterSelectionComponent implements OnInit {
  filterSelected = 'Roles';
  constructor() { }

  ngOnInit() {
  }

}
