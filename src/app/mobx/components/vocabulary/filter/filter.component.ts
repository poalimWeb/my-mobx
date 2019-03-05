import { Component, OnInit } from '@angular/core';
import {Filters} from "../../../models/filrers";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  constructor(private filters: Filters) { }

  get filterCount(): number {
    return this.filters.countShowed;
  }

  set filterCount(filterCount: number) {
    // console.log('IN set filterCount filterCount', filterCount);
    // console.log('IN set filterCount filters', this.filters);
    this.filters.countShowed = filterCount;
  }


  ngOnInit() {
  }

}
