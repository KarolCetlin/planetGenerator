import { EventRequirements } from "../Types";

export let planetHasOutpost: boolean;
export let planetHasEcosferic: boolean;

export const generateEvents = (): EventRequirements => {

    const outpostPossibility = 50;
    const ecosfericPossibility = 50;
    const mineralsPossibility = 15;
    const anomalyPossibility = 25;

    planetHasOutpost = eventInitialization(outpostPossibility);
    planetHasEcosferic = eventInitialization(ecosfericPossibility);

    return{
        hasOutpost: planetHasOutpost,
        hasEcosferic: planetHasEcosferic,
        hasMinerals: eventInitialization(mineralsPossibility),
        hasAnomaly: eventInitialization(anomalyPossibility),
    }

};

const eventInitialization = (requiredValue: number): boolean => {

    const maxChanceToSuccess: number = 100;
    const drawnValue = Math.floor(Math.random() * Math.floor(maxChanceToSuccess));

    return drawnValue < requiredValue;
};

