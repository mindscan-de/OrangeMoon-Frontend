import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-kanji-game',
  templateUrl: './kanji-game.component.html',
  styleUrls: ['./kanji-game.component.css']
})
export class KanjiGameComponent implements OnInit {

	constructor(private route: ActivatedRoute) { 
		this.route.params.subscribe(params => console.log(params));
	
	}

	ngOnInit(): void {
	}

}
