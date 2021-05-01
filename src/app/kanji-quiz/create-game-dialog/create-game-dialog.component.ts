import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// Kanji Backend
import { KanjiDataBackendService } from '../../backend-service/kanji-data-backend.service';


@Component({
  selector: 'app-create-game-dialog',
  templateUrl: './create-game-dialog.component.html',
  styleUrls: ['./create-game-dialog.component.css']
})
export class CreateGameDialogComponent {
	
	public selectedPlayerName: string = "";
	public selectedQuizRoomPassword: string = "";

	constructor(public activeModal: NgbActiveModal, private backendService: KanjiDataBackendService) { }

	setDialogData(  ) : void {
		
	}
	
	onCreate() : void {
		// TODO: check input, such that the selected Player Name is not empty.
		
		let gameRoomData = this.backendService.createGameChannel(this.selectedPlayerName, this.selectedQuizRoomPassword);
		
		this.activeModal.close( gameRoomData )
	} 

}
