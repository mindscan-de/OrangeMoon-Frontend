import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// import Backend
import { KanjiDataBackendService } from '../../backend-service/kanji-data-backend.service';
import { BackendQuizData } from '../../backend-service/backend-model/backend-quiz-data';

// import M2M

import { M2mKanjiLookupService } from '../../m2m/m2m-kanji-lookup.service';

// import UI-Model
import { UiQuizData, UiQuizDataItem } from './ui-model/ui-quiz-data';


// TODO: 
// will allow to show the quiz data
// will allow private quiz games (and continue?) 

@Component({
  selector: 'app-show-quiz-data-dialog',
  templateUrl: './show-quiz-data-dialog.component.html',
  styleUrls: ['./show-quiz-data-dialog.component.css']
})
export class ShowQuizDataDialogComponent  {
	
	public uiQuizData : UiQuizData = new UiQuizData();

	constructor(public activeModal: NgbActiveModal, private backendService : KanjiDataBackendService, private m2m: M2mKanjiLookupService) { }

	setDialogData( quiz_name : string ): void {
		this.backendService.getKanjiQuizData(quiz_name).subscribe(
			data => {
				let qData: BackendQuizData = data;
				this.setQuizData( this.m2m.convertQuizData(qData) ) 
				},
			error => {}
		);
	}
	
	setQuizData( quizData : UiQuizData ) : void {
		this.uiQuizData = quizData;
	}
	
	onClose() : void {
		this.activeModal.close();
	}

}
