import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-join-game-dialog',
  templateUrl: './join-game-dialog.component.html',
  styleUrls: ['./join-game-dialog.component.css']
})
export class JoinGameDialogComponent {

	constructor(public activeModal: NgbActiveModal) { }
	
	setDialogData(  ) : void {
		
	}
	
	onClose() : void {
		this.activeModal.close();
	}
	
	onJoin() : void {
		
	} 
}
