import {getRandomNumber, getNameFromArray, getNameFromObject, randomNumberFromArrayInRange, checkChance, sortObjectInArray, findNumberFromTotal, randomNumberInRange} from '../Logic/Tools.js';
import {outpostPossibility, ecosfericPossibility, mineralsPossibility, temperaturesSet, humiditiesSet, worldTypesSet, anomalyPossibility, hasLife, planetTypeConfiguration, amountPopulation, hasEcosferic, setPlanetNames, starNamesSet, planetSizesSet, setLifeCycleStars} from '../Data/Data.js';


class Environment {
    constructor() {

            this.drawnTemperature = '';
            this.drawnTemperatureDescription = '';
            this.drawnHumidity = '';
            this.drawnHumidityDescription = '';
            this.indexTemperature = '';
            this.indexHumidity = '';
            this.worldTypeName = '';
            this.worldTypeDescription = '';

            this.initEnvironment()


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
        this.drawnTemperatureDescription = getNameFromObject(temperaturesSet, this.indexTemperature, 'Description');
    }

    addHumidity() {
        this.indexHumidity = getNameFromArray(humiditiesSet);
        this.drawnHumidity = getNameFromObject(humiditiesSet, this.indexHumidity, 'Name');
        this.drawnHumidityDescription = getNameFromObject(humiditiesSet, this.indexHumidity, 'Description');
    }

}

export default Environment;
