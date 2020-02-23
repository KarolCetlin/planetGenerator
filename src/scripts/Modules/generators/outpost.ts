import { planetHasOutpost } from './events';
import {OutpostsParameters, Outpost, Race} from "../Types";

const availableOutpostsTypes: OutpostsParameters[] = require('../../Data/availableOutpostsTypes.json');
const availableRaces: string[] = require('../../Data/availableRaces.json');


export const generateOutpost = (): Outpost => {

    if ( planetHasOutpost === true) {

        const countOfAvailableOutpostsTypes = availableOutpostsTypes.length;
        const randomAvailableOutpostsIndex = Math.floor(Math.random() * countOfAvailableOutpostsTypes);

        const outpostTypeParameters = availableOutpostsTypes[randomAvailableOutpostsIndex];
        let currentPopulation: number = Math.floor(Math.random() * (outpostTypeParameters.maxSize - outpostTypeParameters.minSize)) + outpostTypeParameters.minSize;

        console.log('jest kolonia');

        return {
            name: outpostTypeParameters.name,
            population: currentPopulation,
            description: outpostTypeParameters.description,
            society: addRaceToSociety(currentPopulation),
        }

    } else {

console.log('brak koloni');
        return {
            name: 'Brak',
            description: 'Ta planeta nie posiada żadnej kolonii',
        }
    }
};


const getRaceQuantityFromPercent = (totalNumber: number, percent: number): number => {
    let maxChanceToSuccess: number = 100;

    return Math.round((totalNumber / maxChanceToSuccess) * percent);
};

const sortRacesByPercents = (array: Object[], sortProperty: string): void => {

    array.sort((a: Object, b: Object) => b[sortProperty] - a[sortProperty]
    )

};

const getPercentOfRaceInPopulation = (minNumber: number, maxNumber: number): number => {
    return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
};

const getRaceNameIndex = (array: String[]): number => {
    return Math.floor(Math.random() * array.length);
};


const addRaceToSociety = (currentPopulation: number): Object[] => {

    let initialPercentPopulation: number = 100;
    const lastPercentPopulation: number = 1;
    const amountRacesToRemove: number = 1;
    let raceCollection: Object[] = [];
    let copyRacesCollection: string[] = [...availableRaces];

    while (initialPercentPopulation >= lastPercentPopulation) {

        let percentDrawnRace = getPercentOfRaceInPopulation(lastPercentPopulation, initialPercentPopulation);
        let indexDrawnRace = getRaceNameIndex(copyRacesCollection);
        let quantityDrawnRace = getRaceQuantityFromPercent(currentPopulation, percentDrawnRace);

        if (copyRacesCollection[indexDrawnRace] === undefined) {
            copyRacesCollection.push(
                "Dane uszkodzone"
            );
        }

        const Society: Array<object> = [];

        Society[Race.Name] = copyRacesCollection[indexDrawnRace];
        Society[Race.Quantity] = quantityDrawnRace;
        Society[Race.Percent] = percentDrawnRace;
        raceCollection.push(Society);

        initialPercentPopulation -= percentDrawnRace;
        copyRacesCollection.splice(indexDrawnRace, amountRacesToRemove);
    }

    sortRacesByPercents(raceCollection, Race.Percent);
    return raceCollection;

};
