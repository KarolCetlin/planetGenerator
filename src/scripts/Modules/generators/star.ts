import {
    generateStarType,
    generateSpectralType,
} from './starType';
import { Star} from "../Types";


export const generateStar = (): Star => {

    return {
        name: genereteStarName(),
        lifeCycle: generateStarType(),
        spectral: generateSpectralType(),
    }

}

const availableStarNames: string[] = ['Polaris',
    'Syriusz',
    'Rigiel',
    'Vega',
    'Antares',
    'Canopus',
    'Kudo',
    'Oniga',
    'Kassimian',
    'Harravos',
    'Basusen',
    'Marev',
    'Elari',
    'Wrenn',
    'Jusurvo',
    'Soleko'];

const genereteStarName = (): string => {
    const availableStarCount = availableStarNames.length;
    const randomIndex = Math.floor(Math.random() * availableStarCount - 1);

    return availableStarNames[randomIndex];
};
