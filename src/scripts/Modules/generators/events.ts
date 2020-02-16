
export interface EventRequirements {
    hasOutpost: boolean,
    hasEcosferic: boolean,
    hasMinerals: boolean,
    hasAnomaly: boolean,
};

export let planetHasOutpost: boolean;
export let planetHasEcosferic: boolean;

export const checkEvents = (): EventRequirements => {

    const outpostPossibility = 50;
    const ecosfericPossibility = 50;
    const mineralsPossibility = 15;
    const anomalyPossibility = 25;

    planetHasOutpost = checkChance(outpostPossibility);
    planetHasEcosferic = checkChance(ecosfericPossibility);

    return{
        hasOutpost: planetHasOutpost,
        hasEcosferic: planetHasEcosferic,
        hasMinerals: checkChance(mineralsPossibility),
        hasAnomaly: checkChance(anomalyPossibility),
    }

};

const checkChance = (requiredValue: number): boolean => {

    const maxChanceToSuccess: number = 100;
    const drawnValue = Math.floor(Math.random() * Math.floor(maxChanceToSuccess));

    return drawnValue < requiredValue;
};

