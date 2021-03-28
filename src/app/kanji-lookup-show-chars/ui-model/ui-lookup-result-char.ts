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
	
	public ref_kkld2ed: String;
    public ref_kic: String;
    public ref_KKD: String;

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
	
	// set reference for "Jack Halpern: The Kodansha Kanji Learners Dictionary 2nd edition"
	setRefKKLD2ed(ref : String ): void {
		this.ref_kkld2ed = ref;
	}
	
	// set referenece for "The Japan Times: Kanji in Context" (revised Edition)
	setRefKIC(ref: String): void {
		this.ref_kic = ref;
	}
	
	// set referenece for "Jack Halpern: The Kodansha Kanji Dictionary"
	setRefKKD(ref: String): void {
		this.ref_KKD = ref
	}
}
