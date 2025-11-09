type CardioRisk = 'low' | 'moderate' | 'high';

export interface AnestheticDrug {
  name: string;
  concentrationMgPerMl: number[];
  maxDoseMgPerKg: number;
  durationHours: [number, number];
  cardioRisk: CardioRisk;
  notes?: string;
}

export const anesthetics: AnestheticDrug[] = [
  {
    name: 'Lidocaine',
    concentrationMgPerMl: [10, 20],
    maxDoseMgPerKg: 5,
    durationHours: [0, 2],
    cardioRisk: 'low',
    notes: 'Can increase to 7 mg/kg with vasoconstrictor.'
  },
  {
    name: 'Mepivacaine',
    concentrationMgPerMl: [10, 15, 20, 30],
    maxDoseMgPerKg: 7,
    durationHours: [2, 3],
    cardioRisk: 'low'
  },
  {
    name: 'Articaine',
    concentrationMgPerMl: [40],
    maxDoseMgPerKg: 7,
    durationHours: [0, 2],
    cardioRisk: 'low'
  },
  {
    name: 'Ropivacaine',
    concentrationMgPerMl: [2, 5, 7.5, 10],
    maxDoseMgPerKg: 3,
    durationHours: [3, 6],
    cardioRisk: 'moderate'
  },
  {
    name: 'Bupivacaine',
    concentrationMgPerMl: [2.5, 5, 7.5],
    maxDoseMgPerKg: 2,
    durationHours: [4, 8],
    cardioRisk: 'high'
  }
];
