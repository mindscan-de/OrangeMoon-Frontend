import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanji-quiz',
  templateUrl: './kanji-quiz.component.html',
  styleUrls: ['./kanji-quiz.component.css']
})
export class KanjiQuizComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
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
