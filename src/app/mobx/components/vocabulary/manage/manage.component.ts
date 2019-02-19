import { Component, OnInit } from '@angular/core';
import {VocabulariesStore} from '../../../stores/vocabularies.store';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  constructor(private vocabulariesStore: VocabulariesStore) { }

  ngOnInit() {
  }

  addNewWord(name: string, example: string) {
    if (name) {
      this.vocabulariesStore.addNewWord(name, example);
    }
    else {
      alert('Name is empty !');
    }
  }
}
