import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Kanji Backend
import { KanjiDataBackendService } from '../backend-service/kanji-data-backend.service';
import { BackendQuizList, BackendQuizListItem } from '../backend-service/backend-model/backend-quiz-list';

// Modal dialogs
import { ShowQuizDataDialogComponent } from './show-quiz-data-dialog/show-quiz-data-dialog.component';
import { JoinGameDialogComponent } from './join-game-dialog/join-game-dialog.component'; 
import { CreateGameDialogComponent } from './create-game-dialog/create-game-dialog.component';

@Component({
  selector: 'app-kanji-quiz',
  templateUrl: './kanji-quiz.component.html',
  styleUrls: ['./kanji-quiz.component.css']
})
export class KanjiQuizComponent implements OnInit {
	
	public kanjiQuizList: BackendQuizListItem[]= []; 

	constructor(private backendService: KanjiDataBackendService, private modalService: NgbModal) { }

	ngOnInit(): void {
		this.backendService.getKanjiQuizList().subscribe(
			data=> this.onKanjiQuizListLoaded(data),
			error=>{}
		);
	}
	
	onKanjiQuizListLoaded( listdata : BackendQuizList ) : void {
		this.kanjiQuizList = listdata.values;
	}
	
	showQuizData(quizname:String) : void {
		const modalref = this.modalService.open( ShowQuizDataDialogComponent, {centered: true, ariaLabelledBy: 'modal-basic-title', size:'xl'});

		modalref.componentInstance.setDialogData(quizname);

		modalref.result.then(
			(result)=> {},
			(reason)=> {}
		);

	}

	onCreateQuizGame() : void {
		// Will let one player create a new game, and register the game, create a temporary user name
		// Will be the one who kicks off the game, if everyone is in
		const modalref = this.modalService.open( CreateGameDialogComponent, {centered: true, ariaLabelledBy: 'modal-basic-title', size:'xl'} );
		
		modalref.componentInstance.setDialogDa();
		
		modalref.result.then(
			(result)=>{},
			(reason)=>{}
		);
		
	}
	
	onJoinQuizGame() : void {
		const modalref = this.modalService.open( JoinGameDialogComponent, {centered: true, ariaLabelledBy: 'modal-basic-title', size:'xl'} );
		
		modalref.componentInstance.setDialogDa();
		
		modalref.result.then(
			(result)=>{},
			(reason)=>{}
		);
		// Let the user input a token, and then create a new username
		// you can join late, but you will not be able to replay the early answers
	}
}
