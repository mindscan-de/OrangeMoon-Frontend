import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {KanjiDataBackendService} from '../backend-service/kanji-data-backend.service';

import { BackendKanjiRadicals } from '../backend-service/backend-model/backend-kanji-radicals';

@Component({
  selector: 'app-kanji-by-radicals-selector',
  templateUrl: './kanji-by-radicals-selector.component.html',
  styleUrls: ['./kanji-by-radicals-selector.component.css']
})
export class KanjiByRadicalsSelectorComponent implements OnInit {
	
	public radicals: BackendKanjiRadicals = new BackendKanjiRadicals();

	constructor(private activatedRoute : ActivatedRoute, private backendService: KanjiDataBackendService, ) { }

	ngOnInit(): void {
		this.retrieveRadicals();
	}
	
    retrieveRadicals() {
        this.backendService.getKanjiRadicals().subscribe(
			data => this.onKanjiRadicalsLoaded(data),
			error => this.onKanjiRadicalsFailes(error)
		);
    }

    onKanjiRadicalsLoaded(data: BackendKanjiRadicals): void {
        this.radicals = data;
    }

    onKanjiRadicalsFailes(error: any): void {
        console.log(error);
    }

}
