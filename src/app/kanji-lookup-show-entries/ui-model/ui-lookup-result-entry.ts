export class UiLookupResultEntry {
	public idseq: String;

	public mainKanji: String = "";
	public mainKana: String = "";
	public senses: Array<UiLookupResultEntrySense> = new Array<UiLookupResultEntrySense>();
	
	constructor(idseq:String) {
		this.idseq = idseq;
	}

    setMainKanjiData(mainKanji: String, mainKana: String): void  {
        this.mainKana = mainKana;
		this.mainKanji	= mainKanji;
    }
	
	addSense( pos: String, gloss: String): void {
		let newsense:UiLookupResultEntrySense = new UiLookupResultEntrySense(); 
		
		newsense.pos = pos;
		newsense.translation = gloss;
		
		this.senses.push(newsense);
	}
}

export class UiLookupResultEntrySense {
	public pos: String;
	public translation: String;
}