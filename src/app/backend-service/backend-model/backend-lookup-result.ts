export class BackendLookupResult {
	public chars: BackendLookupResultChar[] = [];
	public entries: BackendLookupResultEntry[] = [];
	public names: BackendLookupResultName[] = [];
}

export class BackendLookupResultName {
	public idseq: string = "";
	public kana: any[] = [];
	public kanji: any[] = [];
}

export class BackendLookupResultEntry {
	public idseq: string = "";
	// the reading::pri,text
	public kana: any[] = [];
	// the kanji::pri,text
	public kanji: any[] = [];
	// translation and crossreferences::SenseGloss,pos,xref
	public senses: any[] = [];
}


export class BackendLookupResultChar {
	public codepoints: any[] = [];
	public dic_refs: any[] = [];
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