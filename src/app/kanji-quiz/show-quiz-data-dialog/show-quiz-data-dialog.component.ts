import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { KanjiDataBackendService } from '../../backend-service/kanji-data-backend.service';


@Component({
  selector: 'app-show-quiz-data-dialog',
  templateUrl: './show-quiz-data-dialog.component.html',
  styleUrls: ['./show-quiz-data-dialog.component.css']
})
export class ShowQuizDataDialogComponent  {

	constructor(public activeModal: NgbActiveModal, private backendService : KanjiDataBackendService) { }

	setDialogData( quiz_name : String ): void {
		// TODO subscribe to the kanji data...
	}
	
	onClose() : void {
		this.activeModal.close();
	}

}
