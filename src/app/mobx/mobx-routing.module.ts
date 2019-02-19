import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VocabularyComponent} from './components/vocabulary/vocabulary.component';

const routes: Routes = [
   { path: 'vocabulary', component: VocabularyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobxRoutingModule { }
