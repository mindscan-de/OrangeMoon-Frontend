import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// import Backend
import { KanjiDataBackendService } from '../../backend-service/kanji-data-backend.service';

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

	constructor(public activeModal: NgbActiveModal, private backendService : KanjiDataBackendService) { }

	setDialogData( quiz_name : string ): void {
		this.backendService.getKanjiQuizData(quiz_name).subscribe(
			data => {},
			error => {}
		);
	}
	
	onClose() : void {
		this.activeModal.close();
	}

}
