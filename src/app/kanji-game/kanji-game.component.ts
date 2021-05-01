import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';

import { KanjiDataBackendService } from '../backend-service/kanji-data-backend.service';

import { BackendQuizList, BackendQuizListItem } from '../backend-service/backend-model/backend-quiz-list';

@Component({
  selector: 'app-kanji-game',
  templateUrl: './kanji-game.component.html',
  styleUrls: ['./kanji-game.component.css']
})
export class KanjiGameComponent implements OnInit {
	
	public kanjiQuizList: BackendQuizListItem[]= [];
	
	public selectedGame: string = "";
	public selectedQuestionCount: number = 10;

	constructor(private route: ActivatedRoute, private backendService: KanjiDataBackendService) { 
		this.route.params.subscribe(params => console.log(params));
		
		backendService.getKanjiQuizList().subscribe(
			data => this.onKanjiQuizdataListLoaded(data),
			error => this.onKanjiQuizdataListFailed(error)
		);
	}
	
	onKanjiQuizdataListLoaded(listdata : BackendQuizList): void {
		this.kanjiQuizList = listdata.values;
	}
	
	onKanjiQuizdataListFailed(error:any) : void {
		console.log(error);
	}

	ngOnInit(): void {
	}

}
