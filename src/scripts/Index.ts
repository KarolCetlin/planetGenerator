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
}


const GenerateAllParameters = async () => {
    const availableWorlds = await getAvailableWorlds();


    let newPlanet: any = generatePlanet({
        availableWorlds
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
