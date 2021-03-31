export class UiLookupResultName {
	public idseq: String;
	
	public mainKanji: String="";
	public mainKana: String="";
	public senses: Array<UiLookupResultNameSense> = new Array<UiLookupResultNameSense>();
	
	constructor(idseq:String) {
		this.idseq = idseq;
	}
	
	setMainKanjiData(mainKanji: String, mainKana: String) : void {
		this.mainKana = mainKana;
		this.mainKanji = mainKanji;
	}
	
	addSense ( glosstext: String, type: String) : void {
		let newSense : UiLookupResultNameSense = new UiLookupResultNameSense();
		
		newSense.translation = glosstext;
		newSense.type = type;
		
		this.senses.push(newSense);
	}
	
}

export class UiLookupResultNameSense {
	public translation: String;
	public type: String; 
}
