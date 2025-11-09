import { Option } from "./useAnesthStore";

export const comorbidityOptions: Option[] = [
    { label: "Doença hepática crônica", effect: "hepatic", value: false },
    { label: "Doença renal crônica", effect: "renal", value: false },
    { label: "Diabetes Mellitus", effect: "diabetes", value: false },
    { label: "Doença Respiratória crônica (DPOC/asma grave)", effect: "respiratory", value: false },
    { label: "Epilepsia", effect:"epilepsy", value: false }  
];

export const antiArrhythmicOptions: Option[] = [
  { label: 'Quinidina (Cardioquin®), Disopiramida (Norpace®), Procainamida', effect: 'cardiac',  value: false },
  { label: 'Mexiletina (Mexitil®), Tocainida', effect: 'cardiac',  value: false },
  { label: 'Flecainida (Tambocor®), Propafenona (Rytmonorm®)', effect: 'cardiac',  value: false },
  { label: 'Atenolol (Atenol®), Metoprolol (Seloken®), Bisoprolol, Propranolol (Inderal®)', effect: 'cardiac',  value: false },
  { label: 'Amiodarona (Ancoron®), Sotalol (Sotacor®), Dronedarona (Multaq®)', effect: 'cardiac',  value: false },
  { label: 'Verapamil (Isoptin®), Diltiazem (Cardizem®)', effect: 'cardiac',  value: false },
];

export const antiCoagulantOptions: Option[] = [
  { label: 'Varfarina (Marevan®)', effect: 'cardiac',  value: false },
  { label: 'Apixabana (Eliquis®)', effect: 'cardiac',  value: false },
  { label: 'Rivaroxabana (Xarelto®)', effect: 'cardiac',  value: false },
  { label: 'Dabigatrana (Pradaxa®)', effect: 'cardiac',  value: false },
  { label: 'Edoxabana (Lixiana®)', effect: 'cardiac',  value: false }
];

export const antiAggregantOptions: Option[] = [
  { label: 'Ácido acetilsalicílico – AAS (Aspirina®, Melhoral®, AAS Infantil®)', effect: 'cardiac',  value: false },
  { label: 'Clopidogrel (Plavix®, Clopidrix®)', effect: 'cardiac',  value: false },
  { label: 'Prasugrel (Efient®)', effect: 'cardiac',  value: false },
  { label: 'Ticlopidina (Ticlid®)', effect: 'cardiac',  value: false },
  { label: 'Ticagrelor (Brilinta®)', effect: 'cardiac',  value: false },
  { label: 'Dipiridamol (Persantin® / Aggrenox®)', effect: 'cardiac',  value: false },
  { label: 'Cilostazol (Pletal®)', effect: 'cardiac',  value: false }
];