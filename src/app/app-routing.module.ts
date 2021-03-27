import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KanjiByRadicalsSelectorComponent } from './kanji-by-radicals-selector/kanji-by-radicals-selector.component';
import { KanjiLookupComponent } from './kanji-lookup/kanji-lookup.component'
import { MainComponent } from './main/main.component';


const routes: Routes = [
	{ path: '', component:MainComponent},
	{ path: 'main', component:MainComponent},
	{ path: 'kanjibyradicals', component:KanjiByRadicalsSelectorComponent},
	{ path: 'kanjilookup', component:KanjiLookupComponent}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
