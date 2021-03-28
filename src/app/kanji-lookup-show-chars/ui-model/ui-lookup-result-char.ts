export class UiLookupResultChar {
	public literal: String
	public stroke_count: number;
	public grade: String = "";
	public jlpt_old: String = "";
	public jlpt_new: String = "";
	
 	public radicals: any[] = [];
	public meanings: String[] = new Array<String>();
	public jaon_readings: String[] = new Array<String>();
	public jakun_readings: String[] = new Array<String>(); 

	constructor(literal: String, strokecount: number, grade: String) {
		this.literal = literal;
		this.stroke_count = strokecount;
		this.grade = grade;
	}
	
	setJLPTold(jlpt:String): void {
		this.jlpt_old = jlpt;
	}
	
	setJLPTnew(jlpt: String): void {
		this.jlpt_new = jlpt;
	}
	
	addOnReading( onReading: String) : void {
		this.jaon_readings.push(onReading);
	}
	
	addKunReading( kunReading: String) : void {
		this.jakun_readings.push(kunReading);
	}
	
	addMeaning(meaning: String) : void {
		this.meanings.push(meaning);
	}
}
