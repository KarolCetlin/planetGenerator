import {
    generateStarType,
    generateSpectralType,
} from './starType';
import { Star } from "../Types";

// const availableStarNames: string[] = require('../../Data/availableStarNames.json');


export const generateStar = (availableStarNames, availableLifeCycleStars, availableSpectralTypes): Star => {

    return {
        name: genereteStarName(availableStarNames),
        lifeCycle: generateStarType(availableLifeCycleStars),
        spectral: generateSpectralType(availableSpectralTypes, availableLifeCycleStars),
    }

};


const genereteStarName = (availableStarNames): string => {
    const availableStarCount = availableStarNames.length;
    const randomIndex = Math.floor(Math.random() * availableStarCount - 1);

    return availableStarNames[randomIndex];
};
