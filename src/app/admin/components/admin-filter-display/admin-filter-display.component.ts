import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from '../../models/filter';

@Component({
  selector: 'app-admin-filter-display',
  templateUrl: './admin-filter-display.component.html',
  styleUrls: ['./admin-filter-display.component.css']
})
export class AdminFilterDisplayComponent implements OnInit {
  @Input() filterValues: Filter[];
  @Output() filterValueSelection = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

}
