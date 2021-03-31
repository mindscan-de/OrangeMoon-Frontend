import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

// Backend Model
import { BackendLookupResultName } from '../backend-service/backend-model/backend-lookup-result'

// UI Model
import { UiLookupResultName } from './ui-model/ui-lookup-result-name';

// M2M transforamation from BackendModel to UI-Model
import { M2mKanjiLookupService } from '../m2m/m2m-kanji-lookup.service';

/**
 * This component is only for processing the names-entries and presenting them. 
 */
@Component({
  selector: 'app-kanji-lookup-show-names',
  templateUrl: './kanji-lookup-show-names.component.html',
  styleUrls: ['./kanji-lookup-show-names.component.css']
})
export class KanjiLookupShowNamesComponent implements OnInit {
	
	public uiNames: UiLookupResultName[] = [];

	constructor(private m2m: M2mKanjiLookupService) { }
	
	ngOnInit(): void {
	}
	
	@Input()
	public set names(names: BackendLookupResultName[]) {
		let uiNames: UiLookupResultName[] = new Array<UiLookupResultName>(names.length);
		
		this.uiNames = uiNames;
	}
	
	ngOnChanges(changes:SimpleChanges) : void {
		// ignore yet (changes.names??)
	}

}
