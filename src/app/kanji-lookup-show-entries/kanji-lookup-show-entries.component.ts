import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

import { BackendLookupResultEntry } from '../backend-service/backend-model/backend-lookup-result'
import { M2mKanjiLookupService } from '../m2m/m2m-kanji-lookup.service';
 

import { UiLookupResultEntry } from './ui-model/ui-lookup-result-entry';


/**
 * This component is only for processing the lookup-entries and present them.
 */
@Component({
  selector: 'app-kanji-lookup-show-entries',
  templateUrl: './kanji-lookup-show-entries.component.html',
  styleUrls: ['./kanji-lookup-show-entries.component.css']
})
export class KanjiLookupShowEntriesComponent implements OnInit, OnChanges {
	
	public thisEntries: BackendLookupResultEntry[] = [];
	public uiEntries: UiLookupResultEntry[] = [];
	
	constructor(private m2m: M2mKanjiLookupService) { }
	
	ngOnInit(): void {
	}
	
	@Input() 
	public set entries(entries: BackendLookupResultEntry[]) {
		let uiEntries: UiLookupResultEntry[] = new Array<UiLookupResultEntry>(entries.length);
		
		if(entries.length >0) {
			// TODO: we might convert that into a ui-model
			for(let i=0;i<entries.length; i++) {
				uiEntries[i] = this.m2m.convertLookupEntry(entries[i]);
			}
			
			console.log("entries set- printing entries");
			console.log(entries);
		}
		else
		{
			
		}
		this.thisEntries = entries;
		this.uiEntries = uiEntries;
	}

	ngOnChanges(changes:SimpleChanges) :void {
		if(changes.entries) {
			// TODO: we might convert that into a ui-model
			console.log("entries changed - printing entries");
			console.log(changes.entries);
		}
	}

}
