export class UiModelSelectableKanji {
	public selected:boolean = false;
	public kanji: String = '';
	public disabled: String = '';
	
	constructor(kanji:String) {
		this.kanji = kanji;
	}
	
	setDisabled(newValue:boolean) {
		this.disabled = newValue==true?'disabled':'';
	}
}
