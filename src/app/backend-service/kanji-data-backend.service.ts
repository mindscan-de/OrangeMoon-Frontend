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

@Injectable({
  providedIn: 'root'
})
export class KanjiDataBackendService {
	
	private _getKanjiRadicals            = '/OrangeMoon/rest/getKanjiRadicals';
	private _getKanjiRadicalsWithStrokes = '/OrangeMoon/rest/getKanjiRadicalsWithStrokes';
	private _getKanjiBySelectedRadicals  = '/OrangeMoon/rest/getKanjiBySelectedRadicals'; 
	private _getKanjiBySelectedRadicals2 = '/OrangeMoon/rest/getKanjiBySelectedRadicals2';
	private _lookupStrictKanji           = '/OrangeMoon/rest/strictLookupKanji';	
	
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
	
	strictLookupKanji(selectedKanji:string) : Observable<any> {
		let httpParameters = new HttpParams({encoder:new CustomEncoder()});
		
		httpParameters = httpParameters.append("selected",selectedKanji );
		
		return this.httpClient.get<any>(this._lookupStrictKanji, {params: httpParameters})
	}
}
