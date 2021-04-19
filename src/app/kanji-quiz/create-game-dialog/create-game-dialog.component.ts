import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-game-dialog',
  templateUrl: './create-game-dialog.component.html',
  styleUrls: ['./create-game-dialog.component.css']
})
export class CreateGameDialogComponent {

	constructor(public activeModal: NgbActiveModal) { }

	setDialogData(  ) : void {
		
	}
	
	onClose() : void {
		this.activeModal.close();
	}
	
	onCreate() : void {
		
	} 

}
