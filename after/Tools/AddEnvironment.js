import {getRandomNumber, getNameFromArray, getNameFromObject, randomNumberFromArrayInRange, checkChance, sortObjectInArray, findNumberFromTotal, randomNumberInRange} from './Tools';
import {outpostPossibility, ecosfericPossibility, mineralsPossibility, temperaturesSet, humiditiesSet, worldTypesSet, anomalyPossibility, hasLife, planetTypeConfiguration, amountPopulation, hasEcosferic, setPlanetNames, starNamesSet, planetSizesSet, setLifeCycleStars} from './Data';


export class AddEnvironment {
    constructor(condition) {

        if (condition === true) {


            this.drawnTemperature = '';
            this.drawnHumidity = '';
            this.indexTemperature = '';
            this.indexHumidity = '';
            this.worldTypeName = '';
            this.worldTypeDescription = '';

            this.initEnvironment()
        } else {
            console.log('planeta poza ekosferą, istenienie środowiska jest niemożliwe');
        }


    }

    initEnvironment() {
        this.addHumidity();
        this.addTemperature();
        this.matchTypeWorld();

    }

    matchTypeWorld() {
        for (let checkPlanet = 0; checkPlanet < worldTypesSet.length; checkPlanet++) {

            let requiredTemperature = worldTypesSet[checkPlanet].Temperature;
            let requiredHumidity = worldTypesSet[checkPlanet].Humidity;

            if (this.indexTemperature === requiredTemperature && this.indexHumidity === requiredHumidity) {

                this.worldTypeName = worldTypesSet[checkPlanet].Name;
                this.worldTypeDescription = worldTypesSet[checkPlanet].Description
            }
        }

    }


    addTemperature() {
        this.indexTemperature = getNameFromArray(temperaturesSet);
        this.drawnTemperature = getNameFromObject(temperaturesSet, this.indexTemperature, 'Name');

        console.log(this.drawnTemperature);
    }

    addHumidity() {
        this.indexHumidity = getNameFromArray(humiditiesSet);
        this.drawnHumidity = getNameFromObject(humiditiesSet, this.indexHumidity, 'Name');
    }

}