import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';

import { KanjiDataBackendService } from '../backend-service/kanji-data-backend.service';
import { UserGameDataService } from '../backend-service/user-game-data.service';

import { BackendQuizList, BackendQuizListItem } from '../backend-service/backend-model/backend-quiz-list';

import { BackendGameChannelEntry } from '../backend-service/backend-model/backend-game-channel-entry';

@Component({
  selector: 'app-kanji-game',
  templateUrl: './kanji-game.component.html',
  styleUrls: ['./kanji-game.component.css']
})
export class KanjiGameComponent implements OnInit {
	
	public kanjiQuizList: BackendQuizListItem[]= [];
	public userdata: BackendGameChannelEntry = new BackendGameChannelEntry();
	
	public selectedGame: string = "";
	public selectedQuestionCount: number = 10;

	constructor(private route: ActivatedRoute, private backendService: KanjiDataBackendService, private usergamedataService: UserGameDataService) { 
		this.route.params.subscribe(params => console.log(params));
		
		this.backendService.getKanjiQuizList().subscribe(
			data => this.onKanjiQuizdataListLoaded(data),
			error => this.onKanjiQuizdataListFailed(error)
		);
	}

	ngOnInit(): void {
		let userdata = this.usergamedataService.getGameChannelPlayerData()
		if(userdata != null) {
			this.userdata = userdata;
		}
	}
	
	onKanjiQuizdataListLoaded(listdata : BackendQuizList): void {
		this.kanjiQuizList = listdata.values;
	}
	
	onKanjiQuizdataListFailed(error:any) : void {
		console.log(error);
	}
	
	onStartPressed() : void {
		console.log("We now start the game using the Websocket ....")
		// Now we do the hard stuff...
	}

}
