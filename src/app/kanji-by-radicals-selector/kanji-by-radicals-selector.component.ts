import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {KanjiDataBackendService} from '../backend-service/kanji-data-backend.service';

import { BackendKanjiData } from '../backend-service/backend-model/backend-kanji-data';
import { BackendKanjiRadicals } from '../backend-service/backend-model/backend-kanji-radicals';
import { BackendKanjiAndRadicalData } from '../backend-service/backend-model/backend-kanji-and-radical-data';

import { UiModelSelectableKanji }  from './ui-model/ui-model-selectable-kanji';


@Component({
  selector: 'app-kanji-by-radicals-selector',
  templateUrl: './kanji-by-radicals-selector.component.html',
  styleUrls: ['./kanji-by-radicals-selector.component.css']
})
export class KanjiByRadicalsSelectorComponent implements OnInit {
	
	// These are able to be disabled or not.
	public radicals: BackendKanjiRadicals = new BackendKanjiRadicals();
	
	public retrievedKanji: BackendKanjiData = new BackendKanjiData();
	
    public selectableRadicals: UiModelSelectableKanji[] = new Array<UiModelSelectableKanji>();

	public combinedRadicals: Set<UiModelSelectableKanji> = new Set<UiModelSelectableKanji>();
	

	constructor(private activatedRoute : ActivatedRoute, private backendService: KanjiDataBackendService, ) { }

	ngOnInit(): void {
		this.retrieveRadicals();
	}
	
    retrieveRadicals() {
        this.backendService.getKanjiRadicals().subscribe(
			data => this.onKanjiRadicalsLoaded(data),
			error => this.onKanjiRadicalsFailed(error)
		);
    }

    onKanjiRadicalsLoaded(data: BackendKanjiRadicals): void {
		// TODO: refactor this to m2m
		let selectableRadicals = new Array<UiModelSelectableKanji>();
		for(let i=0;i<data.values.length;i++) {
			let radical = new UiModelSelectableKanji(data.values[i]);
			selectableRadicals.push(radical);
		}
		
		this.combinedRadicals = new Set<UiModelSelectableKanji>();
		this.selectableRadicals = selectableRadicals;
        this.radicals = data;
    }

    onKanjiRadicalsFailed(error: any): void {
        console.log(error);
    }

	toggleRadical(radical:UiModelSelectableKanji): void {
		radical.selected = !radical.selected;
		
		if(radical.selected) {
			this.combinedRadicals.add(radical);
		}
		else{
			this.combinedRadicals.delete(radical);
		}
		
		let selectedRadicals = this.selectableRadicals.filter(radical => radical.selected).map(radical => radical.kanji);
		
		console.log(selectedRadicals);
		
		// this.retrieveKanjiByRadicals(selectedRadicals);
	}

/*    retrieveKanjiByRadicals2(selection:Array<String>) {
        this.backendService.getKanjiAndRadicalsByRadicals(selection).subscribe(
			data => this.onSelectedKanjiLoaded(data),
			error => this.onKanjiRadicalsFailes(error)
		);
    }
*/
/*    onSelectedKanjiLoaded(data: BackendKanjiAndRadicalData): void {
		console.log(data);
	
        this.retrievedKanji = data;
    }*/


}
