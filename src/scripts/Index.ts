import "../../sass/main.scss";
import {generatePlanet} from "./Modules/Generator";
import {cardCollection} from "./View/ShowDOM";
import '../../public/images/planets/planets2.jpg';
import '../../public/images/population/colony.jpg';
import '../../public/images/stars/star.jpg';
import '../../public/images/world/savanna.jpg';
import '../../public/images/background/wallpaper.jpg';
import axios from "axios";


export let currentSolarSystemNumber: number = 0;
export let planetsCollection: Array<object> = [];


enum Method {

    Auto = 'auto',
    Parameter = 'parameter',
    Custom = 'custom',

}

const Init = (chosenMethod: string): void => {

    switch (chosenMethod) {
        case Method.Auto:
            GenerateAllParameters();
            cardCollection();
            break;

        case Method.Parameter:
            console.log("change one parameter");
            break;

        case Method.Custom:
            console.log("custom planet");
            break;
    }
};

const getAvailableWorlds = async () => {
    return (await axios.get('http://localhost:3000/availableWorlds')).data;
};

const getAvailableHumidities = async () => {
    return (await axios.get('http://localhost:3000/availableHumidities')).data;
};

const getAvailableTemperatures = async () => {
    return (await axios.get('http://localhost:3000/availableTemperatures')).data;
};

const getAvailableLifeCycleStars = async () => {
    return (await axios.get('http://localhost:3000/availableLifeCycleStars')).data;
};

const getAvailableOutpostsTypes = async () => {
    return (await axios.get('http://localhost:3000/availableOutpostsTypes')).data;
};

const getAvailablePlanetNames = async () => {
    return (await axios.get('http://localhost:3000/availablePlanetNames')).data;
};

const getAvailablePlanetSizes = async () => {
    return (await axios.get('http://localhost:3000/availablePlanetSizes')).data;
};

const getAvailableRaces = async () => {
    return (await axios.get('http://localhost:3000/availableRaces')).data;
};

const getAvailableSpectralTypes = async () => {
    return (await axios.get('http://localhost:3000/availableSpectralTypes')).data;
};

const getAvailableStarNames = async () => {
    return (await axios.get('http://localhost:3000/availableStarNames')).data;
};

const GenerateAllParameters = async () => {
    const availableWorlds = await getAvailableWorlds();
    const availableHumidities = await getAvailableHumidities();
    const availableTemperatures = await getAvailableTemperatures();
    const availableLifeCycleStars = await getAvailableLifeCycleStars();
    const availableOutpostsTypes = await getAvailableOutpostsTypes();
    const availablePlanetNames = await getAvailablePlanetNames();
    const availablePlanetSizes = await getAvailablePlanetSizes();
    const availableRaces = await getAvailableRaces();
    const availableSpectralTypes = await getAvailableSpectralTypes();
    const availableStarNames = await getAvailableStarNames();

    let newPlanet: any = generatePlanet({
        availableWorlds,
        availableHumidities,
        availableTemperatures,
        availableLifeCycleStars,
        availableOutpostsTypes,
        availablePlanetNames,
        availablePlanetSizes,
        availableRaces,
        availableSpectralTypes,
        availableStarNames
    });
    planetsCollection.push(newPlanet);
    console.log(planetsCollection);

};


const click = ($element: string, chosenMethod: string) => {
    let clickedElement: any = document.getElementById($element);
    clickedElement.onclick = (): void => {
        Init(chosenMethod);
        currentSolarSystemNumber++;
    };
};

click("active", Method.Auto);
