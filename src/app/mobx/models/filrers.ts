import {Injectable} from "@angular/core";
import {observable} from "mobx-angular";

@Injectable()
export class Filters {
  @observable
  public countShowed: number;

  constructor() {
    this.countShowed = 0;
  }

}
