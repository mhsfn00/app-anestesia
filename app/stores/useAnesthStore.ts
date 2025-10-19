import { create } from 'zustand';

export type Option = {
    label: string;
    value: boolean;
}

type AnesthState = {
    comorbidities: Option[];
    continuousMeds: {
        antiHypertensives: Option[];
        antiDiabetics: Option[];
        antiCoagulants: Option[];
    };
    setComorbidities: (options: Option[]) => void;
    setContinuousMeds: (newMeds: AnesthState['continuousMeds']) => void;
};

export const useAnesthStore = create<AnesthState>((set) => ({
    comorbidities: [],
    continuousMeds: {
        antiHypertensives: [],
        antiDiabetics: [],
        antiCoagulants: []
    },
    setComorbidities: (options) => set({ comorbidities: options }),
    setContinuousMeds: (newMeds) => set({ continuousMeds: newMeds })
}));