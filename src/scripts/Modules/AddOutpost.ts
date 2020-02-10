import {getRandomNumber, getNameFromArray, getNameFromObject, randomNumberFromArrayInRange, checkChance, sortObjectInArray, findNumberFromTotal, randomNumberInRange} from '../Logic/Tools.js';
import {outpostPossibility, ecosfericPossibility, outpostsSet, indexDrawnRace, mineralsPossibility, mainRacesCollection, anomalyPossibility, hasLife, planetTypeConfiguration, amountPopulation, hasEcosferic, setPlanetNames, starNamesSet, planetSizesSet, setLifeCycleStars} from '../Data/Data.js';

class AddOutpost {
    raceArray: any;
    outpostPopulation: number;
    outpostIndex: number;
    outpostName: string;
    outpostDescription: any;

   public constructor() {

            this.raceArray = [];
            this.outpostPopulation = null;
            this.outpostIndex = null;
            this.outpostName = '';

            this.addAllSociety();

            console.log(this.raceArray);
    }


    addAllSociety() {

        this.addRaceToSociety();

        let initialPercentPopulation: number = 100;
        const lastPercentPopulation: number = 1;
        const amountRacesToRemove: number = 1;
        let hasPopulationToDraw: boolean;

        let copyRacesCollection: string[] = [...mainRacesCollection];

        function checkState(checkedArgument: boolean){

            checkedArgument = true;

            if (initialPercentPopulation <= lastPercentPopulation) {
                checkedArgument = false
            }
        }


        while (hasPopulationToDraw === true) {

            checkState(hasPopulationToDraw);

            let percentDrawnRace = randomNumberInRange(lastPercentPopulation, initialPercentPopulation);
            let indexDrawnRace = getNameFromArray(copyRacesCollection);
            let quantityDrawnRace = findNumberFromTotal(this.outpostPopulation, percentDrawnRace);

            //
            // if (copyRacesCollection[indexDrawnRace] === undefined) {
            //     copyRacesCollection.push(
            //         "Brak szczegółowych danych, błędy w raportach"
            //     );
            // }

            const raceOnOutpost: Array<object> = [];
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
        this.outpostDescription = getNameFromObject(outpostsSet, this.outpostIndex, 'description');

        this.outpostPopulation = randomNumberFromArrayInRange(outpostsSet, this.outpostIndex, 'minSize', 'maxSize');
    }



}

export default AddOutpost;

