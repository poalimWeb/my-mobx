import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MobxRoutingModule} from './mobx-routing.module';
import {FormsModule} from '@angular/forms';
import {MobxAngularModule} from 'mobx-angular';
import {VocabularyComponent} from './components/vocabulary/vocabulary.component';
import {ShowListComponent} from './components/vocabulary/show-list/show-list.component';
import {VocabulariesStore} from './stores/vocabularies.store';
import { ManageComponent } from './components/vocabulary/manage/manage.component';
import { FilterComponent } from './components/vocabulary/filter/filter.component';
import {Filters} from "./models/filrers";

@NgModule({
  declarations: [VocabularyComponent, ShowListComponent, ManageComponent, FilterComponent],
  imports: [
    CommonModule,
    MobxRoutingModule,
    FormsModule,
    MobxAngularModule,
  ],
  providers: [VocabulariesStore, Filters
  ]
})
export class MobxModule {
}
