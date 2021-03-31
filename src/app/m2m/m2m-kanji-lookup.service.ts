import { Injectable } from '@angular/core';


// import backend models
import { BackendLookupResultEntry, BackendLookupResultChar, BackendLookupResultName } from '../backend-service/backend-model/backend-lookup-result';


// import ui-models
import { UiLookupResultEntry } from  '../kanji-lookup-show-entries/ui-model/ui-lookup-result-entry';
import { UiLookupResultChar } from '../kanji-lookup-show-chars/ui-model/ui-lookup-result-char';
import { UiLookupResultName } from '../kanji-lookup-show-names/ui-model/ui-lookup-result-name';

@Injectable({
  providedIn: 'root'
})
export class M2mKanjiLookupService {

	constructor() { }

	convertLookupEntry( entry: BackendLookupResultEntry ): UiLookupResultEntry {
		
		let uiElement: UiLookupResultEntry = new UiLookupResultEntry(entry.idseq);
		
		// Process the kanji and Kana - is complicated
		if( entry.kanji.length > 0 && entry.kana.length > 0) {
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
					
					uiElement.addOtherForm( text );
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
					posArr.push(currentSense.pos[j]);
				}
			}
			
			let xrefsArr = new Array<String>();
			if(currentSense.xref) {
				for(let l = 0;l<currentSense.xref.length;l++) {
					xrefsArr.push(currentSense.xref[l]);
				}
			}

			// TODO: currentSense.SenseInfo (e.g. shima)
			// TODO: currentSense.misc (e.g. shima) "word usually written using kana alone"
			
			let translations = new Array<String>();
			for(let j=0; j<currentSense.SenseGloss.length;j++) {
				
				let translation = currentSense.SenseGloss[j].text;
				if(currentSense.stagr) {
					translation = currentSense.stagr[0] + " (esp. when) " + translation;
				}
				translations.push(translation);
			}
			
			uiElement.addSense(posArr.join("; "), translations.join("; "), xrefsArr.join("; ") );
		}
		
		return uiElement;
	}
	
	convertLookupName(name: BackendLookupResultName ) : UiLookupResultName {
		let uiName = new UiLookupResultName(name.idseq);
		
		if( name.kanji.length > 0 && name.kana.length > 0) {
			uiName.setMainKanjiData(name.kanji[0].text, name.kana[0].text);
			
			if(name.kanji.length>1 || name.kana.length >1 ) {
				console.log("TODO convertLookupName: more than one kanji or reading found...");
			}
		}
		
		// process the senses
		for( let i = 0; i< name.senses.length;i++ ) {
			let currentSense = name.senses[i];
			
			let translations = new Array<String>();
			for(let j=0; j<currentSense.SenseGloss.length;j++) {
				let translation = currentSense.SenseGloss[j].text;
				translations.push(translation);
			}
			
			let type="unknown";
			if(currentSense.name_type && currentSense.name_type.length>0){
				type = currentSense.name_type[0];
			}
			
			uiName.addSense(translations.join("; "), type);
		}		
		
		return uiName;
	}
	
	convertLookupChar(char: BackendLookupResultChar): UiLookupResultChar {
		
		let uiChar = new UiLookupResultChar(char.literal, char.stroke_count, char.grade);
		uiChar.setJLPTold(char.jlpt);
		
		if(char.rm) {
			for(let i=0;i<char.rm.length;i++) {
				let currentrm = char.rm[i];
				
				if(currentrm.readings) {
					for(let j=0;j<currentrm.readings.length;j++) {
						let currentreading = currentrm.readings[j];
						if(currentreading.type=="ja_on") {
							uiChar.addOnReading(currentreading.value);
						}
						if(currentreading.type=="ja_kun") {
							uiChar.addKunReading(currentreading.value);
						}
					}
				}
				
				if(currentrm.meanings) {
					for(let j=0;j<currentrm.meanings.length;j++) {
						let currentmeaning = currentrm.meanings[j];
						if(currentmeaning.m_lang=="") {
							uiChar.addMeaning(currentmeaning.value);
						}
					}
				}
			}
		}
		
		if(char.dic_refs) {
			for(let i = 0; i<char.dic_refs.length; i++) {
				let current_ref = char.dic_refs[i];
				if(current_ref.type=="halpern_kkd") {
					uiChar.setRefKKD(current_ref.value);
				}
				else if(current_ref.type=="halpern_kkld_2ed" ) {
					uiChar.setRefKKLD2ed(current_ref.value);
				}
				else if(current_ref.type == "kanji_in_context") {
					uiChar.setRefKIC(current_ref.value);
				}
			}
		}
		
        return uiChar;
    }

}
