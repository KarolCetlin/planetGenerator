import {currentSolarSystemNumber, planetsCollection} from "../../Index";
import { planetHasEcosferic } from '../../Modules/generators/events'

export const environmentCard = () => {

    if(planetHasEcosferic === true){
    visibleCard('worldSection', 'block');
    showTextWithDescription('humidityName', 'Wilgotność:', 'humidityName');
    showTextWithDescription('humidityDescription', '', 'humidityDescription');

    showTextWithDescription('temperatureName', 'Temperatura:', 'temperatureName');
    showTextWithDescription('temperatureDescription', '', 'temperatureDescription');

    showTextWithDescription('planetTypeName', '', 'worldName');
    showTextWithDescription('planetTypeDescription', '', 'worldDescription');
    } else {

        visibleCard('worldSection', 'none');
        clearElements("humidityName", "humidityDescription", 'temperatureName', 'temperatureDescription', 'planetTypeName', 'planetTypeDescription')

    }

};

enum HtmlElements {

    ShowCard = 'block',
    AnimationOut = 'animation__rollOut',
    AnimationIn = 'animation__rollIn',

}

const visibleCard = ($element, view) => {

    let element = document.getElementById($element);

    element.style.display = view;
    element.classList.remove(HtmlElements.AnimationOut);
    element.classList.add(HtmlElements.AnimationIn)

};


const showTextWithDescription = ($element: string, description: string, firstProperty: string): void => {
    const $domElement = document.getElementById($element);
    $domElement.innerHTML = `<span>${description}</span> ${planetsCollection[currentSolarSystemNumber]['environment'][firstProperty]}`;
};

const clearElements = (...args) => {

    let $elementsToClear = [...args];


    for(let elementIndex = 0; elementIndex < $elementsToClear.length; elementIndex++ ){


        let cleared = document.getElementById($elementsToClear[elementIndex]);
        cleared.innerHTML = '';
    }
}