import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from '../../models/filter';

@Component({
  selector: 'app-admin-filter-selection',
  templateUrl: './admin-filter-selection.component.html',
  styleUrls: ['./admin-filter-selection.component.css']
})
export class AdminFilterSelectionComponent implements OnInit {
  @Output() filterSelection = new EventEmitter<Filter>();
  filterSelected = 'ROLES';
  filterValues = [
    {id: 'ROLES', label: 'Roles'},
    {id: 'USERS', label: 'Users'},
    {id: 'PERMISSION', label: 'Permissions'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
