import { planetHasEcosferic  } from './events'
import { World, Environment } from '../Types'
import { availableTemperatures } from "./availableTemperatures";
import { availableHumidities } from "./availableHumidities";
import { availableWorlds } from "./availableWorlds";

export const environmentGenerate = (): Environment => {

    if(planetHasEcosferic === true) {
        const countOfAvailableTemperatures = availableTemperatures.length;
        const countOfAvailableHumidities = availableHumidities.length;
        const randomAvailableTemperatureIndex = Math.floor(Math.random() * countOfAvailableTemperatures);
        const randomAvailableHumidityIndex = Math.floor(Math.random() * countOfAvailableHumidities);

        const temperatureParameters = availableTemperatures[randomAvailableTemperatureIndex];
        const humidityParameters = availableHumidities[randomAvailableHumidityIndex];

        return {
            temperatureName: temperatureParameters.name,
            temperatureDescription: temperatureParameters.description,
            humidityName: humidityParameters.name,
            humidityDescription: humidityParameters.description,
            worldName: matchWorld(randomAvailableTemperatureIndex, randomAvailableHumidityIndex).name,
            worldDescription: matchWorld(randomAvailableTemperatureIndex, randomAvailableHumidityIndex).description,
        }
    }
};

const matchWorld = (temperatureIndex: number, humidityIndex: number): World => {

    const countOfAvailableWorlds = availableWorlds.length;

    for (let availableWorldIndex = 0; availableWorldIndex < countOfAvailableWorlds; availableWorldIndex++) {

        let requiredTemperature = availableWorlds[availableWorldIndex].temperature;
        let requiredHumidity = availableWorlds[availableWorldIndex].humidity;

        if (temperatureIndex === requiredTemperature && humidityIndex === requiredHumidity) {

            return {
               name: availableWorlds[availableWorldIndex].name,
               description: availableWorlds[availableWorldIndex].description,
            }
        }
    }

};