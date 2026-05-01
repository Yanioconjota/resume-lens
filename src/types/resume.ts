export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  links: string[];
}

export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  year: string;
}

export interface ParsedResume {
  personal: PersonalInfo;
  summary: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  languages: string[];
}
