import { Injectable } from '@angular/core';


// import backend models
import { BackendLookupResultEntry } from '../backend-service/backend-model/backend-lookup-result';

// import ui-models
import { UiLookupResultEntry } from  '../kanji-lookup-show-entries/ui-model/ui-lookup-result-entry';

@Injectable({
  providedIn: 'root'
})
export class M2mKanjiLookupService {

	constructor() { }

	convertLookupEntry( entry: BackendLookupResultEntry ): UiLookupResultEntry {
		
		let uiElement: UiLookupResultEntry = new UiLookupResultEntry(entry.idseq);
		
		// Process the kanji and Kana - is complicated
		if( entry.kanji.length > 0 && entry.kana.length > 0) {
			// TODO: copy main kanji at position 0
			uiElement.setMainKanjiData(entry.kanji[0].text, entry.kana[0].text);
		}
		else
		{
			// set Entry to empty -> will hopfully not show up.  			
		}
		
		// process the senses
		for( let i = 0; i< entry.senses.length;i++ ) {
			let currentSense = entry.senses[i];
			
			let posArr = new Array<String>();
			
			if(currentSense.pos) {
				for(let j=0; j<currentSense.pos.length;j++) {
					posArr.push(currentSense.pos[j])
				}
			}
			
			let translations = new Array<String>();
			for(let j=0; j<currentSense.SenseGloss.length;j++) {
				
				let translation = currentSense.SenseGloss[j].text;
				if(currentSense.stagr) {
					translation = currentSense.stagr[0] + " (esp. when) " + translation 
				}
				translations.push(translation);
			}
			
			uiElement.addSense(posArr.join("; "), translations.join("; ") );
		}
		
		return uiElement;
	} 
}
