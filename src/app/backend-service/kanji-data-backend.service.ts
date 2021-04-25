import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { CustomEncoder } from './custom-encoder';

// Import Backend Models
import { BackendKanjiRadicals } from './backend-model/backend-kanji-radicals';
import { BackendKanjiData } from './backend-model/backend-kanji-data';
import { BackendKanjiAndRadicalData } from './backend-model/backend-kanji-and-radical-data';
import { BackendKanjiRadicalsWithStrokes } from './backend-model/backend-kanji-radicals-with-strokes';
import { BackendLookupResult } from './backend-model/backend-lookup-result';
import { BackendQuizList } from './backend-model/backend-quiz-list';
import { BackendQuizData } from './backend-model/backend-quiz-data';

@Injectable({
  providedIn: 'root'
})
export class KanjiDataBackendService {
	
	private _getKanjiRadicals            = '/OrangeMoon/rest/getKanjiRadicals';
	private _getKanjiRadicalsWithStrokes = '/OrangeMoon/rest/getKanjiRadicalsWithStrokes';
	private _getKanjiBySelectedRadicals  = '/OrangeMoon/rest/getKanjiBySelectedRadicals';
	private _getKanjiBySelectedRadicals2 = '/OrangeMoon/rest/getKanjiBySelectedRadicals2';
	private _lookupStrictKanji           = '/OrangeMoon/rest/strictLookupKanji';
	private _getQuizList                 = '/OrangeMoon/rest/getQuizList';
	private _getQuizData                 = '/OrangeMoon/rest/getQuizData';
	
	private _createGameChannel           = '/OrangeMoon/rest/createGameChannel';
	private _joinGameChannel             = '/OrangeMoon/rest/joinGameChannel';
	private _leaveGameChannel            = '/OrangeMoon/rest/leaveGameChannel';
	
	constructor( private httpClient : HttpClient ) { }

	getKanjiRadicals () : Observable<BackendKanjiRadicals> {
		let httpParameters = new HttpParams();

		return this.httpClient.get<BackendKanjiRadicals> (this._getKanjiRadicals, {params:httpParameters} );		
	}
	
	getKanjiRadicalsWithStrokeCount () : Observable<BackendKanjiRadicalsWithStrokes> {
		let httpParameters = new HttpParams();
		
		return this.httpClient.get<BackendKanjiRadicalsWithStrokes> (this._getKanjiRadicalsWithStrokes, {params:httpParameters} );
	}
	
	getKanjiByRadicals(selectedR:Array<String>) : Observable<BackendKanjiData>  {
		let selectionJoined:string = selectedR.join("");
		console.log("Our data: "+ selectionJoined);
		
		let httpParameters = new HttpParams({encoder:new CustomEncoder()});
		httpParameters = httpParameters.append("selected",selectionJoined );
		
		console.log(httpParameters.toString());
		
		return this.httpClient.get<BackendKanjiData>(this._getKanjiBySelectedRadicals, {params:httpParameters});
	}
	
	getKanjiAndRadicalsByRadicals(selectedR:Array<String>) : Observable<BackendKanjiAndRadicalData>  {
		let selectionJoined:string = selectedR.join("");
		console.log("Our data: "+ selectionJoined);
		
		let httpParameters = new HttpParams({encoder:new CustomEncoder()});
		httpParameters = httpParameters.append("selected",selectionJoined );
		
		console.log(httpParameters.toString());
		
		return this.httpClient.get<BackendKanjiAndRadicalData>(this._getKanjiBySelectedRadicals2, {params:httpParameters});
	}
	
	strictLookupKanji(selectedKanji:string) : Observable<BackendLookupResult> {
		let httpParameters = new HttpParams({encoder:new CustomEncoder()});
		
		httpParameters = httpParameters.append("selected",selectedKanji );
		
		return this.httpClient.get<BackendLookupResult>(this._lookupStrictKanji, {params: httpParameters});
	}
	
	getKanjiQuizList(): Observable<BackendQuizList> {
		let httpParameters = new HttpParams({encoder:new CustomEncoder()});
		
		return this.httpClient.get<BackendQuizList>(this._getQuizList, {params: httpParameters});
	}
	
	getKanjiQuizData(quizname:string): Observable<BackendQuizData> {
		let httpParameters = new HttpParams({encoder:new CustomEncoder()});
		
		httpParameters = httpParameters.append('quizname', quizname);
		
		return this.httpClient.get<BackendQuizData>(this._getQuizData, {params: httpParameters});
	}
	
	// TODO: createGameChannel -> should return data of channel and an authentication token
	createGameChannel(playerName: string, quizRoomPassword: string) : Observable<any> {
		let formdata = new FormData();
		
		formdata.append('playerName', playerName);
		formdata.append('quizRoomPassword', quizRoomPassword);
		
		return this.httpClient.post<any>(this._createGameChannel, formdata);
	}
	
	// TODO: joinGameChannel -> should return data of channel and an authentication token
	joinGameChannel(playerName: string, quizRoomId: string, quizRoomPassword:string): Observable<any> {
		let formdata = new FormData();
		
		formdata.append('playerName', playerName);
		formdata.append('quizRoomId', quizRoomId);
		formdata.append('quizRoomPassword', quizRoomPassword);
		
		return this.httpClient.post<any>(this._joinGameChannel, formdata);
	}
	
	// TODO: leaveGameChannel -> should clear the authentication token?
	leaveGameChannel(): Observable<any> {
		let formdata = new FormData();
		
		// TODO Playertoken,
		
		return this.httpClient.post<any>(this._leaveGameChannel, formdata);		
	}
	
	// how to persist the user data locally?
	
}
