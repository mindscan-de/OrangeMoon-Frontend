import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {KanjiDataBackendService} from '../backend-service/kanji-data-backend.service';

import { BackendKanjiData } from '../backend-service/backend-model/backend-kanji-data';
import { BackendKanjiRadicals } from '../backend-service/backend-model/backend-kanji-radicals';

import { UiModelSelectableKanji }  from './ui-model/ui-model-selectable-kanji';


@Component({
  selector: 'app-kanji-by-radicals-selector',
  templateUrl: './kanji-by-radicals-selector.component.html',
  styleUrls: ['./kanji-by-radicals-selector.component.css']
})
export class KanjiByRadicalsSelectorComponent implements OnInit {
	
	public radicals: BackendKanjiRadicals = new BackendKanjiRadicals();
	public retrievedKanji: BackendKanjiData = new BackendKanjiData();
	
    public selectableRadicals: UiModelSelectableKanji[] = new Array<UiModelSelectableKanji>();

	public combinedRadicals: Set<String> = new Set<String>();
	

	constructor(private activatedRoute : ActivatedRoute, private backendService: KanjiDataBackendService, ) { }

	ngOnInit(): void {
		this.retrieveRadicals();
		this.retrieveKanjiByRadicals(['\u96E8','\u6728']);
	}
	
	
    retrieveRadicals() {
        this.backendService.getKanjiRadicals().subscribe(
			data => this.onKanjiRadicalsLoaded(data),
			error => this.onKanjiRadicalsFailes(error)
		);
    }

    retrieveKanjiByRadicals(selection:Array<String>) {
        this.backendService.getKanjiByRadicals(selection).subscribe(
			data => this.onSelectedKanjiLoaded(data),
			error => this.onKanjiRadicalsFailes(error)
		);
    }

    onSelectedKanjiLoaded(data: BackendKanjiData): void {
		console.log(data);
	
        this.retrievedKanji = data;
    }


    onKanjiRadicalsLoaded(data: BackendKanjiRadicals): void {
		let selectableRadicals = new Array<UiModelSelectableKanji>();
		for(let i=0;i<data.values.length;i++) {
			let radical = new UiModelSelectableKanji(data.values[i]);
			selectableRadicals.push(radical);
		}
		
		this.selectableRadicals = selectableRadicals;
        this.radicals = data;
    }

    onKanjiRadicalsFailes(error: any): void {
        console.log(error);
    }

	toggleRadical(radical:UiModelSelectableKanji): void {
		
		radical.selected = !radical.selected;
		
		console.log(radical);
		
		// TODO: Combine the selected radicals
		// button.selected = this.selectedRadicals[index]?"selected":"";
	}

}
