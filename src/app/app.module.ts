import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { KanjiByRadicalsSelectorComponent } from './kanji-by-radicals-selector/kanji-by-radicals-selector.component';
import { MainComponent } from './main/main.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { KanjiLookupComponent } from './kanji-lookup/kanji-lookup.component';
import { KanjiLookupShowCharsComponent } from './kanji-lookup-show-chars/kanji-lookup-show-chars.component';
import { KanjiLookupShowEntriesComponent } from './kanji-lookup-show-entries/kanji-lookup-show-entries.component';
import { KanjiLookupShowNamesComponent } from './kanji-lookup-show-names/kanji-lookup-show-names.component';
import { KanjiTMComponent } from './kanji-tm/kanji-tm.component';
import { KanjiQuizComponent } from './kanji-quiz/kanji-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    KanjiByRadicalsSelectorComponent,
    MainComponent,
    MainNavigationComponent,
    KanjiLookupComponent,
    KanjiLookupShowCharsComponent,
    KanjiLookupShowEntriesComponent,
    KanjiLookupShowNamesComponent,
    KanjiTMComponent,
    KanjiQuizComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
