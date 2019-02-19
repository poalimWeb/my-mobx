import {Vocabulary} from '../models/vocabulary';
import {Injectable} from '@angular/core';
import {observable} from 'mobx-angular';

@Injectable()
export class VocabulariesStore {

  @observable vocabularies: Vocabulary[];

  constructor() {
    this.vocabularies = [new Vocabulary('first'), new Vocabulary('second')];
  }

  /* @action */
  addNewWord(name: string, example?: string) {
    this.vocabularies.push(new Vocabulary(name, example));
  }


  setShowed(index) {
    this.vocabularies[index].increaseShow();
  }
}
