import { create } from 'zustand';

export type Option = {
    label: string;
    value: boolean;
}

type AnesthState = {
    comorbidities: Option[];
    antiArrhythmics: Option[];
    antiCoagulants: Option[];
    antiPlatelets: Option[];
    setComorbidities: (options: Option[]) => void;
    setAntiArrhythmics: (options: Option[]) => void;
    setAntiCoagulants: (options: Option[]) => void;
    setAntiPlatelets: (options: Option[]) => void;
};

export const useAnesthStore = create<AnesthState>((set) => ({
    comorbidities: [],
    antiArrhythmics: [],
    antiCoagulants: [],
    antiPlatelets: [],
    setComorbidities: (options) => set({ comorbidities: options }),
    setAntiArrhythmics: (options) => set({ antiArrhythmics: options }),
    setAntiCoagulants: (options) => set({ antiCoagulants: options }),
    setAntiPlatelets: (options) => set({ antiPlatelets: options })
}));