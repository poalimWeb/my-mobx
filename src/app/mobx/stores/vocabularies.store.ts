import {Vocabulary} from '../models/vocabulary';
import {Injectable} from '@angular/core';
import {action, computed, observable} from 'mobx-angular';
import {Filters} from "../models/filrers";

@Injectable()
export class VocabulariesStore {

  @observable vocabularies: Vocabulary[] = [];

  constructor(private filters: Filters) {
  }

  @action addNewWord(name: string, example?: string) {
    this.vocabularies.push(new Vocabulary(name, example));
  }

  @action setShowed(vocabulary: Vocabulary) {
    vocabulary.increaseShow();
  }



  @computed get filteredVocabularies() {
    console.log('IN filteredVocabularies filters', this.filters);
    // return this.vocabularies.filter((vocabulary: Vocabulary) => {
    //   return vocabulary.countShowed == 1;
    // });
    return this.filters.countShowed === 0 ?
      this.vocabularies :
      this.vocabularies.filter((vocabulary: Vocabulary) => {
           return vocabulary.countShowed == this.filters.countShowed;
      });
  }

}
