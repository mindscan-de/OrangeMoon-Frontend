import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-kanji-lookup',
  templateUrl: './kanji-lookup.component.html',
  styleUrls: ['./kanji-lookup.component.css']
})
export class KanjiLookupComponent implements OnInit {
	
	public currentKanjiQueryString: String="test";

	constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  		// subscribe to page parameters		
  		this.activatedRoute.queryParams.subscribe( pageParameters => {
	 		this.onContentPageParametersProvided( pageParameters );
  		});
	}
	
	ngOnInit(): void {
  		this.activatedRoute.queryParams.subscribe( pageParameters => {
	 		this.onContentPageParametersProvided( pageParameters );
  		});
	  	
	}
	
	onContentPageParametersProvided( pageParameters ):void { 
		this.currentKanjiQueryString = this.activatedRoute.snapshot.queryParams["q"];
	}
	
	onSubmit():void {
		var queryParameterQ = this.currentKanjiQueryString;
		this.router.navigate( [ '/kanjilookup'], { queryParams:{q:queryParameterQ } });
	}

}
