import {getRandomNumber, getNameFromArray, getNameFromObject, randomNumberFromArrayInRange, checkChance, sortObjectInArray, findNumberFromTotal, randomNumberInRange} from '../Logic/Tools.js';
import {outpostPossibility, ecosfericPossibility, outpostsSet, indexDrawnRace, mineralsPossibility, mainRacesCollection, anomalyPossibility, hasLife, planetTypeConfiguration, amountPopulation, hasEcosferic, setPlanetNames, starNamesSet, planetSizesSet, setLifeCycleStars} from '../Data/Data.js';

class AddOutpost {
    constructor(condition) {

        if (condition === true) {

            this.raceArray = [];
            this.outpostPopulation = '';
            this.outpostIndex = '';
            this.outpostName = '';

            this.addAllSociety();

            console.log(this.raceArray);
        } else {
            console.log('Niestety nie ma żadnego posterunku na tej planecie');
        }
    }


    addAllSociety() {

        this.addRaceToSociety();

        let initialPercentPopulation = 100;
        const lastPercentPopulation = 1;
        const amountRacesToRemove = 1;

        let copyRacesCollection = [...mainRacesCollection];

        while (initialPercentPopulation >= lastPercentPopulation) {

            let percentDrawnRace = randomNumberInRange(lastPercentPopulation, initialPercentPopulation);
            let indexDrawnRace = getNameFromArray(copyRacesCollection);
            let quantityDrawnRace = findNumberFromTotal(this.outpostPopulation, percentDrawnRace);

            //
            // if (copyRacesCollection[indexDrawnRace] === undefined) {
            //     copyRacesCollection.push(
            //         "Brak szczegółowych danych, błędy w raportach"
            //     );
            // }

            const raceOnOutpost = {};
            raceOnOutpost['name'] = copyRacesCollection[indexDrawnRace];
            raceOnOutpost['quantity'] = quantityDrawnRace;
            raceOnOutpost['percent'] = percentDrawnRace;

            this.raceArray.push(raceOnOutpost);

            initialPercentPopulation -= percentDrawnRace;
            copyRacesCollection.splice(indexDrawnRace, amountRacesToRemove);

        }

        sortObjectInArray(this.raceArray, 'percent');
        return this.raceArray
    }

    addRaceToSociety() {

        this.outpostIndex = getNameFromArray(outpostsSet);
        this.outpostName = getNameFromObject(outpostsSet, this.outpostIndex, 'name');
        this.outpostDescritpion = getNameFromObject(outpostsSet, this.outpostIndex, 'description');

        this.outpostPopulation = randomNumberFromArrayInRange(outpostsSet, this.outpostIndex, 'minSize', 'maxSize');
    }



}

export default AddOutpost;

