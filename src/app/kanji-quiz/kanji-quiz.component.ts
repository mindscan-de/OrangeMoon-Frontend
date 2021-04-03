import { Component, OnInit } from '@angular/core';

import {KanjiDataBackendService } from '../backend-service/kanji-data-backend.service';


import { BackendQuizList, BackendQuizListItem } from '../backend-service/backend-model/backend-quiz-list';

@Component({
  selector: 'app-kanji-quiz',
  templateUrl: './kanji-quiz.component.html',
  styleUrls: ['./kanji-quiz.component.css']
})
export class KanjiQuizComponent implements OnInit {
	
	public kanjiQuizList: BackendQuizListItem[]= []; 

	constructor(private backendService: KanjiDataBackendService) { }

	ngOnInit(): void {
		this.backendService.getKanjiQuizList().subscribe(
			data=> this.onKanjiQuizListLoaded(data),
			error=>{}
		);
	}
	
	onKanjiQuizListLoaded( listdata : BackendQuizList ) : void {
		this.kanjiQuizList = listdata.values;
	}

	onViewQuizLists() : void {
		// will show the list of quizes
		// will allow to show the quiz data
		
		// will allow private quiz games and continue 
		// * maybe use createQuizGame or JoinQuizGame 
	}
	
	onCreateQuizGame() : void {
		// Will let one player create a new game, and register the game, create a temporary user name
		// Will be the one who kicks off the game, if everyone is in
	}
	
	onJoinQuizGame() : void {
		// Let the user input a token, and then create a new username
		// you can join late, but you will not be able to replay the early answers
	}
}
