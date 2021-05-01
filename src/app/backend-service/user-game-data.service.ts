import { Injectable } from '@angular/core';


import { BackendGameChannelEntry } from './backend-model/backend-game-channel-entry';

@Injectable({
  providedIn: 'root'
})
export class UserGameDataService {

	constructor() { }

	setGameChannelPlayerData(data:BackendGameChannelEntry): void {
		console.log(data);
		
		
	}
	
	getGameChannelPlayerData(): BackendGameChannelEntry {
		return null;
	}
}
