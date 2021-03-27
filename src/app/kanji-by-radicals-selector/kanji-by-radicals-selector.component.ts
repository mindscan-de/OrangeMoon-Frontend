import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Backend Service
import {KanjiDataBackendService} from '../backend-service/kanji-data-backend.service';

// Backend Model
import { BackendKanjiRadicals } from '../backend-service/backend-model/backend-kanji-radicals';
import { BackendKanjiAndRadicalData } from '../backend-service/backend-model/backend-kanji-and-radical-data';
import { BackendKanjiRadicalsWithStrokes } from '../backend-service/backend-model/backend-kanji-radicals-with-strokes';

// UI Model
import { UiModelSelectableKanji }  from './ui-model/ui-model-selectable-kanji';



@Component({
  selector: 'app-kanji-by-radicals-selector',
  templateUrl: './kanji-by-radicals-selector.component.html',
  styleUrls: ['./kanji-by-radicals-selector.component.css']
})
export class KanjiByRadicalsSelectorComponent implements OnInit {
	
    public selectableRadicals: UiModelSelectableKanji[] = new Array<UiModelSelectableKanji>();
	public retrievedKanji: BackendKanjiAndRadicalData = new BackendKanjiAndRadicalData();
	public radicalTree: BackendKanjiRadicalsWithStrokes = new BackendKanjiRadicalsWithStrokes();

	// Keeps the current state of the current selected radicals
	private combinedRadicals: Set<UiModelSelectableKanji> = new Set<UiModelSelectableKanji>();
	
	constructor(private activatedRoute : ActivatedRoute, private backendService: KanjiDataBackendService ) { }

	ngOnInit(): void {
		this.retrieveRadicals();
	}
	
    retrieveRadicals() {
        this.backendService.getKanjiRadicalsWithStrokeCount().subscribe(
			data => this.onKanjiRadicalsLoaded(data),
			error => this.onKanjiRadicalsFailed(error)
		);
    }

    onKanjiRadicalsLoaded(data: BackendKanjiRadicalsWithStrokes): void {
		// TODO: refactor this to m2m
		let selectableRadicals = new Array<UiModelSelectableKanji>();
		for(let i=0;i<data.list.length;i++) {
			let radical = new UiModelSelectableKanji(data.list[i]);
			selectableRadicals.push(radical);
		}
		
		this.combinedRadicals = new Set<UiModelSelectableKanji>();
		this.selectableRadicals = selectableRadicals;
		this.radicalTree = data; 
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
		
		this.retrieveKanjiByRadicals2(selectedRadicals);
	}

    retrieveKanjiByRadicals2(selection:Array<String>) {
        this.backendService.getKanjiAndRadicalsByRadicals(selection).subscribe(
			data => this.onSelectedKanjiLoaded(data),
			error => this.onKanjiRadicalsFailed(error)
		);
    }

    onSelectedKanjiLoaded(data: BackendKanjiAndRadicalData): void {
		console.log(data);
	
        this.retrievedKanji = data;

		

		// Now go through all the selectable radicals and disable these which are not in the data.remaining_radicals
		this.selectableRadicals.forEach(radical => radical.setDisabled(!this.isRadicalInData(radical,data.remaining_radicals)));
    }

	isRadicalInData(radical:UiModelSelectableKanji, theAciveRadicals:String[]):boolean {
		return theAciveRadicals.includes(radical.kanji);
	}

}
