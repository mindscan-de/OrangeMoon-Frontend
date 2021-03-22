import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KanjiByRadicalsSelectorComponent } from './kanji-by-radicals-selector/kanji-by-radicals-selector.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
	{ path: '', component:MainComponent},
	{ path: 'main', component:MainComponent},
	{ path: 'kanjibyradicals', component:KanjiByRadicalsSelectorComponent}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
