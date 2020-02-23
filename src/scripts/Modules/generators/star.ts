import {
    generateStarType,
    generateSpectralType,
} from './starType';
import { Star } from "../Types";

const availableStarNames: string[] = require('../../Data/availableStarNames.json');


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
