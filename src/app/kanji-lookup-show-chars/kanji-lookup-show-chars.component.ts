import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

// Backend Model
import { BackendLookupResultChar} from '../backend-service/backend-model/backend-lookup-result'

// UI Model
import { UiLookupResultChar } from './ui-model/ui-lookup-result-char';

// M2M transforamation from BackendModel to UI-Model
import { M2mKanjiLookupService } from '../m2m/m2m-kanji-lookup.service';

/**
 * This component is only for processing the chars-entries and presenting them
 */
@Component({
  selector: 'app-kanji-lookup-show-chars',
  templateUrl: './kanji-lookup-show-chars.component.html',
  styleUrls: ['./kanji-lookup-show-chars.component.css']
})
export class KanjiLookupShowCharsComponent implements OnInit {

	public uiChars: UiLookupResultChar[] = [];

	constructor(private m2m: M2mKanjiLookupService) { }

	ngOnInit(): void {
	}

	@Input() 
	public set chars(chars: BackendLookupResultChar[]) {
		let uiChars: UiLookupResultChar[] = new Array<UiLookupResultChar>(chars.length);
		
		if(chars.length >0) {
			for(let i=0;i<chars.length; i++) {
				uiChars[i] = this.m2m.convertLookupChar(chars[i]);
			}
			
			console.log("chars set - printing entries");
			console.log(chars);
		}
		else
		{
			
		}
		
		this.uiChars = uiChars;
	}

}
