import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { CustomEncoder } from './custom-encoder';

// Import Backend Models
import { BackendKanjiRadicals } from './backend-model/backend-kanji-radicals';
import { BackendKanjiData } from './backend-model/backend-kanji-data';
import { BackendKanjiAndRadicalData } from './backend-model/backend-kanji-and-radical-data';

@Injectable({
  providedIn: 'root'
})
export class KanjiDataBackendService {
	
	private _getKanjiRadicals           = '/OrangeMoon/rest/getKanjiRadicals'
	private _getKanjiBySelectedRadicals = '/OrangeMoon/rest/getKanjiBySelectedRadicals' 
	private _getKanjiBySelectedRadicals2 = '/OrangeMoon/rest/getKanjiBySelectedRadicals2'
	
	constructor( private httpClient : HttpClient ) { }

	getKanjiRadicals () : Observable<BackendKanjiRadicals> {
		let httpParameters = new HttpParams();

		return this.httpClient.get<BackendKanjiRadicals> (this._getKanjiRadicals, {params:httpParameters} );		
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
	
}
