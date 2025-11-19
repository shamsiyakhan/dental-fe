export const DEPARTMENTS = [
'Prosthodontics and Crown & Bridge',
'Periodontology',
'Conservative Dentistry & Endodontics',
'Oral & Maxillofacial Surgery',
'Orthodontics & Dentofacial Orthopedics',
"Paedodontics & Preventive Dentistry",
'Oral Medicine & Radiology',
'Oral Pathology & Microbiology',
'Public Health Dentistry',
] as const;


export type Department = typeof DEPARTMENTS[number];


export type Granularity = 'Monthly'|'Quarterly'|'Yearly';