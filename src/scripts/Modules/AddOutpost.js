import {getRandomNumber, getNameFromArray, getNameFromObject, randomNumberFromArrayInRange, checkChance, sortObjectInArray, findNumberFromTotal, randomNumberInRange} from '../Logic/Tools.js';
import {outpostPossibility, ecosfericPossibility, outpostsSet, indexDrawnRace, mineralsPossibility, mainRacesCollection, anomalyPossibility, hasLife, planetTypeConfiguration, amountPopulation, hasEcosferic, setPlanetNames, starNamesSet, planetSizesSet, setLifeCycleStars} from '../Data/Data.js';

class AddOutpost {
    constructor(condition) {

        if (condition === true) {

            this.raceArray = [];
            this.populationQuantity = '';
            this.outpostIndex = '';
            this.outpostName = '';


            this.addAllSociety();

            console.log(this.raceArray);
        } else {
            // console.log('Niestety nie ma żadnego posterunku na tej planecie');
        }


    }


    addAllSociety() {

        this.addRaceToSociety();

        let percentTotalPopulation = 100;


        let copyRaceSet = [...mainRacesCollection];

        while (percentTotalPopulation >= 1) {

            let percentDrawnRace = randomNumberInRange(1, percentTotalPopulation);


            let indexDrawnRace = getNameFromArray(copyRaceSet);

            //
            // if (copyRaceSet[indexDrawnRace] === undefined) {
            //     copyRaceSet.push(
            //         "Brak szczegółowych danych, błędy w raportach"
            //     );
            // }

            let quantityDrawnRace = findNumberFromTotal(this.populationQuantity, percentDrawnRace);

            const raceOnOutpost = {};
            raceOnOutpost['name'] = copyRaceSet[indexDrawnRace];
            raceOnOutpost['quantity'] = quantityDrawnRace;
            raceOnOutpost['percent'] = percentDrawnRace;

            this.raceArray.push(raceOnOutpost);

            percentTotalPopulation -= percentDrawnRace;
            copyRaceSet.splice(indexDrawnRace, 1);

        }

        sortObjectInArray(this.raceArray, 'percent');
        return this.raceArray
    }


    addRaceToSociety(conditionIsRight) {

        this.outpostIndex = getNameFromArray(outpostsSet);
        this.outpostName = getNameFromObject(outpostsSet, this.outpostIndex, 'name');
        this.outpostDescritpion = getNameFromObject(outpostsSet, this.outpostIndex, 'description');

        this.populationQuantity = randomNumberFromArrayInRange(outpostsSet, this.outpostIndex, 'minSize', 'maxSize');
    }



}

export default AddOutpost;

