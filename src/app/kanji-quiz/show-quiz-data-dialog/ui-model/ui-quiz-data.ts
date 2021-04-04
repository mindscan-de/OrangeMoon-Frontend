export class UiQuizData {
	public name: String = "";
	public length: Number = 0;
	public list: UiQuizDataItem[] = [];
}

export class UiQuizDataItem {
	public kanji: String = "";
	public kana: String[] = [];
	public meaning: String[] = [];
}