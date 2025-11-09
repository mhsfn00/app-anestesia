import { anesthetics } from "../constants/medications";
import { Comorbidity, ComorbidityFlagsInput } from "../stores/useAnesthStore";

export interface PatientInput {
    age: number;
    weightKg: number;
    isPregnant: boolean;
    comorbidities: Comorbidity[];
    durationHours: number;
}

export interface Recommendation {
    name: string;
    concentration: number;
    doseMg: number;
    volumeMl: number;
    reason?: string;
}

export interface RecommendationResult {
    recommended: Recommendation[];
    excluded: string[];
}

export function recommendAnesthetic(params: PatientInput): RecommendationResult { 
    const { age, weightKg, isPregnant, comorbidities, durationHours } = params;

    // Filter contraindicated drugs
    let possible = anesthetics.filter(d => {
        if (isPregnant && d.cardioRisk === 'high') return false;
        if (comorbidities.includes('cardiac') && d.cardioRisk === 'high') return false;
        return true;
    });

    // Filter by duration
    possible = possible.filter(d => {
        const [min, max] = d.durationHours;
        return durationHours >= min && durationHours <= max;
    });

    // Adjust for age
    let doseFactor = 1;
    if ((age < 12) || (age >= 65) || isPregnant) doseFactor = 0.8;

    // Calculate
    const recommended = possible.map(d => {
        const concentration = d.concentrationMgPerMl[0];
        const doseMg = d.maxDoseMgPerKg * weightKg * doseFactor;
        const volumeMl = doseMg / concentration;

        return {
            name: d.name,
            concentration,
            doseMg,
            volumeMl
        }
    });

    const excluded = anesthetics
        .filter(a => !possible.includes(a))
        .map(a => a.name);
    
    return { recommended, excluded }
}

export function buildComorbidityFlags({
    comorbidityOptions,
    antiArrhythmicOptions,
    antiCoagulantOptions,
    antiAggregantOptions
} : ComorbidityFlagsInput) {
    const selected = comorbidityOptions
        .filter(o => o.value)
        .map(o => o.effect);

    const hasCardiacMeds = [...antiArrhythmicOptions, ...antiCoagulantOptions, ...antiAggregantOptions]
        .some((o) => o.value);

    if (hasCardiacMeds) selected.push('cardiac');

    return selected as Comorbidity[];
}