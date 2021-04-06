import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { toKana } from 'wanakana';

// Backend Service
import { KanjiDataBackendService } from '../backend-service/kanji-data-backend.service';

// Backend Model
import { BackendLookupResult } from '../backend-service/backend-model/backend-lookup-result';


@Component({
  selector: 'app-kanji-lookup',
  templateUrl: './kanji-lookup.component.html',
  styleUrls: ['./kanji-lookup.component.css']
})
export class KanjiLookupComponent implements OnInit {
	
	public currentKanjiQueryString: string="";
	public lookupResult: BackendLookupResult = new BackendLookupResult();

	constructor(private activatedRoute: ActivatedRoute, private router: Router, private backendService: KanjiDataBackendService,) {
		this.currentKanjiQueryString = "";
  		// subscribe to page parameters		
  		this.activatedRoute.queryParams.subscribe( pageParameters => {
	 		this.onContentPageParametersProvided( pageParameters );
  		});
	}
	
	ngOnInit(): void {

	}
	
	onContentPageParametersProvided( pageParameters ):void { 
		this.currentKanjiQueryString = this.activatedRoute.snapshot.queryParams["q"];
		
		if(this.currentKanjiQueryString && this.currentKanjiQueryString.trim() != "") {
			this.backendService.strictLookupKanji(this.currentKanjiQueryString).subscribe(
				data => this.onLookupResultLoaded(data),
				error => this.onLookupResultFailed(error)
			);
		}
		else
		{
			// just make the result empty
		}
	}
	
	onLookupResultLoaded(data: BackendLookupResult) : void {
		console.log(data);
		
		this.lookupResult = data;
	}
	
	onLookupResultFailed(error: any) : void {
		console.log(error);
		
		this.lookupResult = new BackendLookupResult();
	}
	
	onLookupInputChanged(lookupinput) : void {
		this.currentKanjiQueryString = toKana(lookupinput,{ upcaseKatakana: true,　customKanaMapping: { n:'n',　tchi:'っち', nn:'ん'}});
	}
	
	
	onSubmit():void {
		var queryParameterQ = this.currentKanjiQueryString;
		this.router.navigate( [ '/kanjilookup'], { queryParams:{q:queryParameterQ } });
	}

}
