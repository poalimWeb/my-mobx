import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {VocabulariesStore} from '../../../stores/vocabularies.store';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowListComponent implements OnInit {

  constructor(public vocabulariesStore: VocabulariesStore) {
  }

  ngOnInit() {
  }

}
