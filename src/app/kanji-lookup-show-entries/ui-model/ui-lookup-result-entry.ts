export class UiLookupResultEntry {
	public idseq: String;

	public mainKanji: String = "";
	public mainKana: String = "";
	public senses: Array<UiLookupResultEntrySense> = new Array<UiLookupResultEntrySense>();
	public otherForms: Array<String> = new Array<String>();
	
	constructor(idseq:String) {
		this.idseq = idseq;
	}

    setMainKanjiData(mainKanji: String, mainKana: String): void  {
        this.mainKana = mainKana;
		this.mainKanji	= mainKanji;
    }
	
	addSense( pos: String, gloss: String, crossref:String ): void {
		let newsense:UiLookupResultEntrySense = new UiLookupResultEntrySense(); 
		
		newsense.pos = pos;
		newsense.translation = gloss;
		newsense.xref = crossref;
		
		this.senses.push(newsense);
	}
	
    addOtherForm(otherForm: String) {
        this.otherForms.push(otherForm);
    }
	
}

export class UiLookupResultEntrySense {
	public pos: String;
	public translation: String;
	public xref:String;
}