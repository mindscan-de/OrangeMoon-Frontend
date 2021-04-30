import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KanjiByRadicalsSelectorComponent } from './kanji-by-radicals-selector/kanji-by-radicals-selector.component';
import { KanjiLookupComponent } from './kanji-lookup/kanji-lookup.component';
import { KanjiTMComponent } from './kanji-tm/kanji-tm.component';
import { KanjiQuizComponent } from './kanji-quiz/kanji-quiz.component';
import { KanjiGameComponent } from './kanji-game/kanji-game.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
	{ path: '', component:MainComponent},
	{ path: 'main', component:MainComponent},
	{ path: 'kanjibyradicals', component:KanjiByRadicalsSelectorComponent},
	{ path: 'kanjilookup', component:KanjiLookupComponent},
	{ path: 'ktm', component:KanjiTMComponent},
	{ path: 'kanjiquiz', component:KanjiQuizComponent },
	{ path: 'kanjigame/:gameroomid', component:KanjiGameComponent,
		children: [
			// entry hall
			{ path: '', component: KanjiGameComponent },
			// playgound etc
			{ path: 'game', component: KanjiGameComponent},
			// TODO hall of fame ?
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
