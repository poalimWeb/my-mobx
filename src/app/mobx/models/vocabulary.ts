import {observable} from "mobx-angular";

export class Vocabulary {
  name: string;
  example: string;
  @observable
  private _countShowed = 0;

  constructor(name: string, example?: string) {
    this.name = name;
    this.example = example;
  }

  get countShowed() {
    return this._countShowed;
  }

  increaseShow() {
    this._countShowed++;
  }
}
