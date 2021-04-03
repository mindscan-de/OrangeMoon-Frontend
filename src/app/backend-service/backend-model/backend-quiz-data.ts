export class BackendQuizData {
	public name: String = "";
	public length: Number = 0;
	public list: BackendQuizDataItem[] = [];
}

export class BackendQuizDataItem {
	public kanji: String = "";
	public kana: BackendQuizDataItemReading = new BackendQuizDataItemReading();
	public meaning: String[] = [];
}

export class BackendQuizDataItemReading {
	public kun: String[] = [];
	public on: String[] = [];
}