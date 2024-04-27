export interface IExperience {
	title: string;
	company: string;
	companyUrl?: string;
	from: string;
	to: string;
	description: string;
	certificateUrl?: string;
}

export interface ISkill {
	name: string;
	image: string;
}

export interface ICertificate {
	name: string;
	image: string;
	company: string;
	companyUrl: string;
	certificateUrl: string;
	aptitudes: string[];
	date: '';
}
