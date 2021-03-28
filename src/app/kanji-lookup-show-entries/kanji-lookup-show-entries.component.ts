import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

import { BackendLookupResultEntry } from '../backend-service/backend-model/backend-lookup-result' 


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
	
	constructor() { }
	
	ngOnInit(): void {
	}
	
	@Input() 
	public set entries(entries: BackendLookupResultEntry[]) {
		this.thisEntries = entries;
		{
			// TODO: we might convert that into a ui-model
			console.log("entries set- printing entries");
			console.log(entries);
		}
	}

	ngOnChanges(changes:SimpleChanges) :void {
		if(changes.entries) {
			// TODO: we might convert that into a ui-model
			console.log("entries changed - printing entries");
			console.log(changes.entries);
		}
	}

}
