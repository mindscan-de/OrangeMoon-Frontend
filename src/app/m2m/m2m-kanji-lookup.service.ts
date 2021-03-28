import { Injectable } from '@angular/core';


// import backend models
import { BackendLookupResultEntry, BackendLookupResultChar } from '../backend-service/backend-model/backend-lookup-result';


// import ui-models
import { UiLookupResultEntry } from  '../kanji-lookup-show-entries/ui-model/ui-lookup-result-entry';
import { UiLookupResultChar } from '../kanji-lookup-show-chars/ui-model/ui-lookup-result-char';

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
			
			if( entry.kanji.length == 1 && entry.kana.length > 1) {
				for(let j = 1; j<entry.kana.length ; j++) {
					uiElement.addOtherForm( entry.kana[j].text );
				}
			} else {
				for(let j = 1; j<entry.kanji.length ; j++) {
					
					let text = entry.kanji[j].text;
					
					if(entry.kanji[j].info) {
						let infoArr: String[] = new Array<String>();
						for(let l = 0;l<entry.kanji[j].info.length;l++) {
							infoArr.push(entry.kanji[j].info[l]);
						}
						text = text + "  (" + infoArr.join("; ") + ")";
					}
					
					if(entry.kanji[j].xref) {
						let infoArr: String[] = new Array<String>();
						for(let l = 0;l<entry.kanji[j].xref.length;l++) {
							infoArr.push(entry.kanji[j].xref[l]);
						}
						text = text + " see also: " + infoArr.join("; ");
					}
					else
					{
						uiElement.addOtherForm( entry.kanji[j].text );
					}
				}
				
				for(let j = 1; j<entry.kana.length ; j++) {
					uiElement.addOtherForm( entry.kana[j].text );
				}
			}
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
			
			let xrefsArr = new Array<String>();
			if(currentSense.xref) {
				for(let l = 0;l<currentSense.xref.length;l++) {
					xrefsArr.push(currentSense.xref[l]);
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
			
			uiElement.addSense(posArr.join("; "), translations.join("; "), xrefsArr.join("; ") );
		}
		
		return uiElement;
	}
	
	convertLookupChar(char: BackendLookupResultChar): UiLookupResultChar {
        return null;
    }

}
