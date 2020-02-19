import {
    generateStarType,
    generateSpectralType,
} from './starType';
import { Star} from "../Types";
import { availableStarNames } from "./availableStarNames";

export const generateStar = (): Star => {

    return {
        name: genereteStarName(),
        lifeCycle: generateStarType(),
        spectral: generateSpectralType(),
    }

};


const genereteStarName = (): string => {
    const availableStarCount = availableStarNames.length;
    const randomIndex = Math.floor(Math.random() * availableStarCount - 1);

    return availableStarNames[randomIndex];
};
