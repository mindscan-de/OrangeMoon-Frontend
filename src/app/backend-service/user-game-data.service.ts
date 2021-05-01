import { Injectable } from '@angular/core';


import { BackendGameChannelEntry } from './backend-model/backend-game-channel-entry';

@Injectable({
  providedIn: 'root'
})
export class UserGameDataService {
	
	private __userdata: BackendGameChannelEntry;

	constructor() { }

	setGameChannelPlayerData(data:BackendGameChannelEntry): void {
		this.__userdata = data;
	}
	
	getGameChannelPlayerData(): BackendGameChannelEntry {
		return this.__userdata;
	}
}
