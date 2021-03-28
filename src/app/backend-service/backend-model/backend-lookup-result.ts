export class BackendLookupResult {
	// the looked up chars (in case of non strict values, alternatives are also looked up)
	public chars: BackendLookupResultChar[] = [];
	// the entry itself
	public entries: BackendLookupResultEntry[] = [];
	// names and places
	public names: BackendLookupResultName[] = [];
}

export class BackendLookupResultName {
	public idseq: string = "";
	public kana: any[] = [];
	public kanji: any[] = [];
}

export class BackendLookupResultEntry {
	public idseq: string = "";
	// the reading::pri,text,restr
	public kana: any[] = [];
	// the kanji::pri,text,info
	public kanji: any[] = [];
	// translation and crossreferences::SenseGloss,pos,xref
	public senses: any[] = [];
}


export class BackendLookupResultChar {
	public codepoints: any[] = [];
	public dic_refs: BackendLookupResultDictRef[] = [];
	public freq: string = "";
	public grade: string = "";
	public jlpt: string = "";
	public literal: string = "";
	public nanoris: any[] = [];
	public q_codes: any[] = [];
	public rad_names: any[] = [];
	public radicals: any[] = [];
	public rm: BackendLookupResultReadingsMeanings[] = [];
	public stroke_count: number = 0;
	public variants: any[] = [];
}

export class BackendLookupResultReadingsMeanings {
	public readings: BackendLookupResultReading[] = [];
	public meanings: BackendLookupResultMeaning[] = [];
}

export class BackendLookupResultDictRef {
	public type: String;
	public value: String;
	public m_vol: String;
	public m_page: String;
}

export class BackendLookupResultMeaning {
	public m_lang: string = "";
	public value: string = "";
}

export class BackendLookupResultReading {
	public on_type: string = "";
	public r_status: string = "";
	public type: string = "";
	public value: string = "";
}